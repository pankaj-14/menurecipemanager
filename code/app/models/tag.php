<?php

class Tag extends AppModel
{

    public $displayField = 'tag';
    public $mongoSchema = array(
        'tag' => array('type' => 'string'),
        'created' => array('type' => 'datetime'),
        'modified' => array('type' => 'datetime'),
    );

}
