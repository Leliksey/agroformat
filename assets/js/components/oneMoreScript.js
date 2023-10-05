$(document).ready(function() {
    $(".menu__item").click(function() {
        $(".menu__item").removeClass("open");
        $(this).addClass("open");
    })
    $(".lang").click(function(e) {
        if($(e.target).hasClass("lang__list")){
            return;
        } else {
            $(this).toggleClass("open");
        }
    })
    $(".lang__item").click(function() {
        let lang = $(this).html();
        $(".lang__current").text("");
        $(".lang__current").append(lang);
    });
    // $(".search").click(function() {
    //     $(this).toggleClass("open");
    // });
    document.addEventListener('click', function(event) {
        var langBlock = document.querySelector('.lang');
        if (!langBlock.contains(event.target)) {
            langBlock.classList.remove('open');
        }
    });
    $(document).on('click', function(event) {
        var searchBlock = $('.search');
        if (!searchBlock.is(event.target) && searchBlock.has(event.target).length === 0) {
            searchBlock.removeClass('open');
        }
    });
    
     $('.search svg').on('click', function() {
        var searchBlock = $(this).closest('.search');
        searchBlock.toggleClass('open');
    });
});