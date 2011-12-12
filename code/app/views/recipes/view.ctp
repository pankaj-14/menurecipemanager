<?php $Recipe = $this->data['Recipe']; ?>

<div id="recipe-header" class="grid_12">
   <div> <label>Name</label>
    <?php echo ucwords($Recipe['name']); ?></div>
   <div> <label>Servings</label>
    <?php echo $Recipe['servings']; ?></div>
  <div>  <label>Prep Time (minutes)</label>
    <?php echo $Recipe['prep_time']; ?></div>
 <div>   <label>Cook Time (minutes)</label>
    <?php echo $Recipe['cook_time']; ?></div>
</div>
<div class="clear"></div>

<div id="recipe-instructions" class="grid_6">
    <label>Description</label>
    <div><?php echo ucfirst($Recipe['description']); ?></div>
    <label>Instructions</label>
    <div><?php echo nl2br($Recipe['instructions']); ?></div>
    <label>Tags</label>
    <div><?php echo ucwords($Recipe['tags']); ?></div>
    <label>Source</label>
    <div><?php echo $Recipe['source']; ?></div>
</div>

<div id="recipe-ingredient-list" class="grid_6">
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
<div class="clear"></div>
<div id="nutritional-information"class="grid_6">
    <label>Nutritional Info</label>
    <?php foreach($Recipe['nutritional_info'] as $k => $v): ?>
        <div><label><?php echo $k; ?></label>
        <?php echo $v; ?></div>
    <?php endforeach; ?>
</div>