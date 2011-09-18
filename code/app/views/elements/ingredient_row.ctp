<tr class="ingredientRow" id="row_<?php echo $rowNum; ?>">
    <td class="ui-widget-content">
        <?php
        echo $this->Form->input('Recipe.ingredients.' . $rowNum . '.whole',
                array(
                    'maxLength' => 2,
                    'size' => 2,
                    'label' => false,
                    'div' => false,
                    'class' => 'ui-widget-content wholeInput'));
        ?>
    </td>
    <td class="ui-widget-content">
        <?php
        echo $this->Form->input('Recipe.ingredients.' . $rowNum . '.fraction',
                array('div' => false,
                    'maxLength' => 4,
                    'size' => 3,
                    'label' => false,
                    'class' => 'ui-widget-content fractionInput'));
        ?>
    </td>
    <td class="ui-widget-content">
        <?php
        echo $this->Form->input('Recipe.ingredients.' . $rowNum . '.unit',
                array('div' => false,
                    'maxLength' => 32,
                    'size' => 24,
                    'label' => false,
                    'class' => 'unitsInput ui-widget-content '));
        ?>
    </td>
    <td class="ui-widget-content">
        <?php
        echo $this->Form->input('Recipe.ingredients.' . $rowNum . '.ingredient',
                array(
                    'div' => false,
                    'maxLength' => 32,
                    'size' => 24,
                    'label' => false,
                    'class' => 'ui-widget-content ingredientsInput'));
        ?>
    </td>
    <td class="ui-widget-content">
        <?php
        echo $this->Form->input('Recipe.ingredients.' . $rowNum . '.instruction',
                array(
                    'div' => false,
                    'maxLength' => 64,
                    'size' => 32,
                    'label' => false,
                    'class' => 'ingredientInstructionInput ui-widget-content'));
        ?>
    </td>
    <td class="ui-widget-content">
        <?php if ($rowNum > 1): ?>
            <div class = "ui-icon ui-icon-close deleteRow"></div>
        <?php endif; ?>
    </td>
</tr>