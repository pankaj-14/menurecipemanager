<div class="grid_12">
    <table class="ui-widget grid">
        <thead>
            <tr>
                <th class="ui-widget-header"><?php echo $paginator->sort('Tag', 'tag'); ?></th>
                <th class="ui-widget-header">Delete</th>
                <th class="ui-widget-header">Edit</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($results as $res): ?>
                <tr>
                    <td class="ui-widget-content"><?php echo $res['Tag']['tag']; ?></td>
                    <td class="ui-widget-content control">
                    <?php
                    echo $html->link('delete',
                            array('action' => 'delete/' . $res['Tag']['_id']),
                            array('class' => 'ui-icon ui-icon-close')
                    );
                    ?>
                </td>
                <td class="ui-widget-content control">
                    <?php
                    echo $html->link('edit',
                            array('action' => 'edit/' . $res['Tag']['_id']),
                            array('class' => 'ui-icon ui-icon-pencil')
                    );
                    ?>
                </td>
            </tr>
            <?php endforeach; ?>
            <?php echo $this->element('pagination_controls', array('colspan' => 3)); ?>
    </table>
</div>