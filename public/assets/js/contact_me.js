$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("#contactName").val();
            var email = $("#contactEmail").val();
            var phone = $("#contactPhone").val();
            var message = $("#contactMessage").val();

            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }

            $.ajax({
                url: "/sayHello",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                success: function() {
                    // Success message
                    $('#contactSuccess').html("<div class='alert alert-success'>");
                    $('#contactSuccess > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#contactSuccess > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#contactSuccess > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#contactSuccess').html("<div class='alert alert-danger'>");
                    $('#contactSuccess > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#contactSuccess > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#contactSuccess > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("#subscribeForm input,#subscribeForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("#subscribeName").val();
            var email = $("#subscribeEmail").val();
            var message = $("#subscribeMessage").val();

            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }

            $.ajax({
                url: "/sayHello",
                type: "POST",
                data: {
                    name: name,
                    phone: "No phone number provided.",
                    email: email,
                    message: message
                },
                success: function() {
                    // Success message
                    $('#subscribeSuccess').html("<div class='alert alert-success'>");
                    $('#subscribeSuccess > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#subscribeSuccess > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#subscribeSuccess > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#subscribeForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#subscribeSuccess').html("<div class='alert alert-danger'>");
                    $('#subscribeSuccess > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#subscribeSuccess > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#subscribeSuccess > .alert-danger').append('</div>');
                    //clear all fields
                    $('#subscribeForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#contactName').focus(function() {
    $('#contactSuccess').html('');
});

$('#subscribeName').focus(function() {
    $('#subscribeSuccess').html('');
});