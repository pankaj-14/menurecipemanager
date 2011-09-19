<?php
require_once 'vendors/eti/util/other/json_object_loader.php';
/**
 * Description of device
 *
 * @author SWright
 */
class DeviceData extends EtiDataObj
{
    private $id;
    private $type;
    /**
     * Settop, ONT or other
     * @var String
     */
    private $unitType;
    private $model;
    private $status;
    private $unitAddress;
    private $hostId;
    private $securityData;
    private $customFieldList = array();
    private $operations;
    private $location;
    private $subscriber;

    public function __construct()
    {

    }

    public function setData($data)
    {
        /*
         * This conditional handles the differences between a Device object
         * that is returned in a QuerySub Subscriber object vs. a Device object
         * from QueryDevice.
         */
        if(empty($data->DeviceBasics))
        {
            $this->id               = $data->DeviceId;
            $this->type             = $data->DeviceType;
            $this->model            = $data->DeviceModel;
            $this->status           = $data->DeviceStatus;
            $this->unitAddress      = $data->UnitAddress;
            $this->hostId           = $data->HostId;
            $this->securityData     = $data->SecurityData;
            if(!empty($data->CustomFieldList->CustomField))
            {
                $this->customFieldList = $this->loadCustomFields($data->CustomFieldList->CustomField);
            }
        }
        else
        {
            $this->id               = $data->DeviceId;
            $this->type             = $data->DeviceBasics->DeviceType;
            $this->model            = $data->DeviceBasics->DeviceModel;
            $this->status           = $data->DeviceBasics->DeviceStatus;
            $this->unitAddress      = $data->DeviceBasics->UnitAddress;
            $this->hostId           = $data->DeviceBasics->HostId;
            $this->securityData     = $data->DeviceBasics->SecurityData;
            if(!empty($data->DeviceBasics->CustomFieldList->CustomField))
            {
                $this->customFieldList = $this->loadCustomFields($data->DeviceBasics->CustomFieldList->CustomField);
            }
        }

        if(!empty($data->Location))
        {
            $location = new LocationData();
            $location->setData($data->Location);
            $this->location = $location;
        }

        if(!empty($data->Subscriber))
        {
            $subscriber = new SubscriberData();
            $subscriber->setData($data->Subscriber);
            $this->subscriber = $subscriber;
        }


        $this->assignOperations();
    }

    public function assignOperations()
    {
        $this->setDeviceOperations();
    }

    private function setDeviceOperations()
    {
        $device = $this->type;
        $JSONObjectLoader = new JSONObjectLoader(Configure::read('DEVICE_OP_FILE'));

        $device_op_map = $JSONObjectLoader->get_json_obj();

        $operations = array();
        $d = $device_op_map->devices->$device;

        /**
         * TODO
         * Warning this not the best place to set this attribute. We have to
         * set this attribute because Triad does not have a place to track whether
         * the Device is an ONT or not.
         */
        $this->unitType = $d->type;

        foreach ($d->operations as $op_id)
        {
            $operations = array_merge($operations, get_object_vars($device_op_map->operations[$op_id]));
        }

        $this->operations =  $operations;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setType($type)
    {
        $this->type = $type;
    }

    public function getModel()
    {
        return $this->model;
    }

    public function setModel($model)
    {
        $this->model = $model;
    }

    public function getStatus()
    {
        return $this->status;
    }

    public function setStatus($status)
    {
        $this->status = $status;
    }

    public function getUnitAddress()
    {
        return $this->unitAddress;
    }

    public function setUnitAddress($unitAddress)
    {
        $this->unitAddress = $unitAddress;
    }

    public function getHostId()
    {
        return $this->hostId;
    }

    public function setHostId($hostId)
    {
        $this->hostId = $hostId;
    }

    public function getSecurityData()
    {
        return $this->securityData;
    }

    public function setSecurityData($securityData)
    {
        $this->securityData = $securityData;
    }

    public function getCustomFieldList()
    {
        return $this->customFieldList;
    }

    public function setCustomFieldList($customFieldList)
    {
        $this->customFieldList = $customFieldList;
    }

    public function getOperations()
    {
        return $this->operations;
    }

    public function setOperations($operations)
    {
        $this->operations = $operations;
    }

    public function getLocation()
    {
        return $this->location;
    }

    public function setLocation($location)
    {
        $this->location = $location;
    }

    public function getSubscriber()
    {
        return $this->subscriber;
    }

    public function setSubscriber($subscriber)
    {
        $this->subscriber = $subscriber;
    }
    
    public function getUnitType()
    {
        return $this->unitType;
    }

    public function setUnitType($unitType)
    {
        $this->unitType = $unitType;
    }
}
?>
