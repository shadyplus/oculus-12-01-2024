$(function () {
    $("a[href^='#']").click(function () {
        let _href = $(this).attr("href");
        let rul = document.getElementById(_href.slice(1));
        if (!rul) {
            _href = "#order_form";
        }

        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });
    $('input[value="Узнать подробнее"], input[value="Принять участие в розыгрыше"]').click(function () {
        $('.eeee, .fadepopup').css('display', 'none');
    });
});
