<div class="grid_12">
    <table class="ui-widget grid">
        <thead>
            <tr>
                <th class="ui-widget-header"><?php echo $paginator->sort('Long Name', 'l_name'); ?></th>
                <th class="ui-widget-header">Short Name</th>
                <th class="ui-widget-header">Delete</th>
                <th class="ui-widget-header">Edit</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($results as $res): ?>
                <tr>
                    <td class="ui-widget-content"><?php echo $res['Unit']['l_name']; ?></td>
                    <td class="ui-widget-content"><?php echo $res['Unit']['s_name']; ?></td>
                    <td class="ui-widget-content control">
                    <?php
                    echo $html->link('delete',
                            array('action' => 'delete/' . $res['Unit']['_id']),
                            array('class' => 'ui-icon ui-icon-close')
                    );
                    ?>
                </td>
                <td class="ui-widget-content control">
                    <?php
                    echo $html->link('edit',
                            array('action' => 'edit/' . $res['Unit']['_id']),
                            array('class' => 'ui-icon ui-icon-pencil')
                    );
                    ?>
                </td>
            </tr>
            <?php endforeach; ?>
                </tbody>
        <?php echo $this->element('pagination_controls', array('colspan' => 4)); ?>
    </table>
</div>