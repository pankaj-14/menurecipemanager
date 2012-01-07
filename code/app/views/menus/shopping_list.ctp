<div class="ui-widget">
    <input type="button" id="print" value="Print" name="Print" class="ui-widget-content"/>
</div>
<div id="shopping-list" class="printable">
    <label>Recipes</label>
    <ul>
        <?php foreach ($recipeList as $k => $v): ?>
            <li>
                <?php echo $k; ?>
                <ul>
                    <?php foreach ($v as $r): ?>
                        <li><?php echo $r; ?></li>
                    <?php endforeach; ?>
                </ul>
            </li>
        <?php endforeach; ?>
    </ul>

    <?php foreach ($shoppingList as $index => $page): ?>
        <table style="width: <?php echo Configure::read('FEATURE.SHOPPING_LIST.WIDTH_PX'); ?>px" id="<?php echo 'page_' . $index; ?>">
            <tbody>
                <tr>
                    <?php foreach ($page as $column): ?>
                        <td style="padding:0 10px 0 10px;">
                            <?php foreach ($column as $category => $ingredients): ?>
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
                            <?php endforeach; ?>
                        </td>
                    <?php endforeach; ?>
                </tr>
            </tbody>
        </table>
        <br/>
        <br/>
    <?php endforeach; ?>
</div>