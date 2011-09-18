<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title><?php echo $title_for_layout ?></title>
        <?php
        echo $html->css('reset');
        echo $html->css('text');
        echo $html->css('960');
        echo $html->css('ui-lightness/jquery-ui-1.8.9.custom');
        echo $html->css('default');
        echo $javascript->link('jquery-1.5.min');
        echo $javascript->link('jquery-ui-1.8.9.custom.min');
        echo $javascript->link('jquery.jeditable.mini');
        echo $javascript->link('jquery.jqprint.0.3');
        echo $javascript->link('app');
        ?>
    </head>
    <body>
        <div id="header" class="container_12">
            <div class="grid_8">
                <h3>Recipe Manager</h3>
            </div>
            <div class="grid_4" style="text-align:right;">
                <?php
                if (!empty($Auth['User']['username']))
                {
                    echo 'Welcome ' . $Auth['User']['username'] . ' ';
                    echo $html->link('(logout)', array('controller' => 'users', 'action' => 'logout'));
                }
                else
                {
                    echo $html->link('login', array('controller' => 'users', 'action' => 'login'));
                }
                ?>
            </div>
        </div>

        <div id="navigation" class="container_12">
            <?php echo $this->element('nav'); ?>
            </div>
            <div id="body" class="container_12">
            <?php echo $content_for_layout ?>
        </div>
        <div id="footer" class="container_12"></div>
        <div id="dialog"></div>
    </body>
</html>