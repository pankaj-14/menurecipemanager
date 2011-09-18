<?php

class AppError extends ErrorHandler
{
    function login($params)
    {
        $this->controller->layout = 'error';
        $this->controller->set('title', $params['title']);
        $this->controller->set('msg', $params['msg']);
        $this->_outputMessage('login');
    }
}

?>
