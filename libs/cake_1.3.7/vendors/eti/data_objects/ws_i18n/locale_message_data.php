<?php

/**
 * Represents a single message within a Locale
 *
 * @author swright
 */
class LocaleMessageData extends EtiDataObj
{

    private $localeNbr;
    private $message;
    private $messageKeyNbr;
    private $messageNbr;
    private $MessageKey;

    public function __construct()
    {
        
    }

    public function setData($data)
    {
        $this->localeNbr = $data->localeNbr;
        $this->message = $data->message;
        $this->messageKeyNbr = $data->messageKeyNbr;
        $this->messageNbr = $data->messageNbr;
        if (!empty($data->messageKey))
        {
            $this->MessageKey = new MessageKeyData();
            $this->MessageKey->setData($data->messageKey);
        }
    }

    public function getLocaleNbr()
    {
        return $this->localeNbr;
    }

    public function setLocaleNbr($localeNbr)
    {
        $this->localeNbr = $localeNbr;
    }

    public function getMessage()
    {
        return $this->message;
    }

    public function setMessage($message)
    {
        $this->message = $message;
    }

    public function getMessageKeyNbr()
    {
        return $this->messageKeyNbr;
    }

    public function setMessageKeyNbr($messageKeyNbr)
    {
        $this->messageKeyNbr = $messageKeyNbr;
    }

    public function getMessageNbr()
    {
        return $this->messageNbr;
    }

    public function setMessageNbr($messageNbr)
    {
        $this->messageNbr = $messageNbr;
    }

    public function getMessageKey()
    {
        return $this->MessageKey;
    }

    public function setMessageKey($MessageKey)
    {
        $this->MessageKey = $MessageKey;
    }

}

?>
