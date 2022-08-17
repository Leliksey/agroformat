$(".buttons__group_item").click(function() {
    $(this).parent().find(".buttons__group_item").css("background", "#F5F3FE");
    $(this).css("background", "#5A37E9");
})

$( window ).resize(function() {
    if ($(window).width() < 1200) {
        $(".header__bottom .catalog__button").text("Каталог");
    } else {
        $(".header__bottom .catalog__button").text("Каталог товаров");
    }
})
if ($(window).width() < 1200) {
    $(".header__bottom .catalog__button").text("Каталог");
} else {
    $(".header__bottom .catalog__button").text("Каталог товаров");
}
$(".menu__dropdown").mouseover(function() {
    $(".menu__dropdown_list").css("display", "flex");
});
$(".menu__dropdown_list").mouseleave(function() {
    $(".menu__dropdown_list").css("display", "none");
});
$(".header__bottom").mouseleave(function() {
    $(".menu__dropdown_list").css("display", "none");
});

$(".proposal__item").click(function() {
    $(this).parent().find(".proposal__item").removeClass("proposal__item_active");
    $(this).addClass("proposal__item_active");
});


// $( window ).resize(function() {
//     if ($(window).width() < 577) {
//         $(".proposal__content_mobile").addClass("proposal__slider");
//     } else {
//         $(".proposal__content_mobile").removeClass("proposal__slider");
//     }
// })
// if ($(window).width() < 577) {
//     $(".proposal__content_mobile").addClass("proposal__slider");
//     $(".proposal__item").removeClass("proposal__item_active");
// } else {
//     $(".proposal__content_mobile").removeClass("proposal__slider");
// }

$(".proposal__arrow_left").click(function() {
    $(this).parent().parent().find(".proposal__arrow_right_active").removeClass("proposal__arrow_right_active");
    $(this).addClass("proposal__arrow_left_active");
    $(this).parent().parent().find(".proposal__arrow").css("background", "#F5F3FE");
    $(this).parent().css("background", "#5A37E9");
    $(".proposal__content_mobile .owl-prev").click();
});
$(".proposal__arrow_right").click(function() {
    $(this).parent().parent().find(".proposal__arrow_left_active").removeClass("proposal__arrow_left_active");
    $(this).addClass("proposal__arrow_right_active");
    $(this).parent().parent().find(".proposal__arrow").css("background", "#F5F3FE");
    $(this).parent().css("background", "#5A37E9");
    $(".proposal__content_mobile .owl-next").click();
});
$(".ourProducts__button_more").click(function() {
    $(".ourProducts__button_more").addClass("ourProducts__button_more_animate");
    function delClass() {
        $(".ourProducts__button_more_animate").removeClass("ourProducts__button_more_animate");
    }
    setTimeout(delClass, 2000);
})

if ($(window).width() > 992) {
    $(".product-card").mouseenter(function() {
        $(this).parent().find(".product-card__bottom").slideToggle();
        $(this).parent().find(".product-card__group_count").css("display", "flex");
        $(this).parent().parent().css("z-index", "50");
    })
    $(".product-card").mouseleave(function() {
        $(this).parent().find(".product-card__bottom").slideToggle();
        $(this).parent().find(".product-card__group_count").css("display", "none");
        $(this).parent().parent().css("z-index", "0");
    })
};

$(".product-card__favorite").click(function() {
    $(this).toggleClass("product-card__favorite_active");
    //$(".product-card__favorite").submit();
})

$( window ).resize(function() {
    if ($(window).width() < 768) {
        $(".ourProgress__banner .banners__slider1__title").text("Ремонт оборудования любой сложности!")
    } else {
        $(".ourProgress__banner .banners__slider1__title").text("Ремонт любой сложности за одно оборудование")
    }
});
if ($(window).width() < 768) {
    $(".ourProgress__banner .banners__slider1__title").text("Ремонт оборудования любой сложности!");
} else {
    $(".ourProgress__banner .banners__slider1__title").text("Ремонт любой сложности за одно оборудование");
}


$( window ).resize(function() {
    if ($(window).width() > 768) {
        $(".geografic__map_point").click(function() {
            $(this).parent().parent().find(".geografic__map_point_info").css("display", "none");
            $(this).find(".geografic__map_point_info").css("display", "block");
        })
    }
})
if ($(window).width() > 768) {
    $(".geografic__map_point").click(function() {
        $(this).parent().parent().find(".geografic__map_point_info").css("display", "none");
        $(this).find(".geografic__map_point_info").css("display", "block");
        
    });
    window.addEventListener("click", function(e) {
        if ($(e.target).hasClass("geografic__map_point") || $(e.target).hasClass("geografic__map_point_info_text")) {
            return;
        } else {
            $(".geografic__map_point_info").css("display", "none");
        }
    })
}
$(".geografic__map_point").click(function() {
    $(".geografic__map_point").removeClass("map__point_active");
    $(this).addClass("map__point_active");
})


$(".ourServices-block").mouseenter(function() {
    $(this).addClass("ourServices-block__title_active");
    $(this).children(".ourServices-block__img").css("display", "none");
    $(this).children(".discover").css("display", "block");
})
$(".ourServices-block").mouseleave(function() {
    $(this).removeClass("ourServices-block__title_active");
    $(this).children(".ourServices-block__img").css("display", "block");
    $(this).children(".discover").css("display", "none");
})

$(document).ready(function() {
    $(".phone").mask("+7 (999) 999-99-99");
  });


  $(".filter__item").click(function(e) {
    $(this).find(".filter__item-title").toggleClass("filter__item-title_open");

    if (
        $(e.target).hasClass("polzunok-input-5-left") || $(e.target).hasClass("polzunok-input-5-right") ||
        $(e.target).hasClass("polzunok-5") || $(e.target).hasClass("ui-slider-handle") ||
        $(e.target).hasClass("ui-slider-range") || $(e.target).hasClass("ui-slider-handle") ||
        $(e.target).hasClass("polzunok-container-5") || $(e.target).hasClass("custom-input") ||
        $(e.target).hasClass("custom-checkbox")  || $(e.target).hasClass("filter__item-content") 
        ) {
       
        $(this).find(".filter__item-title").toggleClass("filter__item-title_open");
      }
    
    else {
        
        $(this).find(".filter__item-content").slideToggle();
     }
    
  })



  $(".sort__result-view_list").click(function() {
    $(".sort .ourProducts__cards").addClass("ourProducts__cards_list");
  })
  $(".sort__result-view_grid").click(function() {
    $(".sort .ourProducts__cards").removeClass("ourProducts__cards_list");
  })


  $(".sort__result-open_filter").click(function() {
    $("body").addClass("active");
    $(".sort__result").addClass("hide");
  })
  $(".filter__close").click(function() {
    $("body").removeClass("active");
    $(".sort__result").removeClass("hide");
  })
  $( window ).resize(function() {
  if ($(window).width() > 992) {
    $(".filter__close").click();
  }})

  $(".question__item").click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass("question__item_active");
  })



  $(".latest-view .product-card").mouseenter(function() {
    $(this).addClass("border_active");
})
$(".latest-view .product-card").mouseleave(function() {
    $(this).removeClass("border_active");
})



$(".productInfo__arrow_left").click(function() {
    $(".productInfo .owl-nav .owl-prev").click();
})
$(".productInfo__arrow_right").click(function() {
    $(".productInfo .owl-nav .owl-next").click();
})


$(function(){
    $('input[type=file]').each(function() {
      var $input = $(this),
          $label = $input.next('.js-labelFile'),
          labelVal = $label.html();

      $input.hide();
      $input.on('change', function(element) {
          var fileName = '';
          if (element.target.value) fileName = element.target.value.split('\\').pop();
          fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
      });
    });
  });
  $(".js-labelFile").click(function() {
    $(".checkoutDestination__attach").click();
})


$(".catalog__button").on("click", function() {
    $("body").addClass("catalog_open");
})
$(".catalog__menu_close").on("click", function() {
    $("body").removeClass("catalog_open");
})

$( window ).resize(function() {
    if ($(window).width() < 768) {
      $(".serviceForms .consulting__button").text("Оставить заявку");
    } else {
        $(".serviceForms .consulting__button").text("Заказать консультацию");
    }
})
    if ($(window).width() < 768) {
        $(".serviceForms .consulting__button").text("Оставить заявку");
      }


$(".serviceCategory__item").on("click", function() {
    $(this).parent().find(".serviceCategory__item").removeClass("serviceCategory__item_active");
    $(this).addClass("serviceCategory__item_active");

    let index = $(this).index();
    $(".serviceCategory__result").removeClass("serviceCategory__result_active");
    $(".serviceCategory__result").eq(index).addClass("serviceCategory__result_active");
})

$(".serviceProducts .product-card__favorite").on("click", function() {
    $(this).toggleClass(".product-card__favorite_active");
})


// function initMap() {
//     var Kiev= {lat: 50.4501, lng: 30.5234};
//     var map = new google.maps.Map(document.getElementById('googleMap'), {
//       zoom: 10,
//       center: Kiev
//     });
//     var marker = new google.maps.Marker({
//       position: Kiev,
//       map: map
//     });
//   }

  function myMap() {
    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

$(".blog__item").on("mouseover", function() {
    $(this).find(".blog__item-link").addClass("blog__item-link_active");
})
$(".blog__item").on("mouseleave", function() {
    $(this).find(".blog__item-link").removeClass("blog__item-link_active");
})