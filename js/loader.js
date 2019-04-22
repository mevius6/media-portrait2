$(window).on("load", function() {
    setTimeout(function() {
        $(".page__loader").fadeOut("slow", function() {
            $("body").removeClass("loading");
        });
    }, 2500);
});
