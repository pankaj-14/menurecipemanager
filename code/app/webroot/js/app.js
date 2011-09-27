jQuery(document).ready( function() {
   
    if($('#shopping-list').length > 0) {
        $('#shopping-list').columnize({
            columns: 3
        });
    }
    /*
     * InplaceEdit for IngredientType
     */
    $('.edit').each(function(){
        var _this = this;
        var currValue = $(_this).html();
        var data = {
            ingredient: $(_this).siblings()[0].innerHTML,
            _id : $(_this).parent().attr('id')
        };
        
        $(_this).editable('/ingredients/updateType/' + $(_this).parent().attr('id'), { 
            type    : 'select',
            name    : "type",
            cancel  : 'cancel',
            submit  : 'OK',
            loadurl : "/ingredientTypes/ingredientTypeList",
            submitdata : data,
            callback : function(value, settings){
                response = $.parseJSON(value);
                if(response.status == 'success'){
                    $(this).html(response.params.type);
                } else {
                    $(this).html(currValue);
                }
            }
        });
    });
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
     * DEFAULT DIALOG
     */
    $('#dialog').dialog({
        autoOpen:false,
        draggable:false,
        modal:true,
        resizable:false
    });
    $.popDialog = function (response, close_func) {
        $('#dialog').dialog('option', 'title', response.title);
        $('#dialog').dialog('option', 'dialogClass', 'ui-state-'+response.status);
        $('#dialog').dialog('option', 'open', $('#dialog').html('<div class="ui-state-'+response.status+'-text">'+response.msg+'</div>'));
        if(close_func != null){
            $('#dialog').dialog('option', 'close', close_func);
        }
        $('#dialog').dialog('open');
    }

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
        // Scroll the page all the up.
        // TODO calculate this so the input row is in the vertical middle
        $('body').scrollTop($('body').height());
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
                position : {
                    collision:"flip"
                },
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
                source: ingredientList,
                position : {
                    collision:"flip"
                }
            });
        });
    }
    $.createIngredientsInput();

    $.createIngredientDirectionsInput = function()  {
        $.getJSON('/ingredient_instructions/getIngredientInstructions', function(ingredientInstructionList){
            $( ".ingredientInstructionInput" ).autocomplete({
                source: ingredientInstructionList,
                position : {
                    collision:"flip"
                }
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

    /*
     * All autocomplete inputs in the ingredient row should not show their lists
     * below the fold.
     */
    /*
    $( "tr.ingredientRow td input" ).autocomplete( "option", "position", {
        collision:"flip"
    } );
     */
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

    $('#ingredientList select').change(function(){
        if($(this).val()){
            el = $(this);
            $.getJSON('updateIngredientType', {
                ingredient_type:$(this).val(),
                ingredient_id:$(this).parent('td').attr('title')
            }, function(response){
                if(response.status == 'success'){
                    $(el).addClass('ui-state-' + response.status, 'slow', function(){
                        $(this).removeClass('ui-state-' + response.status, 'fast');
                    });
                } else {
                    $.popDialog(response, null);
                }
            });
        }
    });

});