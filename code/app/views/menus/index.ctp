<div class="grid_12">
    <table class="ui-widget grid">
        <thead>
            <tr>
                <th class="ui-widget-header"><?php echo $paginator->sort('Menu', 'menu'); ?></th>
                <th class="ui-widget-header">Description</th>
                <th class="ui-widget-header">Delete</th>
                <th class="ui-widget-header">Edit</th>
                <th class="ui-widget-header">Make List</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($results as $res): ?>
                <tr>
                    <td class="ui-widget-content"><?php echo $res['Menu']['name']; ?></td>
                    <td class="ui-widget-content"><?php echo $res['Menu']['description']; ?></td>
                    <td class="ui-widget-content control">
                    <?php
                    echo $html->link('delete',
                            array('action' => 'delete/' . $res['Menu']['_id']),
                            array('class' => 'ui-icon ui-icon-close')
                    );
                    ?>
                </td>
                <td class="ui-widget-content control">
                    <?php
                    echo $html->link('edit',
                            array('action' => 'edit/' . $res['Menu']['_id']),
                            array('class' => 'ui-icon ui-icon-pencil')
                    );
                    ?>
                </td>
                <td class="ui-widget-content control" style="width:70px;">
                    <?php
                    echo $html->link('Make List',
                            array('action' => 'shoppingList/' . $res['Menu']['_id']),
                            array('class' => 'ui-icon ui-icon-check')
                    );
                    ?>
                </td>
            </tr>
            <?php endforeach; ?>
                </tbody>
        <?php echo $this->element('pagination_controls', array('colspan' => 5)); ?>
    </table>
</div>