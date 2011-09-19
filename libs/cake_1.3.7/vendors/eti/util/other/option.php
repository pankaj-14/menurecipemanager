<?php

class Options
{

    private $default;
    private $optionsList = array();

    public function __construct()
    {
        
    }

    public function getOptionsList()
    {
        return $this->optionsList;
    }

    public function setOptionsList($optionsList)
    {
        $this->optionsList = $optionsList;
    }

    public function getDefault()
    {
        return $this->default;
    }

    public function setDefault($default)
    {
        $this->default = $default;
    }

}

?>