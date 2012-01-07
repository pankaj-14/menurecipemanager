<?php

class Meal extends AppModel
{

    public $hasMany = array(
        'Recipe' => array('className' => 'Recipe'),
    );
    var $mongoSchema = array(
        'name' => array('type' => 'string'),
        'recipes' => array('type' => 'array'),
        'description' => array('type' => 'string'),
        'created' => array('type' => 'datetime'),
        'modified' => array('type' => 'datetime')
    );
    public $actsAs = array('StringManipulation' => array(
            'fields' => array(
                'lowercase' => array('name')
            )
        )
    );

}