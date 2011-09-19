<?php
/**
 * Description of package
 *
 * @author SWright
 */
class PackageContentData extends EtiDataObj
{
    private $name;
    private $description;
    private $className;
    private $optional;
    private $provisioned = false;

    public function __construct()
    {
    }

    public function setData($data)
    {
        $this->setName($data->ContentName);
        $this->setDescription($data->ContentDesc);
        $this->setClassName($data->ContClassName);
        $this->setOptional($data->ContOptional);
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getClassName()
    {
        return $this->className;
    }

    public function setClassName($className)
    {
        $this->className = $className;
    }

    public function getOptional()
    {
        return $this->optional;
    }

    public function setOptional($optional)
    {
        $this->optional = $optional;
    }

    public function getProvisioned()
    {
        return $this->provisioned;
    }

    public function setProvisioned($provisioned)
    {
        $this->provisioned = $provisioned;
    }

    
}
?>
