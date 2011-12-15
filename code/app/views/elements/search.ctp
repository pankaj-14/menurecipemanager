<div id="search" class="ui-widget-content">
    <?php
    echo $this->Form->create($modelName);
    if (!empty($showModelSelect))
    {
        echo $this->Form->select('modelSelect', array(
            'recipeName' => 'Recipe Name',
            'ingredients' => 'Ingredients'
                ), $selected, array(
            'empty' => false
                )
        );
    }

    echo $this->Form->textarea('criteria', array('class' => 'ui-widget-content searchInput', 'rows' => 1));
    echo $this->Form->button('Clear', array('type'=>'reset'));
    echo $this->Form->submit('Filter', array('div' => false));
    echo $this->Form->end();
    ?>
</div>