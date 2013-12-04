jQuery(function() {
    jQuery('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: false,
        callback: {
            loaded: function(number) {
                // Show start slide in log
                jQuery('#slidesjs-log .slidesjs-slide-number').text(number);
            },
            complete: function(number) {;
                // Change slide number on animation complete
                jQuery('#slidesjs-log .slidesjs-slide-number').text(number);
            }
        }
    });
});

