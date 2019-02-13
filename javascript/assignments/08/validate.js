$(function() {


            $("#form").validate({
                errorPlacement: function(error, element) {
                    error.appendTo(element.parent());
                    if (element.attr("name") == "gender"
                        || element.attr("name") == "family"
                        || element.attr("name") == "agree"
                        || element.attr("name") == "spam[]") {
                        error.prependTo(element.parent());
                    }
                },
                success: function(label) {
                    label.parent().removeClass("error-parent");
                },
                highlight: function(element, errorClass) {
                    $(element).parent().addClass("error-parent");
                    $(element).parent().find(".error").fadeOut(function() {
                        $(this).fadeIn();
                    });
                },
                rules: {
                    username: {
                        required: true,
                        minlength: 2
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    gender: {
                        required: true
                    },
                    family: {
                        required: true
                    },
                    agree: {
                        required: true
                    },
                    'spam[]': {
                        required: true,
                        minlength: 2
                    },
                    boat: {
                        required: true
                    },
                    'fruit[]': {
                        required: true,
                        minlength: 2
                    },
                    'vegetables[]': {
                        required: true,
                        maxlength: 2
                    },
                    'cars[]': {
                        required:true,
                        rangelength:[2,3]
                    }
                },
                messages: {
                    username: {
                        required: "Please enter a username",
                        minlength: "Your username must consist of at least 2 characters"
                    },
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    gender: {
                        required: "Please select your gender."
                    },
                    'spam[]': {
                        required: "Please choose at least 2 spam methods.",
                        minlength: "You must choose at least 2 spam methods."
                    }
                }
            });


        });
