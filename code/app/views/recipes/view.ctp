<div class="grid_12">
    <?php $Recipe = $this->data['Recipe']; ?>

    <label>Name</label>
    <div><?php echo $Recipe['name']; ?></div>
    <label>Servings</label>
    <div><?php echo $Recipe['servings']; ?></div>
    <label>Prep Time (minutes)</label>
    <div><?php echo $Recipe['prep_time']; ?></div>
    <label>Cook Time (minutes)</label>
    <div><?php echo $Recipe['cook_time']; ?></div>
    <label>Description</label>
    <div><?php echo $Recipe['description']; ?></div>
    <label>Tags</label>
    <div><?php echo $Recipe['tags']; ?></div>
    <label>Instructions</label>
    <ol>
        <?php foreach ($Recipe['instructions'] as $instruction): ?>
            <li><?php echo $instruction; ?></li>
        <?php endforeach; ?>
        </ol>
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