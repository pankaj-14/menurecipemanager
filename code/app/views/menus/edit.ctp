<div class="grid_12 ui-widget">
    <?php
    echo $this->Form->create();
    echo $this->Form->input('name', array('class' => 'ui-widget-content', 'size' => 32));
    echo $this->Form->input('description', array('class' => 'ui-widget-content', 'size' => 32));
    ?>
    <label>Recipes List</label>
    <table id="menus" class="ui-widget grid">
        <?php echo $this->element('recipe_row_header'); ?>
        <tbody>
        <?php
        $recipeRowCount = count($this->data['Menu']['recipes']);
        for ($rowNum = 0; $rowNum < $recipeRowCount; $rowNum++)
        {
            echo $this->element('recipe_row', array('rowNum' => $rowNum + 1));
        }
        ?>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2"></td>
                <td class="ui-widget-content" style="text-align:right;">
                    <?php
                    echo $this->Form->button('Add Recipe', array(
                        'id' => 'addRecipeRow',
                        'class' => 'ui-button ui-widget ui-state-default')
                    );
                    ?>
                </td>
            </tr>
        </tfoot>
    </table>
    <?php
                    echo $this->Form->button('Edit Menu', array(
                        'class' => 'ui-button ui-widget ui-state-default')
                    );
                    echo $this->Form->end();
    ?>
</div>