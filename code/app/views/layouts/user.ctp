<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title><?php echo $title_for_layout ?></title>
        <?php
        echo $html->css('reset');
        echo $html->css('text');
        echo $html->css('960');
        echo $html->css('cupertino/jquery-ui-1.8.16.custom');
        echo $html->css('default');
        echo $javascript->link('http://code.jquery.com/jquery-1.7.1.min.js');
        echo $javascript->link('jquery-ui-1.8.16.custom.min');
        echo $javascript->link('app');
        
        ?>
    </head>
    <body>
        <div id="body" class="container_12">
                <?php echo $content_for_layout ?>
        </div>
        <div id="footer" class="container_12"></div>
        <div id="dialog"></div>
    </body>
</html>