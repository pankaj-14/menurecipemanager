<tr class="recipeInstructionRow" id="row_<?php echo $rowNum; ?>">
    <td class="ui-widget-content control">
        <?php echo $rowNum . '. '; ?>
    </td>
    <td class="ui-widget-content">
        <?php
        echo $this->Form->textarea('Recipe.instructions.' . $rowNum,
                array(
                    'label' => false,
                    'div' => false,
                    'class' => 'ui-widget-content recipeInstructionInput'));
        ?>
    </td>
    <td class="ui-widget-content control">
        <?php if ($rowNum > 1): ?>
            <div class = "ui-icon ui-icon-close deleteRow"></div>
        <?php endif; ?>
    </td>
</tr>