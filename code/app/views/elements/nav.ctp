<div class="grid_8">
    <ul class="inline-list">
        <li class="" >
            <?php echo $html->link('Menus', array('controller' => 'menus/index')); ?>
        </li>
        <li class="" >
            <?php echo $html->link('Recipes', array('controller' => 'recipes/index')); ?>
        </li>
        <li class="" >
            <?php echo $html->link('Ingredients', array('controller' => 'ingredients/index')); ?>
        </li>
        <li class="" >
            <?php echo $html->link('Tags', array('controller' => 'tags/index')); ?>
        </li>
        <li class="" >
            <?php echo $html->link('Units', array('controller' => 'units/index')); ?>
        </li>
    </ul>
    <ul class="inline-list">
        <li class="" >
            <?php echo $html->link('index', array('action' => 'index')); ?>
        </li>
        <li class="" >
            <?php echo $html->link('add', array('action' => 'add')); ?>
        </li>
    </ul>
</div>
<div class="grid_4">
    <?php
            if (!empty($Auth['User']['username']))
            {
                echo $html->link('logout', array('controller' => 'users', 'action' => 'logout'));
            }
            else
            {
                echo $html->link('login', array('controller' => 'users', 'action' => 'login'));
            }
    ?>
</div>
<div class="clear"></div>