/*================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 5.0
	Author: PIXINVENT
	Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */

function FuntionResize() {
    if ($(window).width() < 992) {
        $("#sidenav").removeClass('nav-collapsed').addClass('nav-lock');
    } else {
        $("#sidenav").removeClass('nav-lock').addClass('nav-collapsed');
    }
}
FuntionResize();

$(window).on("resize", function() {
    resizetable();
    FuntionResize();
});

$(document).ready(function() {
    FuntionResize();
});
$(window).ready(function() {
    FuntionResize();
});