<?php
/**
 * Description of work_order_data
 *
 * @author SWright
 */
class WorkOrderData
{

    private $id;
    private $subscriberId;
    private $type;
    private $owner;
    private $status;
    private $comments;
    private $autoCompleteDate;
    private $commands = array();

    public function __construct()
    {

    }

    public function setData($data)
    {
        
        $this->id = $data->WONumber;
        $this->subscriberId = $data->SubscriberId;
        $this->type = $data->WOType;
        $this->owner = $data->WOOwner;
        $this->status = $data->WOStatus;
        $this->comments = $data->WOComments;
        $this->autoCompleteDate = $data->AutoCmplDate;

        if(!empty($data->WOCommands->WOCommand))
        {
            foreach($data->WOCommands->WOCommand as $commandObj)
            {
                foreach((Array)$commandObj as $command => $params)
                {
                    $this->commands[$command][] = (Array)$params;
                }
            }
        }
    }
    
    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getSubscriberId()
    {
        return $this->subscriberId;
    }

    public function setSubscriberId($subscriberId)
    {
        $this->subscriberId = $subscriberId;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setType($type)
    {
        $this->type = $type;
    }

    public function getOwner()
    {
        return $this->owner;
    }

    public function setOwner($owner)
    {
        $this->owner = $owner;
    }

    public function getStatus()
    {
        return $this->status;
    }

    public function setStatus($status)
    {
        $this->status = $status;
    }

    public function getComments()
    {
        return $this->comments;
    }

    public function setComments($comments)
    {
        $this->comments = $comments;
    }

    public function getAutoCompleteDate()
    {
        return $this->autoCompleteDate;
    }

    public function setAutoCompleteDate($autoCompleteDate)
    {
        $this->autoCompleteDate = $autoCompleteDate;
    }

    public function getCommands()
    {
        return $this->commands;
    }

    public function setCommands($commands)
    {
        $this->commands = $commands;
    }
}
?>
