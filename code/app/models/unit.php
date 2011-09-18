<?php

class Unit extends AppModel
{

    public $displayField = 's_name';
    public $mongoSchema = array(
        'l_name' => array('type' => 'string'),
        's_name' => array('type' => 'string'),
        'metric_val' => array('type' => 'string')
    );


}
