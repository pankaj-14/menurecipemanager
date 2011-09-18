<div class="ui-widget">
    <input type="button" id="print" value="Print" name="Print" class="ui-widget-content"/>
</div>
<div id="shopping-list" class="printable">
<?php foreach ($shoppingList as $category => $ingredients): ?>
        <div class="category-container">
            <label class="capitalize"><?php echo $category; ?></label>
        <table class="ui-widget grid">
            <thead>
                <tr>
                    <th class="ui-widget-header">Ingredient</th>
                    <th class="ui-widget-header">Amount</th>
                    <th class="ui-widget-header">Unit</th>
                    <th class="ui-widget-header"></th>
                </tr>
            </thead>
            <tbody>
<?php foreach ($ingredients as $item): ?>
                    <tr>
                        <td class="ui-widget-content"><?php echo $item->ingredient; ?></td>
                    <td class="ui-widget-content">
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
                    <td class="ui-widget-content"><?php echo $item->unit; ?></td>
                    <td class="ui-widget-content" style="vertical-align:middle; width:20px;">
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
<?php ?>