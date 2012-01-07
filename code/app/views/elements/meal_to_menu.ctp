<?php echo $this->Form->create(); ?>
<label>Meal</label>
<?php echo ucwords($meal['Meal']['name']); ?>

<?php
echo $this->Form->input('Meal.id', array('type' => 'hidden', 'value' => $meal['Meal']['_id']));
echo $this->Form->input('menu_id');

echo $this->Form->input('description');

echo $this->Form->button('Add Meal To Menu', array(
    'class' => 'ui-button ui-widget ui-state-default',
    'id' => 'addMealToMenu'
        )
);
?>
<?php echo $this->Form->end(); ?>