<?php

/**
 * Represents a single Locale
 *
 * @author swright
 */
class LocaleData extends EtiDataObj
{

    private $localeNbr;
    private $locale;
    private $description;
    private $messageList = array();

    public function __construct()
    {

    }

    public function setData($data)
    {
        $this->localeNbr = $data->localeNbr;
        $this->locale = $data->locale;
        $this->description = $data->description;
      
        if(!empty($data->messageList) && !empty($data->messageList->message))
        {
            foreach($data->messageList->message as $message)
            {
               $m = new LocaleMessageData();
               $m->setData($message);
               $this->messageList[] = $m;
            }
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

    public function getLocale()
    {
        return $this->locale;
    }

    public function setLocale($locale)
    {
        $this->locale = $locale;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getMessageList()
    {
        return $this->messageList;
    }

    public function setMessageList($messageList)
    {
        $this->messageList = $messageList;
    }

}

?>
