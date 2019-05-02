function openModal(e) {
    iOS && iOS11 && (scrolledPositionBeforeOpenModal = $(document).scrollTop()), $("body, .page-header").css("padding-right", scrollbarWidth), $("body, html").addClass("modal-opened"), "header-menu" == $(e).attr("id") && $(window).width() < 768 ? $(e).addClass("active") : $(e).fadeIn(300)
}

function closeModals() {
    scrollbarWidth > 0 ? $(".popup-block:not(:hidden)").fadeOut(200, function() {
        $("body, .page-header").css("padding-right", 0), $("body, html").removeClass("modal-opened"), iOS && iOS11 && $("html, body").scrollTop(scrolledPositionBeforeOpenModal)
    }) : ($("body, .page-header").css("padding-right", 0), $("body, html").removeClass("modal-opened"), iOS && iOS11 && $("html, body").scrollTop(scrolledPositionBeforeOpenModal), $(".popup-block:not(:hidden)").fadeOut(200)), $("#header-menu").removeClass("active")
}

function showThanksModal() {
    $(".popup-block:not(:hidden)").fadeOut(), $("#thanks-popup").fadeIn(300)
}
var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11_0 = /OS 11_0_?(\d+)?/.test(ua),
    iOS11_1 = /OS 11_1_?(\d+)?/.test(ua),
    iOS11_2 = /OS 11_2_?(\d+)?/.test(ua),
    iOS11 = iOS11_0 || iOS11_1 || iOS11_2,
    scrolledPositionBeforeOpenModal;
iOS && iOS11 && $("body").addClass("iosBugFixCaret"), /Android/.test(navigator.appVersion) && window.addEventListener("resize", function() {
    "INPUT" != document.activeElement.tagName && "TEXTAREA" != document.activeElement.tagName || document.activeElement.scrollIntoView()
});

$('[data-toggle="tab"]').click(function(e) {
 e.preventDefault();
 
 var thisTarget = $(this).attr('data-target');
 
 if ($(this).parent().is('li')) {
  $(this).parent().addClass('active').siblings().removeClass('active');
 } else {
  $(this).addClass('active').siblings().removeClass('active');
 }
 
 $(thisTarget).addClass('active').siblings().removeClass('active');
});

$('.btn-minus').click(function(evt) {
  evt.preventDefault();
  $('.output').html(function(i, val) { return val*1-1 });
});

$('.btn-plus').click(function(evt) {
  evt.preventDefault();
  $('.output').html(function(i, val) { return val*1+1 });
});

$(document).off("click", "[data-control]").on("click", "[data-quant-control]", function(t) {
    t.preventDefault();
    var e = $(this).parent().find("input"),
        a = parseInt($(e).val()),
        i = $(this).attr("data-quant-control"),
        o = parseInt($(e).attr("min")),
        s = parseInt($(e).attr("max"));
    "plus" == i ? (a < s ? ($(e).val(a + 1), $(this).parent().find(".quant-num").text(a + 1)) : $(this).parent().find(".plus").addClass("disabled"), $(this).parent().find(".minus.disabled").removeClass("disabled")) : (a > o && ($(e).val(a - 1), $(this).parent().find(".quant-num").text(a - 1)), 2 == a && $(this).parent().find(".minus").addClass("disabled"))
}), $('[data-toggle="expand-descr"]').on("click", function(t) {
    t.preventDefault(), $(this).toggleClass("active").next().stop().slideToggle(200)
}), $('[data-toggle="tab"]').click(function(t) {
    t.preventDefault();
    var e = $(this).attr("data-target"),
        a = $(this).innerWidth(),
        i = $(this).position().left;
    $(this).parent().find(".slider-item").width(a), $(this).parent().find(".slider-item").css("left", i), $(this).parent().is("li") ? $(this).parent().addClass("active").siblings().removeClass("active") : $(this).addClass("active").siblings().removeClass("active"), $(e).addClass("active").siblings().removeClass("active")
})