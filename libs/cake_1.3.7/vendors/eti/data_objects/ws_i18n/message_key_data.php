<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Represents a single Message Key
 *
 * @author swright
 */
class MessageKeyData extends EtiDataObj
{

    private $messageKey;
    private $messageKeyNbr;

    public function getMessageKey()
    {
        return $this->messageKey;
    }

    public function setData($data)
    {
        $this->messageKey = $data->messageKey;
        $this->messageKeyNbr = $data->messageKeyNbr;
    }

    public function setMessageKey($messageKey)
    {
        $this->messageKey = $messageKey;
    }

    public function getMessageKeyNbr()
    {
        return $this->messageKeyNbr;
    }

    public function setMessageKeyNbr($messageKeyNbr)
    {
        $this->messageKeyNbr = $messageKeyNbr;
    }

}

?>
