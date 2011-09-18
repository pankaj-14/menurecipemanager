<div class="grid_12 ui-widget">
<?php
echo $this->Form->create();
echo $this->Form->input('tag', array('class' => 'ui-widget-content', 'size' => 32));
echo $this->Form->button('Add Tag', array('class' => 'ui-button ui-widget ui-state-default'));
echo $this->Form->end();
?>
</div>