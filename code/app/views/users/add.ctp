<div id="login-container" class="grid_6 push_4 ui-widget">
    <?php
    echo $session->flash('auth');
    echo $this->Form->create('User');
    echo $this->Form->input('username', array('class' => 'ui-widget-content'));
    echo $this->Form->input('password', array('class' => 'ui-widget-content'));
    echo $this->Form->input('password_confirm', array('class' => 'ui-widget-content', 'type' => 'password'));
    echo $this->Form->input('secret_ingredient', array('class' => 'ui-widget-content'));
    echo $this->Form->end('Create Account');
    echo $html->link('Login', array('controller' => 'users/login'));
    echo $html->link('Retrieve Password', array('controller' => 'users/retrievePassword'));
    ?>
</div>