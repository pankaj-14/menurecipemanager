<div class="grid_12 ui-widget">
<?php
echo $this->Form->create();
echo $this->Form->input('ingredient', array('class' => 'ui-widget-content', 'size' => 32));
echo $this->Form->input('type', array('class' => 'ui-widget-content', 'options' => $ingredientTypes));
echo $this->Form->button('Add Ingredient', array('class' => 'ui-button ui-widget ui-state-default'));
echo $this->Form->end();
?>
</div>
