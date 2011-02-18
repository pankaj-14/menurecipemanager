jQuery(document).ready( function() {
    /*
     * Shortcut Key Handler
     */
    CTRL = 17;
    isCTRL = false;
    INGREDIENT = 73;
    $(document).keyup(function (e) {
        if(e.which == CTRL) {
            isCTRL = false;
        }
    }).keydown(function(e){
        if(e.which == CTRL) {
            isCTRL = true;
        }
        if(e.which == INGREDIENT && isCTRL == true) {
            $.createIngredientRow()
            return false;
        }
    });
    /*
     * Ingredient Row Handler
     */
    $.createIngredientRow = function(){
        rowCount = ($('.ingredientRow').length);
        $.get('/recipes/getNewIngredientRow', {
            rowCount: rowCount + 1
        }, function(data){
            $(data).insertAfter('#row_' + rowCount + '.ingredientRow');
            $.createIngredientRowInputs();
            $('input[id="RecipeIngredients'+ (rowCount + 1) +'Whole"]').focus();
        });
        return false;
    }
    $.createIngredientRowInputs = function() {
        $.createUnits();
        $.createIngredientsInput();
        $.createIngredientDirectionsInput();
        $.createWholeAmountInput();
        $.createFractionAmountInput();
        $.deleteRowHandler();
    }
    $('#addIngredientRow').click(function(){
        $.createIngredientRow();
        return false;
    });
    /*
     * Recipe Row Handler
     */
    $('#addRecipeRow').click(function(){
        rowCount = ($('.recipeRow').length);
        $.get('/menus/getNewRecipeRow', {
            rowCount: rowCount + 1
        }, function(data){
            $(data).insertAfter('#row_' + rowCount)
        });
        return false;
    });
    /*
     * Recipe Instruction Row Handler
     */
    $('#addRecipeInstructionRow').click(function(){
        rowCount = ($('.recipeInstructionRow').length);
        $.get('/recipes/getNewRecipeInstructionRow', {
            rowCount: rowCount + 1
        }, function(data){
            $(data).insertAfter('#row_' + rowCount + '.recipeInstructionRow')
        });
        return false;
    });
    /*
     * Delete Row Handler
     */
    $.deleteRowHandler = function () {
        $('.deleteRow').css('cursor', 'pointer').attr('title', 'Click to delete row').click(function(){
            $(this).parents('TR').remove();
        });
    }

    function split( val ) {
        return val.split( /,\s*/ );
    }
    function extractLast( term ) {
        return split( term ).pop();
    }
    
    $( "#RecipeTags" )
    // don't navigate away from the field on tab when selecting an item
    .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "autocomplete" ).menu.active ) {
            event.preventDefault();
        }
    })
    .autocomplete({
        source: function( request, response ) {
            $.getJSON( "/tags/getTags", {
                term: extractLast( request.term )
            }, response );
        },
        search: function() {
            // custom minLength
            var term = extractLast( this.value );
            if ( term.length < 2 ) {
                return false;
            }
        },
        focus: function() {
            // prevent value inserted on focus
            return false;
        },
        select: function( event, ui ) {
            var terms = split( this.value );
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push( ui.item.value );
            // add placeholder to get the comma-and-space at the end
            terms.push( "" );
            this.value = terms.join( ", " );
            return false;
        }
    });

    $.widget( "custom.catcomplete", $.ui.autocomplete, {
        _renderMenu: function( ul, items ) {
            var self = this,
            currentCategory = "";
            $.each( items, function( index, item ) {
                if ( item.category != currentCategory ) {
                    ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                    currentCategory = item.category;
                }
                self._renderItem( ul, item );
            });
        }
    });

    if($( "#RecipeName" ).length > 0) {
        var recipeList;
        $.createRecipeInput = function() {
            $( ".recipeInput" ).autocomplete({
                source: function (request, response) {
                    if(typeof(recipleList) == 'undefined'){
                        $.getJSON('/recipes/getRecipes', function(data){
                            recipeList = data;
                            response(recipeList);
                        });
                    }else
                    {
                        response(recipeList);
                    }
                }
            });
        }
        $.createRecipeInput();
    }

    if($( ".unitsInput" ).length > 0) {
        var unitsList;
        $.createUnits = function() {
            $( ".unitsInput" ).autocomplete({
                source: function (request, response) {
                    if(typeof(unitsList) == 'undefined') {
                        $.getJSON('/units/getUnits', function(data){
                            unitsList = data;
                            response(unitsList);
                        });
                    } else {
                        response(unitsList);
                    }
                }
            });

        }
        $.createUnits();
    }




    $.createIngredientsInput = function() {
        $.getJSON('/ingredients/getIngredients', function(ingredientList){
            $( ".ingredientsInput" ).catcomplete({
                delay: 0,
                source: ingredientList
            });
        });
    }
    $.createIngredientsInput();

    $.createIngredientDirectionsInput = function()  {
        $.getJSON('/ingredient_instructions/getIngredientInstructions', function(ingredientInstructionList){
            $( ".ingredientInstructionInput" ).autocomplete({
                source: ingredientInstructionList
            });
        });
    }
    $.createIngredientDirectionsInput();

    //var fractionRegExp = /^[0-9]{0,2}\s{1}[0-9]{1}\/{1}[0-9]{1,2}/;
    $.createWholeAmountInput = function() {
        $('.wholeInput').keyup(function(){
            $(this).removeClass('ui-state-error');
            if ($(this).val() != '') {
                if( ! $(this).val().match(/^[0-9]{1,2}$/) ){
                    $(this).addClass('ui-state-error');
                }
            }
        });
    }
    $.createWholeAmountInput();

    $.createFractionAmountInput = function() {
        $('.fractionInput').keyup(function(){
            $(this).removeClass('ui-state-error');
            if ($(this).val() != '') {
                if( ! $(this).val().match(/^[0-9]{1,2}\/{1}[0-9]{1,2}$/) ){
                    $(this).addClass('ui-state-error');
                }
            }
        });
    }
    $.createFractionAmountInput();

    $.createPrepTimeInput = function() {
        $('#RecipePrepTime').keyup(function(){
            $(this).removeClass('ui-state-error');
            if ($(this).val() != '') {
                if( ! $(this).val().match(/^[0-9]{1,3}$/) ){
                    $(this).addClass('ui-state-error');
                }
            }
        });
    }
    $.createPrepTimeInput();


    $('#print').click(function(){
        
        $(':checkbox:checked').each(function(){
            row = $(this).parents('tr');
            table = $(this).closest('table');
            container = $(this).closest('div.category-container');
            $(row).remove();
            //console.log($(table).children('tbody').children('TR').length);
            if( $(table).children('tbody').children('TR').length == 0 ){
                $(container).remove();
            }
        });

        $('.printable').jqprint();
    });

});