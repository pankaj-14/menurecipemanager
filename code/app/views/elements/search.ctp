<div id="search" class="ui-widget-content">
    <?php
    echo $this->Form->create($modelName);
    echo $this->Form->textarea('searchParams',
            array('class' => 'ui-widget-content searchInput', 'rows' => 1));
    echo $this->Form->end('Search');
    ?>
</div>