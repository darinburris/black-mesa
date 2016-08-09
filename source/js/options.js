/**
* @module options factory
* @description API call to BV
* @author Amplifi Commerce Presentation Layer Technology Group
* @returns List of reviews from BV
*
*/

define(
    [
        'jquery'
    ],

    function($){

        function getOptions(context){

            var
            $module = $('[data-module=' + context + ']'),
            currData = $module.data(),
            dataArray = [];

            if ($module){

                $.each($module.data(),

                    function(i, v){

                        // removing data-option attribute
                        if (i==='module'){

                            return;

                        } else {

                            // BUG - data-attrribute comes back as optionOptionvalue, when passed in as option-optionValue:
                            // need to keep original camel casing, or stick to single words lowercase.
                            i = i.replace('option','');
                            //convert result to camelCase
                            i = i.substring(0,1).toLowerCase() + i.substring(1);
                            //extend(i);

                            dataArray.push({i:v});

                        }

                    }

                );

                return dataArray;

            }

        }

        return {
            currOptions : getOptions
        };

    }

);