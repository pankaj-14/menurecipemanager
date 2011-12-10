<div id="search" class="ui-widget-content">
    <?php
    echo $this->Form->create($modelName);
    echo $this->Form->textarea('searchParams',
            array('class' => 'ui-widget-content searchInput', 'rows' => 1));
    echo $this->Form->button('Clear', array('type'=>'reset', 'div'=>false));
    echo $this->Form->submit('Filter', array('div' => false));
    echo $this->Form->end();
    ?>
</div>