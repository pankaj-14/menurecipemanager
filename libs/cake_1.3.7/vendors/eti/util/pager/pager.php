<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
*/

/**
 * Description of pager
 *
 * @author SWright
 */
class Pager
{

    private $recordCount;
    private $records = array();
    private $next;
    private $previous;
    private $last;
    private $current;

    public function __construct()
    {

    }

    public function getRecord($index)
    {
        if(!empty($this->records) && array_key_exists($index, $this->records))
        {
            return $this->records[$index];
        }
        else
        {
            return null;
        }
    }

    public function getRecordCount()
    {
        return $this->recordCount;
    }

    public function setRecordCount($recordCount)
    {
        $this->recordCount = $recordCount;
    }

    public function getRecords()
    {
        return $this->records;
    }

    public function setRecords($records)
    {
        $this->records = $records;
    }

    public function getNext()
    {
        return $this->next;
    }

    public function setNext($next)
    {
        $this->next = $next;
    }

    public function getPrevious()
    {
        return $this->previous;
    }

    public function setPrevious($previous)
    {
        $this->previous = $previous;
    }

    public function getLast()
    {
        return $this->last;
    }

    public function setLast($last)
    {
        $this->last = $last;
    }


}
?>
