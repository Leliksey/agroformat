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
    document.addEventListener('click', function(event) {
        var langBlock = document.querySelector('.lang');
        if (!langBlock.contains(event.target)) {
            langBlock.classList.remove('open');
        }
    });
    $(document).on('click', function(event) {
        var searchBlock = $('.search');
    
        // Проверяем, был ли клик сделан вне элемента .search и не на элементах .search__btn и .search__modal
        if (!searchBlock.is(event.target) && searchBlock.has(event.target).length === 0
            && !$(event.target).hasClass('search__btn') && !$(event.target).hasClass('search__modal')) {
            // Клик сделан вне элемента с классом "search" и не на .search__btn и .search__modal
            searchBlock.removeClass('open');
        }
    });
    
    $('.search svg').on('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        $('.search').toggleClass('open');
    });
    $(document).on('click', function(event) {
        var menuBlock = $('.menu__item');
        
        if (!menuBlock.is(event.target) && menuBlock.has(event.target).length === 0) {
            // Клик сделан вне элемента с классом "menu__item"
            menuBlock.removeClass('open');
        }
    });
    $(document).on('click', function(event) {
        var loginBlock = $('.login');
    
        if (!loginBlock.is(event.target) && loginBlock.has(event.target).length === 0) {
            // Клик сделан вне элемента с классом "login"
            loginBlock.removeClass('open');
        }
    });
    
    $('.login svg').on('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        $('.login').toggleClass('open');
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.cart__modal').length) {
            $('.cart').removeClass('open');
        } 
    });
    
    $('.cart').on('click', function(event) {
        event.stopPropagation(); // Остановить "всплытие" события, чтобы оно не попало на document
        $('.cart').toggleClass('open');
    });
    

        $('.cart__minus').on('click', function() {
            var resultElement = $(this).siblings('.cart__product-result');
            var currentValue = parseInt(resultElement.text());
            if (currentValue > 1) {
                resultElement.text(currentValue - 1);
            }
        });
        
        $('.cart__plus').on('click', function() {
            var resultElement = $(this).siblings('.cart__product-result');
            var currentValue = parseInt(resultElement.text());
            resultElement.text(currentValue + 1);
        });
        
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.cart__modal').length) {
                $('.cart').removeClass('open');
            }
        });
        
        $('.main__slider').owlCarousel({
            loop:true,
            nav:true,
            mouseDrag:true,
            touchDrag: true,
            pullDrag:false,
            freeDrag:false,
            URLhashListener:false,
            dots:false,
            autoplay:false,
            items:1
        });
        $('.slider__slider').owlCarousel({
            loop:true,
            nav:true,
            mouseDrag:true,
            touchDrag: true,
            pullDrag:false,
            freeDrag:false,
            URLhashListener:false,
            dots:false,
            autoplay:false,
            items:4,
            margin:20,
        });
        $('.partners__slider').owlCarousel({
            loop:true,
            nav:true,
            mouseDrag:true,
            touchDrag: true,
            pullDrag:false,
            freeDrag:false,
            URLhashListener:false,
            dots:false,
            autoplay:false,
            items:6,
            margin:20,
        });
        $('.sertificates__slider').owlCarousel({
            loop:true,
            nav:true,
            mouseDrag:true,
            touchDrag: true,
            pullDrag:false,
            freeDrag:false,
            URLhashListener:false,
            dots:false,
            autoplay:false,
            items:5,
            margin:30,
        });
        $('.reviews__slider').owlCarousel({
            loop:true,
            nav:true,
            mouseDrag:true,
            touchDrag: true,
            pullDrag:false,
            freeDrag:false,
            URLhashListener:false,
            dots:false,
            autoplay:false,
            items:4,
            margin:30,
        });


        
        $(".tehno__media-btn").on("click", function() {
            // Получаем идентификатор видео из атрибута данных
            var videoId = $(this).data("video");
            $(this).parent().find("video").attr("data-video", videoId)
            // Находим соответствующее видео по идентификатору
            var video = $(".video[data-video='" + videoId + "']")[0];
            // Проверяем, существует ли видео и воспроизводится ли оно в данный момент
            if (video && video.paused !== undefined) {
              if (video.paused) {
                // Если видео приостановлено, запускаем его
                video.play();
                $(this).find("svg path").attr("fill", "yellow"); // Изменяем цвет кнопки
              } else {
                // Если видео уже воспроизводится, останавливаем его
                video.pause();
                $(this).find("svg path").attr("fill", "white"); // Изменяем цвет кнопки
              }
            }
          });


        //   $('.rating').each(function() {
        //     var $rating = $(this);
        //     var ratingValueId = $rating.attr('id') + '-value';
        //     var rating = 0;
      
        //     $rating.find('.star').on('click', function() {
        //       var selectedRating = $(this).data('rating');
        //       $rating.find('.star').removeClass('active');
      
        //       for (var i = 1; i <= selectedRating; i++) {
        //         $rating.find('.star[data-rating="' + i + '"]').addClass('active');
        //       }
      
        //       rating = selectedRating;
        //       $('#' + ratingValueId).html('Вы поставили оценку: ' + rating);
        //     });
      
        //     $rating.find('.star').hover(function() {
        //       var selectedRating = $(this).data('rating');
        //       $rating.find('.star').removeClass('active');
      
        //       for (var i = 1; i <= selectedRating; i++) {
        //         $rating.find('.star[data-rating="' + i + '"]').addClass('active');
        //       }
        //     }, function() {
        //       $rating.find('.star').removeClass('active');
      
        //       for (var i = 1; i <= rating; i++) {
        //         $rating.find('.star[data-rating="' + i + '"]').addClass('active');
        //       }
        //     });
        //   });
});

