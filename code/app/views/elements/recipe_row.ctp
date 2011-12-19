<tr class="recipeRow" id="row_<?php echo $rowNum; ?>">
    <td class="ui-widget-content">
        <?php
        echo $this->Form->input('Menu.recipes.' . $rowNum . '.name',
                array('options' => $recipes,
                    'div' => false,
                    'label' => false,
                    'class' => 'ui-widget-content recipeInput'));
        ?>
    </td>
    <td class="ui-widget-content">
        <?php
        echo $this->Form->input('Menu.recipes.' . $rowNum . '.servings',
                array('options' => array( 1 => '1', 2 => '2', 3 => '3', 4 => '4', 5 => '5', 6 => '6' ),
                    'default' => 2,
                    'div' => false,
                    'label' => false,
                    'class' => 'ui-widget-content'));
        ?>
    </td>
    <td class="ui-widget-content">
        <?php
        echo $this->Form->input('Menu.recipes.' . $rowNum . '.description',
                array('div' => false,
                    'label' => false,
                    'class' => 'ui-widget-content'));
        ?>
    </td>
    <td class="ui-widget-content">
        <?php
        echo $html->link('view',
                array(
                    'controller'=>'recipes', 
                    'action' => 'view',
                    $this->data['Menu']['recipes'][$rowNum]['name']
                ), // should be id
                array(
                    'class' => 'recipeQuickView'
             )
        );
        ?>
    </td>
    <td class="ui-widget-content">
        <div class = "ui-icon ui-icon-close deleteRow"></div>
    </td>
</tr>