<div class="grid_12 ui-widget">
    <?php
    echo $this->Form->create();
    echo $this->Form->input('name', array(
        'class' => 'ui-widget-content',
        'size' => 32,
        'maxlength' => 32)
    );
    echo $this->Form->input('access', array(
        'options' => array('public' => 'public', 'private' => 'private'),
        'default' => 'private',
        'class' => 'ui-widget-content'
            )
    );
    echo $this->Form->input('servings', array(
        'class' => 'ui-widget-content',
        'size' => 32,
        'maxlength' => 2)
    );
    echo $this->Form->input('prep_time', array(
        'class' => 'ui-widget-content',
        'size' => 32,
        'maxlength' => 3,
        'label' => 'Prep Time (minutes)')
    );
    echo $this->Form->input('cook_time', array(
        'class' => 'ui-widget-content',
        'size' => 32,
        'maxlength' => 3,
        'label' => 'Cook Time (minutes)')
    );
    echo $this->Form->input('tags', array(
        'type' => 'textarea',
        'class' => 'ui-widget-content',
        'rows' => 2)
    );
    echo $this->Form->input('description', array(
        'type' => 'textarea',
        'class' => 'ui-widget-content',
        'rows' => 2)
    );
    ?>
    <label>Recipe Instructions</label>
    <table class="ui-widget grid">
        <?php echo $this->element('recipe_instruction_row_header'); ?>
        <tbody>
            <?php echo $this->element('recipe_instruction_row', array('rowNum' => '1')); ?>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td class="ui-widget-content" style="text-align:right;">
                    <?php
                    echo $this->Form->button('Add Instruction', array(
                        'id' => 'addRecipeInstructionRow',
                        'class' => 'ui-button ui-widget ui-state-default')
                    );
                    ?>
                </td>
            </tr>
        </tfoot>
    </table>


    <label>Ingredients List</label>
    <table class="ui-widget grid">
        <?php echo $this->element('ingredient_row_header'); ?>
                    <tbody>
            <?php echo $this->element('ingredient_row', array('rowNum' => '1')); ?>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4"></td>
                        <td class="ui-widget-content" style="text-align:right;">
                    <?php
                    echo $this->Form->button('Add Ingredient', array(
                        'id' => 'addIngredientRow',
                        'class' => 'ui-button ui-widget ui-state-default')
                    );
                    ?>
                </td>
            </tr>
        </tfoot>
    </table>
    <?php
                    echo $this->Form->button('Add Recipe', array(
                        'class' => 'ui-button ui-widget ui-state-default')
                    );
                    echo $this->Form->end();
    ?>
</div>