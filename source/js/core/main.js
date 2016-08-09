define(
    [
        'core/common'
    ],

    function(common){

//    var common      = require();

    var ampModule = function(){

        this.setup = function(){
            console.log('base setup called');
        };

    };

    common.apply(ampModule);

    /**
        return a new object instance of Amp module for use on module definitions, otherwise module definitions
        change the base settings.
     */
    return ampModule;

});