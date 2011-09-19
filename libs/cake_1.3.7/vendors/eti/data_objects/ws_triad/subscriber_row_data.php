<?php

/**
 * Represents a single subscriber row usually returned from a searchSubscriber
 *
 * @author swright
 */
class SubscriberRowData extends EtiDataObj
{

    private $address1;
    private $emailAddress;
    private $phone;
    private $subscriberId;
    private $subscriberName;

    public function setData($data)
    {
        $this->address1 = $data->address1;
        $this->emailAddress = $data->emailAddress;
        $this->phone = $data->phone;
        $this->subscriberId = $data->subscriberId;
        $this->subscriberName = $data->subscriberName;
    }

    public function getAddress1()
    {
        return $this->address1;
    }

    public function setAddress1($address1)
    {
        $this->address1 = $address1;
    }

    public function getEmailAddress()
    {
        return $this->emailAddress;
    }

    public function setEmailAddress($emailAddress)
    {
        $this->emailAddress = $emailAddress;
    }

    public function getPhone()
    {
        return $this->phone;
    }

    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    public function getSubscriberId()
    {
        return $this->subscriberId;
    }

    public function setSubscriberId($subscriberId)
    {
        $this->subscriberId = $subscriberId;
    }

    public function getSubscriberName()
    {
        return $this->subscriberName;
    }

    public function setSubscriberName($subscriberName)
    {
        $this->subscriberName = $subscriberName;
    }

}

?>
