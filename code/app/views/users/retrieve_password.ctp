<div id="login-container" class="grid_6 push_4 ui-widget">
    <?php
    echo $session->flash('auth');
    echo $this->Form->create('User', array('action' => 'retrievePassword'));
    echo $this->Form->input('username', array('class' => 'ui-widget-content'));
    echo $this->Form->end('Retrieve Password');
    echo $html->link('Login', array('controller' => 'users/login'));
    echo $html->link('Create Account', array('controller' => 'users/add'));
    ?>
</div>