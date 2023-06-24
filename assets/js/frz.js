$("#main-slider").carousel({
    interval: 0
}), $(".parent-search > i").click(function () {
    $(this).toggleClass("fa-times"), $(".nav-search").toggleClass("search-open")
}), $(".sites-list").click(function () {
    $(".subdomain-list").slideToggle()
}), $(".close-subdomain").click(function () {
    $(".subdomain-list").slideUp()
});
var docWidth, headerHeight;
docWidth = $(document).width(), headerHeight = $(".main-header").height(), $(document).ready(function () {
    $(window).scroll(function () {
        docWidth > 767 && $(window).scrollTop() > headerHeight  - 30?
            ($(".main-header").addClass("fix-header"),

                $(".logo").addClass("logo-hidden"),
                $(".header-title").css("padding-top", 0),
                $(".header-title").css("padding-right", 0),
                /*  $(".signupbtn").addClass("logo-hidden"), */

                $(".main-content").css("margin-top", headerHeight),
                $(".scrollAuto ").css("margin-top", headerHeight))
            : ($(".main-header").removeClass("fix-header"),
                $(".logo").removeClass("logo-hidden"),
                /* $(".signupbtn").removeClass("logo-hidden"), */
                $(".header-title").css("padding-top", 20),
                $(".header-title").css("padding-right", 100),
                $(".main-content").css("margin-top", 0),
                $(".scrollAuto").css("margin-top", 0))
    }), 1200 > docWidth && $(".mega-menu").prev("a").click(function () {
        return $(this).next(".mega-menu").slideToggle(), !1
    })
}), jQuery(document).ready(function () {
    jQuery(".tp-banner").show().revolution({
        dottedOverlay: "none",
        delay: 7e3,
        startwidth: 1170,
        startheight: 450,
        navigationType: "none",
        navigationStyle: "preview4",
        touchenabled: "on",
        onHoverStop: "on",
        swipe_velocity: .7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: !1,
        keyboardNavigation: "on",
        shadow: 0,
        fullWidth: "on",
        fullScreen: "off"
    })
});
