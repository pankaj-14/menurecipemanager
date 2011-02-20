<table id="ingredientList" class="ui-widget grid">
    <thead>
        <tr>
            <th class="ui-widget-header"><?php echo $paginator->sort('Ingredient', 'ingredient'); ?></th>
            <th class="ui-widget-header"><?php echo $paginator->sort('Type', 'type'); ?></th>
            <th class="ui-widget-header">Delete</th>
            <th class="ui-widget-header">Edit</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($results as $res): ?>
            <tr>
                <td class="ui-widget-content" style="width:100%;"><?php echo $res['Ingredient']['ingredient']; ?></td>
                <td class="ui-widget-content"  title="<?php echo $res['Ingredient']['_id']; ?>">
                <?php
                echo $this->Form->input('Ingredient.ingredient_type',
                        array('options' => $ingredientTypes,
                            'empty' => '(Choose One)',
                            'selected' => $res['Ingredient']['type'],
                            'div' => false,
                            'label' => false,
                            'class' => "ui-widget-content"));
                ?>

            </td>
            <td class="ui-widget-content control">
                <?php
                echo $html->link('delete',
                        array('action' => 'delete/' . $res['Ingredient']['_id']),
                        array('class' => 'ui-icon ui-icon-close')
                );
                ?>
            </td>
            <td class="ui-widget-content control">
                <?php
                echo $html->link('edit',
                        array('action' => 'edit/' . $res['Ingredient']['_id']),
                        array('class' => 'ui-icon ui-icon-pencil')
                );
                ?>
            </td>
        </tr>
        <?php endforeach; ?>
            </tbody>
    <?php echo $this->element('pagination_controls', array('colspan' => 4)); ?>
</table>