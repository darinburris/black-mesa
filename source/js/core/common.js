define(
    [
        'utility',
        'jQuery'
    ],

    function(
        utility,
        $
    ){

    // var utility = require('utility');
    // var $ = require();

    var Common = function(){

        this.elem = null;
        this.defaults = {};
        this.ector = 'amp/module';
        this.type = 'module';

        this.bind = function(context,options){

            this.elem = context;
            this.options = options;
            this.init();

            if(this.type === 'module'){
                context.amp = this;
                var evt = document.createEvent('Event');
                // does this propogate, and is it cancelable?
                evt.initEvent('amp/module/loaded',true,false);
                context.dispatchEvent(evt);

            }


        };

        this.init = function() {
            var metadata = {};

            if (this.elem){
                $.each($(this.elem).data(),function(i,v){

                    // remvoving data-option attribute
                    if (i==='module'){
                        return;
                    } else {
                        // BUG - data-attrribute comes back as optionOptionvalue, when passed in as option-optionValue:
                        // need to keep original camel casing, or stick to single words lowercase.
                        i = i.replace('option','');
                        //convert result to camelCase
                        i = i.substring(0,1).toLowerCase() + i.substring(1);
                        metadata[i] = v;
                    }

                });
            }
            // added abaility to pass in options - unsure what should trump what.
            this.options = utility.extend({},this.defaults, this.options, metadata);
            //every module must have a setup() method
            if(this.setup){
                this.setup();
            }else {
                //TODO: Throw some error condition as this module is not valid
                console.log('watch out - im gonna throw an error at some point');

            }
            return this;
        };

        /**
         *
         * @param option
         * @param value
         * @returns {update}
         */
        this.update = function(option,value) {
            this.options[option] = value;

            return this;
        };


        /**
         * @function updateAll()
         * @description Updates options with new values. Will overwrite the same option if a new value is passed in
         * @param optionsObj
         */
        this.updateAll = function (optionsObj) {
            utility.extend(this.options,optionsObj);
        };

        /**
         * @function setDefaults
         * @description Sets defaults for options. If the option has already been set it will not overwrite the option
         * @param defaults
         */
        this.setDefaults = function (defaults){
            //create a
            var combine = utility.extend({}, defaults,this.options);
            utility.extend(this.options, combine);
        };

        /**
         *
         * @param hookName
         */
        this.hook = function (hookName){
            if (this.options[hookName] !== undefined) {
                // Call the user defined function.
                // Scope is set to the jQuery element we are operating on.
                this.options[hookName].call(this,this.$elem);
            }
        };

        this.getOption = function (whatToGet){
            return this.options[whatToGet];
        };

        this.destroy = function(){
        };

        this.setName = function(val){
          this.ector = val;
        };

        this.getName = function(){
            return this.ector;
        };
    };

    return Common;
});