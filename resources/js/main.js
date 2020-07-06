$(document).ready(function () {
    $('#header-section .top .hambarger').click(function(){
        $(this).toggleClass("active");
    });













    
    window.addEventListener("scroll", function (event) {
        // var scroll = this.scrollY;

        if (window.scrollY > 600) {
            $('#top-button').css({
                'bottom': '5rem'
            });
        } else {
            $('#top-button').css({
                'bottom': '-15rem'
            });
        }
    });



});