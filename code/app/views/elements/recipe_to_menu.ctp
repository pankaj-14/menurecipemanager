<?php echo $this->Form->create(); ?>
<label>Recipe</label>
<?php echo ucwords($recipe['Recipe']['name']); ?>

<?php
echo $this->Form->input('Recipe.id', array('type' => 'hidden', 'value' => $recipe['Recipe']['_id']));
echo $this->Form->input('menu_id');

echo $this->Form->input('servings', array('options' => array(1 => '1', 2 => '2', 3 => '3', 4 => '4', 5 => '5', 6 => '6'),
    'default' => 2,
    'div' => false,
    'label' => 'Servings',
    'class' => 'ui-widget-content'));

echo $this->Form->input('description');

echo $this->Form->button('Add Recipe To Menu', array(
    'class' => 'ui-button ui-widget ui-state-default',
    'id' => 'addRecipeToMenu'
        )
);
?>
<?php echo $this->Form->end(); ?>