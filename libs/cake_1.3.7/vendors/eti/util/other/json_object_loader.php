<?php
class JSONObjectLoader {

    /**
     * @var	$file_name	The full path to the JSON file
     */
    private $file_name;
    /**
     * @var	$json_str	The JSON string read in from the file
     */
    private $json_str;
    /**
     * @var	json_obj	The object created from the JSON string
     */
    private $json_obj;


    public function __construct($file_name)
    {
        $this->file_name = $file_name;
        $this->get_json_str();
        $this->create_json_obj();
    }

    /**
     * @method	get_json_obj
     * @return 	Object
     */
    public function get_json_obj()
    {
        return $this->json_obj;
    }

    /**
     * @method	get_json_str
     * @return 	void
     */
    private function get_json_str()
    {
        if(!$this->json_str = file_get_contents($this->file_name))
        {
            throw new Exception("Could not load JSON object from file: " . $this->file_name);
        }
    }

    /**
     * @method	get_json_obj
     * @return 	void
     */
    private function create_json_obj()
    {
        $this->json_obj = json_decode($this->json_str);
    }

}

?>