<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

class ReportData
{
    public $include_items;
    public $include_custom_method;
    public $report_title;
    public $selected_report;
    public $user;

    public $billing_reports = array(
        "label_charge_codes"        => "Charge Codes",
        "label_billing_cycles"      => "Billing Cycles",
        "label_services"            => "Services",
        "label_one_time_charges"    => "One Time Charges",
        "label_rate_plans"          => "Rate Plans",
        "label_taxes"               => "Taxes",
        "label_billing_summary"     => "Billing Summary",
        "label_billing_detail"      => "Billing Detail");

    public $standard_reports = array(
        "label_work_orders"            => "Work Orders",
        "label_work_order_schedule"    => "Work Order Schedule",
        "label_service_mappings"       => "Service Mappings",
        "label_device_status"          => "Device Status",
        "label_host_interfaces"        => "Host Interfaces",
        "label_controller_interfaces"  => "Controller Interfaces",
        "label_headends"               => "Head Ends",
        "label_devices"                => "Devices",
        "label_subscribers"            => "Subscribers",
        "label_service_history"        => "Service History",
        "label_phone_number_summary"   => "Phone Number Summary",
        "label_note_code_summary"      => "Note Code Summary",
        "label_ppv_schedule"           => "PPV Schedules",
        "label_ppv_orders"             => "PPV Orders",
        "label_vod_orders"             => "VOD Orders",
        "label_auto_discovery"         => "Auto Discovery",
        "label_broadcast_channels"     => "Broadcast Channels",
        "label_controller_exceptions"  => "Controller Exceptions");

    public $export_reports = array(
        "label_subscriber_basics"       => "Subscriber Basics",
        "label_subscriber_services"     => "Subscriber Services",
        "label_subscriber_phone_lines"  => "Subscriber Phone Lines",
        "label_subscriber_devices"      => "Devices",
        "label_ppv_orders"              => "PPV Orders",
        "label_vod_orders"              => "VOD Orders",
        "label_service_history"         => "Service History",
        "label_broadcast_channels"      => "Broadcast Channels");

    public $output_types = array("pdf" => "pdf","html"=> "html", "excel" => "excel", "text" => "text");

    public function getInstance($report_type)
    {
      switch($report_type)
      {
        case "label_subscribers":
        {
          return new SubscriberReportData();
          break;
        }
      }

      return null;
    }
}

class SubscriberReportData extends ReportData
{
    public $custom_subscribers;
    public $custom_devices;
    public $custom_locations;
    public $custom_phones;

    public $include_items = array(
        "label_subscriber_id"       => "Subscriber ID",
        "label_subscriber_name"     => "Subcriber Name",
        "label_contact_phone"       => "Contact Phone",
        "label_service_flags"       => "Service Flags",
        "label_location_id"         => "Location ID",
        "label_headend"             => "Headend",
        "label_net_loc_code"        => "Net Loc Code",
        "label_street_address"      => "Street Address",
        "label_email_address"       => "Email Address",
        "label_devices"             => "Devices",
        "label_services"            => "Services",
        "label_billing_cycle"       => "Billing Cycle",
        "label_rate_plan"           => "Rate Plan",
        "label_tax_class"           => "Tax Class",
        "label_phone_lines"         => "Phone Lines"
    );
}
?>
