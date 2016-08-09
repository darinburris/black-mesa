define(function(require){
    'use strict';

        function arrayMerge(root, add){

            var addLength = add.length;
            for(var i = 0; i < addLength; i++){
                var addItem = add[i];
                if(root.indexOf(addItem) === -1){
                    root.push(addItem);
                }
            }

        }

        function arrayRemove(ary, val){

            var index = ary.indexOf(val);
            if(index >= 0){
                ary.splice(index, 1);
            }

        }

        function where(ary, props){

            var results = [],
                arrayLength = ary.length;
            for(var i = 0; i < arrayLength; i++){
                var match = true;

                for(var prop in props){
                    if(props.hasOwnProperty(prop)) {
                        match = ary[i][prop] === props[prop];
                    }
                }

                if(match){
                    results.push(ary[i]);
                }
            }
            return results;

        }

        function extend(){

            var objects = arguments,
                root = Array.prototype.shift.apply(objects, []),
                appendsLength = objects.length;
            for(var i = 0; i < appendsLength; i++){
                var append = objects[i];
                for(var prop in append){
                    if(append.hasOwnProperty(prop)) {
                        root[prop] = (typeof append[prop] === 'object') ?
                            (Array.isArray(append[prop])) ?
                                append[prop].slice(0) :
                                extend({}, append[prop]) :
                            append[prop];
                    }
                }
            }
            return root;

        }

        return {
            arrayMerge  : arrayMerge,
            arrayRemove : arrayRemove,
            where       : where,
            extend      : extend
        };
});