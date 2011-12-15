<?php echo $this->Form->create(); ?>
<div class="grid_3 ui-widget">
    <?php
    echo $this->Form->input('name', array(
        'class' => 'ui-widget-content',
        'size' => 32,
        'maxlength' => 128)
    );
    echo $this->Form->input('access', array(
        'options' => array('public' => 'public', 'private' => 'private'),
        'default' => 'private',
        'class' => 'ui-widget-content'
            )
    );
    echo $this->Form->input('servings', array(
        'class' => 'ui-widget-content',
        'size' => 12,
        'maxlength' => 2)
    );
    echo $this->Form->input('prep_time', array(
        'class' => 'ui-widget-content',
        'size' => 12,
        'maxlength' => 3,
        'label' => 'Prep Time (minutes)')
    );
    echo $this->Form->input('cook_time', array(
        'class' => 'ui-widget-content',
        'size' => 32,
        'maxlength' => 3,
        'label' => 'Cook Time (minutes)')
    );
    echo $this->Form->input('source', array(
        'class' => 'ui-widget-content',
        'size' => 32,
        'maxlength' => 64,
        'label' => 'Source')
    );
?>
</div>
<div class="grid_6 ui-widget">
<?php
    
    echo $this->Form->input('description', array(
        'type' => 'textarea',
        'class' => 'ui-widget-content',
        'rows' => 2,
        'cols' => 45)
    );
    echo $this->Form->input('instructions', array(
    'type' => 'textarea',
    'class' => 'ui-widget-content',
    'rows' => 8,
    'cols' => 45)
    );
     echo $this->Form->input('tags', array(
        'type' => 'textarea',
        'class' => 'ui-widget-content',
        'rows' => 1,
        'cols' => 45)
    );   
?>
</div>
<div class="grid_3 ui-widget">
<?php
    $nutrional_length = 12;
    echo $this->Form->input('Recipe.nutritional_info.calories', array(
    'class' => 'ui-widget-content',
    'size' => $nutrional_length,
    'maxlength' => $nutrional_length,
    'label' => 'Calories')
    );
    echo $this->Form->input('Recipe.nutritional_info.total_fat', array(
    'class' => 'ui-widget-content',
    'size' => $nutrional_length,
    'maxlength' => $nutrional_length,
    'label' => 'Total Fat')
    );
    echo $this->Form->input('Recipe.nutritional_info.cholesterol', array(
    'class' => 'ui-widget-content',
    'size' => $nutrional_length,
    'maxlength' => $nutrional_length,
    'label' => 'Cholesterol')
    );
    echo $this->Form->input('Recipe.nutritional_info.sodium', array(
    'class' => 'ui-widget-content',
    'size' => $nutrional_length,
    'maxlength' => $nutrional_length,
    'label' => 'Sodium')
    );
    echo $this->Form->input('Recipe.nutritional_info.total_carbs', array(
    'class' => 'ui-widget-content',
    'size' => $nutrional_length,
    'maxlength' => $nutrional_length,
    'label' => 'Total Carbs')
    );
    echo $this->Form->input('Recipe.nutritional_info.dietary_fiber', array(
    'class' => 'ui-widget-content',
    'size' => $nutrional_length,
    'maxlength' => $nutrional_length,
    'label' => 'Dietary Fiber')
    );
    echo $this->Form->input('Recipe.nutritional_info.protein', array(
    'class' => 'ui-widget-content',
    'size' => $nutrional_length,
    'maxlength' => $nutrional_length,
    'label' => 'Protein')
    );
?>
</div>

<div class="clear"></div>

<div class="grid_12 ui-widget">
<label>Ingredients List</label>
<table class="ui-widget grid">
    <?php echo $this->element('ingredient_row_header'); ?>
                <tbody>
        <?php
                $ingredientRowCount = count($this->data['Recipe']['ingredients']);
                for ($rowNum = 0; $rowNum < $ingredientRowCount; $rowNum++)
                {
                    echo $this->element('ingredient_row', array('rowNum' => $rowNum + 1));
                }
        ?>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4"></td>
                    <td class="ui-widget-content" style="text-align:right;">
                <?php echo $this->Form->button('Add Ingredient', array('id' => 'addIngredientRow', 'class' => 'ui-button ui-widget ui-state-default')); ?>
            </td>
        </tr>
    </tfoot>
</table>
<?php
                echo $this->Form->button('Edit Recipe', array('class' => 'ui-button ui-widget ui-state-default'));
                echo $this->Form->end();
?>
</div>
<?php
//var_dump($this->data['Recipe']);
?>