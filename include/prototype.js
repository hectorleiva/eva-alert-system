/*global $, jQuery*/

// Load all custom jQuery or Javascript scripts here.
(function ($) {
    var eva_notice, eva_alert_attribute, close_btn, notice_text;

    $(document).on('click', '.eva-alert', function() {
        $body       = $(document.body);
        eva_notice  = $('#eva-notice');
        
        $body.toggleClass('warning-cover');
        eva_alert_attribute = $(this).attr('eva-notice');
        eva_notice.html('<div class="notice-text">'+eva_alert_attribute+'</div>');
        eva_notice.toggleClass("close open");
        eva_notice.append('<div class="close_button button js-close">CLOSE</div>');
    });

    $(document).on('click', '.js-close', function() {
        $body       = $(document.body);
        eva_notice  = $('#eva-notice');

        $body.toggleClass('warning-cover');
        eva_notice.toggleClass("close open");
    });

}(jQuery));