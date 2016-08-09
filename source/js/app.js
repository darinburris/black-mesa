/**
 * @module APP
 * @description Our Amp goes to 11.
 * @author Amplifi Commerce Presentation Layer Technology Group
 *
 */
define(
    [
        'events',
        'utility',
        'jQuery',
        'config'
    ],

    function(

        events,
        util,
        $,
        mConfig
    ){

    'use strict';

    console.log('parse app');
    var modules = {};

    function module(name){

        return modules[name];

    }

    /**
     * @name: loadModules
     * @description: function to load modules. Must be passed a context and require call must be made from here
     *  in order to preserve context: See Closures.
     * @param context
     */
    var loadModule = function(context){
        var moduleName = 'modules/' + context.getAttribute('data-module');

        require([moduleName], function(newMod){
            var mod = Object.create(newMod);
            if(mod){

                mod.bind(context);

            }else{
                console.log('%s Module not found', moduleName);
            }
        });
    };

    /**
     * Helper function to determine if item is of Amp Option type
     * @funtion _hasMetaOption
     * @param item - HTMLMetaElement
     * @returns {boolean}
     * @private
     */
    var _hasMetaOption = function(item){

        return (item.getAttribute('amp') && item.getAttribute('amp') === 'option');

    };

    /**
     * Helper function to determine if HTMLMetaElement is of Amp OptionsFile type
     * @function _hasMetaFileOption
     * @param item
     * @returns {boolean}
     * @private
     */
    var _hasMetaFileOption = function(item){

        return (item.getAttribute('amp') && item.getAttribute('amp') === 'optionsFile');

    };


    /**
     * Helper function that merges Global ampConfig object with internal RequireJS Amp configuration
     * @function _loadOptionsFromGlobalObject
     * @private
     */
    var _loadOptionsFromGlobalObject = function(){
        if(typeof ampConfig !== 'undefined' && ampConfig !== null){
            util.extend(mConfig, ampConfig);
        }
    };

    /**
     * Helper Function that converts a name value pair to an interal Amp Configuration parameter while
     * supporting multiple object levels
     * @function _makeConfigObject
     * @param name - name of configuration with "/" as a delimeter for depth
     * @param value - value of option
     * @private
     */
    var _makeConfigObject = function(name, value){
        if(name.indexOf('/') <0){
            if(!mConfig[name]){
                mConfig[name] = value;
            }
            return;
        }

        var parts = name.split('/'),
            parent = mConfig;

        for(var ptx=0; ptx<parts.length; ptx++){
            if(ptx !== parts.length -1){
                parent[parts[ptx]] = {};
                parent = parent[parts[ptx]];
            }else{
                parent[parts[ptx]] = value;
            }
        }
    };

    /**
     * Helper function that extracts options from META tags of type Amp Option
     * @function _loadOptionsFromMetaList
     * @param list - Array list of HTMLMetaElements
     * @private
     */
    var _loadOptionsFromMetaList = function(list){

        if(!list || list.length < 1) {
            return;
        }

        for(var idx= 0; idx<list.length; idx++){
            _makeConfigObject( list[idx].getAttribute('name'), list[idx].getAttribute('content'));
        }
    };

    /**
     * Helper function that loads options from an external configuration file
     * @function _loadOptionsFromMetaFile
     * @param file
     * @private
     */
    var _loadOptionsFromMetaFile = function(file){
        if(!file || file.length < 1) {
            return;
        }
        //get path to options file - make sure it's the first in case someone adds multiple by accident
        var optsFilePath = file[0].getAttribute('content');
        //get file - synchronously
        $.ajax({
            url: '',
            type: 'GET',
            dataType: 'json',
            async: false,
            crossDomain: true,
            success: function(){console.log('Options File Loaded');},
            error: function(data, errorThrown){
                console.log('Failed to Load Options File @: ' + optsFilePath + ' : ' + errorThrown);
            }
        }).done(function(data){
            //extend Amp Options with data found in configuration file
            util.extend(mConfig, data);
        });
    };

    /**
     * Load global configuration options
     * @function _loadGlobalOptions
     * @private
     */
    var _loadGlobalOptions = function(){

        _loadOptionsFromGlobalObject();

        var metaNodeList = document.querySelectorAll('head meta[amp]');

        if(metaNodeList.length === 0) {
            return;
        }

        //convert NodeList to Array
        var metaList = Array.prototype.slice.call(metaNodeList);

        //handle individual options
        _loadOptionsFromMetaList(metaList.filter(_hasMetaOption));

        //handle options file
        _loadOptionsFromMetaFile(metaList.filter(_hasMetaFileOption));

    };

    /**
     * Amp Application Initialization
     * @function init
     */
    var init = function(){

        console.log('inside app');

        //load any global options from calling application that are required for modules
        _loadGlobalOptions();

        console.log('inside app, pt 2');

        var moduleNodes = document.querySelectorAll('[data-module]');

        console.log(moduleNodes);

        for(var i = 0; i < moduleNodes.length; i++){

            console.log(moduleNodes[i]);

            loadModule(moduleNodes[i]);

        }

    };


    /**
     * Internal function that starts Amp processing once loaded or complete states have been reached for the current
     * document state.
     * @private
     */
    var _begin = function(){

        console.log('app begin');
        var readyState = document.readyState;

        if(readyState === 'loaded' || readyState === 'complete'){
            document.removeEventListener('readystatechange', _begin);
            init();
        }else{
            document.addEventListener('readystatechange', _begin);
        }

    };


    _begin();


    return {
        events  : events,
        module  : module

    };

});