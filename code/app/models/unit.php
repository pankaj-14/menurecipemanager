<?php

class Unit extends AppModel
{

    public $displayField = 's_name';
    public $mongoSchema = array(
        'l_name' => array('type' => 'string'),
        's_name' => array('type' => 'string'),
        'metric_val' => array('type' => 'string')
    );
    public $actsAs = array('StringManipulation' => array(
            'fields' => array(
                'lowercase' => array('l_name', 's_name')
            )
        )
    );

}
