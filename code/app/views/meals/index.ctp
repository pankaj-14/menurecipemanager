<div class="grid_12">
    <table class="ui-widget grid">
        <thead>
            <tr>
                <th class="ui-widget-header"><?php echo $paginator->sort('Meal', 'meal'); ?></th>
                <th class="ui-widget-header">Description</th>
                <th class="ui-widget-header">Delete</th>
                <th class="ui-widget-header">Edit</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($results as $res): ?>
                <tr>
                    <td class="ui-widget-content"><?php echo $res['Meal']['name']; ?></td>
                    <td class="ui-widget-content"><?php echo $res['Meal']['description']; ?></td>
                    <td class="ui-widget-content control">
                    <?php
                    echo $html->link('delete',
                            array('action' => 'delete/' . $res['Meal']['_id']),
                            array('class' => 'ui-icon ui-icon-close')
                    );
                    ?>
                </td>
                <td class="ui-widget-content control">
                    <?php
                    echo $html->link('edit',
                            array('action' => 'edit/' . $res['Meal']['_id']),
                            array('class' => 'ui-icon ui-icon-pencil')
                    );
                    ?>
                </td>
            </tr>
            <?php endforeach; ?>
                </tbody>
        <?php echo $this->element('pagination_controls', array('colspan' => 5)); ?>
    </table>
</div>