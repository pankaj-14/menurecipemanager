<div class="ui-widget-content">
    <?php
    echo $this->Form->create('Recipe');
    echo $this->Form->textarea('searchParams',
            array('class' => 'ui-widget-content searchInput'));
    echo $this->Form->end('Search');
    ?>
</div>