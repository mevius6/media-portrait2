$(window).on("load", function() {
    $(".page__loader").fadeOut("slow", function() {
        $(".body").removeClass("loading");
    });
});
