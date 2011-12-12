<?php $Recipe = $this->data['Recipe']; ?>

<div id="recipe-header" class="grid_3">
    <label>Name</label>
    <div><?php echo ucwords($Recipe['name']); ?></div>
    <label>Servings</label>
    <div><?php echo $Recipe['servings']; ?></div>
    <label>Prep Time (minutes)</label>
    <div><?php echo $Recipe['prep_time']; ?></div>
    <label>Cook Time (minutes)</label>
    <div><?php echo $Recipe['cook_time']; ?></div>
    <label>Source</label>
    <div><?php echo $Recipe['source']; ?></div>
</div>
<div class="grid_6">
    <label>Description</label>
    <div><?php echo ucfirst($Recipe['description']); ?></div>
</div>
<div class="grid_3">
    <?php foreach($Recipe['nutritional_info'] as $k => $v): ?>
        <label><?php echo $k; ?></label>
        <div><?php echo $v; ?></div>
    <?php endforeach; ?>
</div>



<div class="clear"></div>

<div class="grid_6">
    <label>Instructions</label>
    <div><?php echo nl2br($Recipe['instructions']); ?></div>
    <label>Tags</label>
    <div><?php echo ucwords($Recipe['tags']); ?></div>
</div>

<div class="grid_6">
        <label>Ingredient List</label>
        <table class="ui-widget grid">
            <thead>
                <tr>
                    <th class="ui-widget-header">Amount</th>
                    <th class="ui-widget-header">Unit</th>
                    <th class="ui-widget-header">Ingredient</th>
                    <th class="ui-widget-header">Instruction</th>
                </tr>
            </thead>
            <tbody>
            <?php foreach ($Recipe['ingredients'] as $ingredient): ?>
                <tr>
                    <td class="ui-widget-content"><?php echo $ingredient['whole'] . ' ' . $ingredient['fraction']; ?></td>
                    <td class="ui-widget-content"><?php echo $ingredient['unit']; ?></td>
                    <td class="ui-widget-content"><?php echo $ingredient['ingredient']; ?></td>
                    <td class="ui-widget-content"><?php echo $ingredient['instruction']; ?></td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
</div>    
<?php //var_dump($Recipe); ?>