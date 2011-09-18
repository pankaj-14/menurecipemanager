<?php

class User extends AppModel
{

    public $displayField = 'username';
    var $mongoSchema = array(
        'username' => array('type' => 'string'),
        'password' => array('type' => 'string'),
        'created' => array('type' => 'datetime'),
        'modified' => array('type' => 'datetime')
    );

}
