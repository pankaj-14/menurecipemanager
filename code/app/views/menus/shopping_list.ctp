<div class="ui-widget">
    <input type="button" id="print" value="Print" name="Print" class="ui-widget-content"/>
</div>
<div id="shopping-list" class="printable">
<?php echo colHeader(); ?>
<?php foreach ($shoppingList as $category => $ingredients): ?>
        <div class="category-container">
            <label class="capitalize"><?php echo $category; ?></label>
        <table class="ui-widget grid">
            <tbody>
<?php foreach ($ingredients as $item): ?>
                    <tr>
                        <td class="ui-widget-content ingredient"><?php echo $item->ingredient; ?></td>
                    <td class="ui-widget-content amount">
<?php
        if ($item->amount > 0)
        {
            if (is_float($item->amount))
            {
                $this->Conversion->decimalToFraction($item->amount);
            }
            else
            {
                echo $item->amount;
            }
        }
?>
                    </td>
                    <td class="ui-widget-content unit"><?php echo $item->unit; ?></td>
                    <td class="ui-widget-content control" style="vertical-align:middle; width:20px;">
                        <input title="Check this box to exlude the item from printing" class="ui-widget-content center" type="checkbox" name="<?php echo $item->ingredient ?>" />
                    </td>
                </tr>
<?php endforeach; ?>
            </tbody>
        </table>
    </div>
<?php
                        if ($colCounter < $cols)
                        {
                            $colCounter++;
                        }
                        else
                        {
                            $colCounter = 1;
                        }
?>

    <?php endforeach; ?>
                    </div>
<?php 
function colHeader()
{
    $str ='<table class="ui-widget grid">
            <thead>
                <tr>
                    <th class="ui-widget-header ingredient">Ingredient</th>
                    <th class="ui-widget-header amount">Amount</th>
                    <th class="ui-widget-header unit">Unit</th>
                    <th class="ui-widget-header control">Exclude</th>
                </tr>
            </thead>
    </table>';
    return $str;
}


?>