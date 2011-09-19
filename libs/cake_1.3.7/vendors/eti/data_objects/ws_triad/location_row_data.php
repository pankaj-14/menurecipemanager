<?php

/**
 * Represents a single subscriber row usually returned from a searchSubscriber
 *
 * @author swright
 */
class LocationRowData extends EtiDataObj
{

    private $locationNbr;
    private $locationId;
    private $headendNbr;
    private $networkLocCode;
    private $address1;
    private $address2;
    private $city;
    private $state;
    private $zip;
    private $propNbr;
    private $rateCenterNbr;

    public function setData($data)
    {
        $this->address1 = $data->address1;
        $this->address2 = $data->address2;
        $this->city = $data->city;
        $this->headendNbr = $data->headendNbr;
        $this->locationId = $data->locationId;
        $this->locationNbr = $data->locationNbr;
        $this->networkLocCode = $data->networkLocCode;
        $this->propNbr = $data->propNbr;
        $this->rateCenterNbr = $data->rateCenterNbr;
        $this->state = $data->state;
        $this->zip = $data->zip;
    }

    public function getAddress1()
    {
        return $this->address1;
    }

    public function setAddress1($address1)
    {
        $this->address1 = $address1;
    }

    public function getAddress2()
    {
        return $this->address2;
    }

    public function setAddress2($address2)
    {
        $this->address2 = $address2;
    }

    public function getCity()
    {
        return $this->city;
    }

    public function setCity($city)
    {
        $this->city = $city;
    }

    public function getHeadendNbr()
    {
        return $this->headendNbr;
    }

    public function setHeadendNbr($headendNbr)
    {
        $this->headendNbr = $headendNbr;
    }

    public function getLocationId()
    {
        return $this->locationId;
    }

    public function setLocationId($locationId)
    {
        $this->locationId = $locationId;
    }

    public function getLocationNbr()
    {
        return $this->locationNbr;
    }

    public function setLocationNbr($locationNbr)
    {
        $this->locationNbr = $locationNbr;
    }

    public function getNetworkLocCode()
    {
        return $this->networkLocCode;
    }

    public function setNetworkLocCode($networkLocCode)
    {
        $this->networkLocCode = $networkLocCode;
    }

    public function getPropNbr()
    {
        return $this->propNbr;
    }

    public function setPropNbr($propNbr)
    {
        $this->propNbr = $propNbr;
    }

    public function getRateCenterNbr()
    {
        return $this->rateCenterNbr;
    }

    public function setRateCenterNbr($rateCenterNbr)
    {
        $this->rateCenterNbr = $rateCenterNbr;
    }

    public function getState()
    {
        return $this->state;
    }

    public function setState($state)
    {
        $this->state = $state;
    }

    public function getZip()
    {
        return $this->zip;
    }

    public function setZip($zip)
    {
        $this->zip = $zip;
    }

}

?>
