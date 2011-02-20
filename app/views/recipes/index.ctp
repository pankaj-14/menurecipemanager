<div class="grid_12">
    <table class="ui-widget grid">
        <thead>
            <tr>
                <th class="ui-widget-header"><?php echo $paginator->sort('Name', 'name'); ?></th>
                <th class="ui-widget-header"><?php echo $paginator->sort('Servings', 'servings'); ?></th>
                <th class="ui-widget-header"><?php echo $paginator->sort('Prep Time', 'prep_time'); ?></th>
                <th class="ui-widget-header">Tags</th>
                <th class="ui-widget-header">Delete</th>
                <th class="ui-widget-header">Edit</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($results as $res): ?>
                <tr>
                    <td class="ui-widget-content"><?php
                echo $html->link($res['Recipe']['name'],
                        array('action' => 'view/' . $res['Recipe']['_id'])
                );
            ?></td>
                <td class="ui-widget-content"><?php echo $res['Recipe']['servings']; ?></td>
                <td class="ui-widget-content"><?php echo $res['Recipe']['prep_time']; ?></td>
                <td class="ui-widget-content"><?php echo $res['Recipe']['tags']; ?></td>
                <td class="ui-widget-content control">
                    <?php
                    echo $html->link('delete',
                            array('action' => 'delete/' . $res['Recipe']['_id']),
                            array('class' => 'ui-icon ui-icon-close')
                    );
                    ?>
                </td>
                <td class="ui-widget-content control">
                    <?php
                    echo $html->link('edit',
                            array('action' => 'edit/' . $res['Recipe']['_id']),
                            array('class' => 'ui-icon ui-icon-pencil')
                    );
                    ?>
                </td>
            </tr>
            <?php endforeach; ?>
                </tbody>
        <?php echo $this->element('pagination_controls', array('colspan' => 6)); ?>
    </table>
</div>