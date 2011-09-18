    <tfoot>
        <tr>
            <td colspan="<?php echo $colspan; ?>" class="ui-widget-header">
                <ul class="paginate">
                    <li><?php echo $paginator->prev('Previous ', null, null, array('class' => 'disabled')); ?></li>
                    <li><?php echo $paginator->numbers(); ?></li>
                    <li><?php echo $paginator->counter(); ?></li>
                    <li><?php echo $paginator->next(' Next', null, null, array('class' => 'disabled'));  ?></li>
                </ul>
            </td>
        </tr>
    </tfoot>