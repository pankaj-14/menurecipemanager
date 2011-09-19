<?php

/**
 * Represents a single subscriber row usually returned from a searchSubscriber
 *
 * @author swright
 */
class DeviceRowData extends EtiDataObj
{

    private $deviceNbr;
    private $deviceId;
    private $unitAddr;
    private $devDesc;
    private $subscriberId;

    public function setData($data)
    {
        $this->deviceNbr = $data->deviceNbr;
        $this->deviceId = $data->deviceId;
        $this->unitAddr = $data->unitAddr;
        $this->devDesc = $data->devDesc;
        $this->subscriberId = $data->subscriberId;
    }

    public function getDeviceNbr()
    {
        return $this->deviceNbr;
    }

    public function setDeviceNbr($deviceNbr)
    {
        $this->deviceNbr = $deviceNbr;
    }

    public function getDeviceId()
    {
        return $this->deviceId;
    }

    public function setDeviceId($deviceId)
    {
        $this->deviceId = $deviceId;
    }

    public function getUnitAddr()
    {
        return $this->unitAddr;
    }

    public function setUnitAddr($unitAddr)
    {
        $this->unitAddr = $unitAddr;
    }

    public function getDevDesc()
    {
        return $this->devDesc;
    }

    public function setDevDesc($devDesc)
    {
        $this->devDesc = $devDesc;
    }

    public function getSubscriberId()
    {
        return $this->subscriberId;
    }

    public function setSubscriberId($subscriberId)
    {
        $this->subscriberId = $subscriberId;
    }

}

?>
