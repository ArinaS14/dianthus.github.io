// $('.map-block').on('click', function() {
//     $('.map-block iframe').css("pointer-events", "auto");
// });

// $(".map-block").on('mouseenter, mouseleave', function() {
//     $('.map-block iframe').css("pointer-events", "none");
// });

// mapBlock.onclick = function() {
//     // убираем атрибут "style", в котором прописано свойство "pointer-events"
//     this.children[0].removeAttribute('style');
// }

// mapBlock.mouseleave = function() {
//     this.children[0].addAttribute('style');
// }

// $(document).ready(function() {
//     $('.mapBlock').click(function() {
//         $(this).remove();
//     });
// });

map = $('.map');
map.click(function() {
    $(this).find('iframe').css("pointer-events", "auto");
});

$(document).click(function(e) {
    if (!$(e.target).is(".map")) {
        map.find('iframe').css("pointer-events", "none");
    };
});

//===============FIXED MENU====================
$(window).scroll(function() {
    if ($(this).scrollTop() > 140) {
        $('.menu').addClass('header-fixed');
    } else if ($(this).scrollTop() < 140) {
        $('.menu').removeClass('header-fixed');
    }
});

// ===============SLIDER====================
$(document).ready(function() {
    $('.slider').slick({
        // adaptiveHeight: true,
        speed: 2000,
        easing: 'liner',
        autoplay: true,
        autoplaySpeed: 4000,
        // pauseOnFocus: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }],
        responsive: [{
            breakpoint: 515,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
});

$(document).ready(function() {
    $('.tablet-slider').slick({
        // adaptiveHeight: true,
        speed: 2000,
        easing: 'liner',
        autoplay: true,
        autoplaySpeed: 4000,
        // pauseOnFocus: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 515,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
});

$('input[name=phone]').mask("+7 (999) 999-99-99");



// ===============MODAL=======================

// Флорист
$('[date-modal=vacancy]').on('click', function() {
    $('.overlay, #vacancy').fadeIn('slow');
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
});

$('.vacancy-modal__close').on('click', function() {
    $('.overlay, #vacancy').fadeOut('slow');
    document.getElementsByTagName("body")[0].style.overflow = "auto";
});

$('.respond').on('click', function() {
    $('.want-team__florist-no-show').slideToggle(600);
    document.querySelector(".respond").onclick = e => e.target.children[0].textContent = e.target.children[0].textContent === '̭' ? '̬' : '̭';
});

//Закрытие при нажатии на фон
// $('.overlay').on('click', function() {
//     $('.overlay, #vacancy').fadeOut('slow');
//     document.getElementsByTagName("body")[0].style.overflow = "auto";
// });



// Помощник флориста
$('[date-modal=vacancy-2]').on('click', function() {
    $('.vacancy-overlay, #vacancy-2').fadeIn('slow');
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
});

$('.vacancy-modal__close').on('click', function() {
    $('.vacancy-overlay, #vacancy-2').fadeOut('slow');
    document.getElementsByTagName("body")[0].style.overflow = "auto";
});

$('.respond-help-florist').on('click', function() {
    $('.want-team__help-florist-no-show').slideToggle(600);
    document.querySelector(".respond-help-florist").onclick = e => e.target.children[0].textContent = e.target.children[0].textContent === '̭' ? '̬' : '̭';
});

//Закрытие при нажатии на фон
// $('.overlay').on('click', function() {
//     $('.overlay, #vacancy').fadeOut('slow');
//     document.getElementsByTagName("body")[0].style.overflow = "auto";
// });


// Вход
$('[date-modal=exit]').on('click', function() {
    $('.overlay-exit, #modal-exit').fadeIn('slow');
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
});

$('.exit-modal__close').on('click', function() {
    $('.overlay-exit, #modal-exit').fadeOut('slow');
    document.getElementsByTagName("body")[0].style.overflow = "auto";
});

//Закрытие при нажатии на фон
// $('.overlay').on('click', function() {
//     $('.overlay, #vacancy').fadeOut('slow');
//     document.getElementsByTagName("body")[0].style.overflow = "auto";
// });

$('[date-modal=registration]').on('click', function() {
    $('.overlay-exit, #modal-exit').fadeOut('slow');
    $('.overlay-regist, #modal-regist').fadeIn('slow');
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
});

$('.exit-modal__close').on('click', function() {
    $('.overlay-regist, #modal-regist').fadeOut('slow');
    document.getElementsByTagName("body")[0].style.overflow = "auto";
});


$('.booking__form').submit(function(e) {
    var empty = $(this).parent().find("input").filter(function() {
        return this.value === "";
    });
    //Если все графы заполнены, то показываем popup
    $('.overlay-thanks, #modal-thanks').fadeIn('slow');
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

    //очищаем все данные текстовых полей, кроме кнопок
    $('form input textarea').not(':button, :submit').val('');
    e.preventDefault();
});

//Thanks
$('#user-name').keyup(function() {
    var userName = $('#user-name').val(); //Получаем данные из input
    $('.thanks__title').html(userName + `, спасибо!`); //Вставляем значение в тег с классом txt
});
//Thanks
// if (($('#user-name').val() != "")) {
//     $('[date-modal=thanks]').on('click', function() {
//         $('.overlay-thanks, #modal-thanks').fadeIn('slow');
//         document.getElementsByTagName("body")[0].style.overflow = "hidden";
//     });
// }

$('.exit-modal__close').on('click', function() {
    $('.overlay-thanks, #modal-thanks').fadeOut('slow');
    document.getElementsByTagName("body")[0].style.overflow = "auto";
});

//Закрытие при нажатии на фон
// $('.overlay').on('click', function() {
//     $('.overlay, #vacancy').fadeOut('slow');
//     document.getElementsByTagName("body")[0].style.overflow = "auto";
// });

//Сортировка товаров
document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;

function mySort() {
    let nav = document.querySelector('.cards');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('date-price') > +nav.children[j].getAttribute('date-price')) {
                replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replaceNode, nav.children[i]);
            }
        }
    }
}

function mySortDesc() {
    let nav = document.querySelector('.cards');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('date-price') < +nav.children[j].getAttribute('date-price')) {
                replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replaceNode, nav.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}



//Сортировка товаров mobile
document.querySelector('#sort-asc-mob').onclick = mySortMob;
document.querySelector('#sort-desc-mob').onclick = mySortDescMob;

function mySortMob() {
    let nav = document.querySelector('.cards');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('date-price') > +nav.children[j].getAttribute('date-price')) {
                replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replaceNode, nav.children[i]);
            }
        }
    }
}

function mySortDescMob() {
    let nav = document.querySelector('.cards');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('date-price') < +nav.children[j].getAttribute('date-price')) {
                replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replaceNode, nav.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}



$('#sort-filter').on("click", function() { //вешаем событие на клик по кнопке id="btn1"
    $('#sort-flowers-mob').toggle(); //включает/выключает элемент id="text"
});


$('.filter-reset').click(function() {
    $('input:checked').prop('checked', false);
});




// window.onscroll = function showHeader() {
//     var header = document.querySelector('.menu');
//     if (window.scrollY > 200) {
//         header.classList.add('header-fixed');
//     }
// }


// // ===============Для текста ОТ=======================

// var $inpFrom = $(".flower-cost-from"),
//     prevValFrom = '',
//     referenceFrom = "От";

// function change(val) {
//     var ind = val.indexOf(referenceFrom);

//     if (ind !== 0) {
//         $inpFrom.prop("value", prevValFrom || referenceFrom);
//     } else {
//         prevValFrom = val;
//     }
// }

// $inpFrom.on("input", function() {
//     var val = $(this).prop("value");
//     change(val);
// });

// // ===============Для текста ДО=======================

// var $inpBefore = $(".flower-cost-before"),
//     prevValBefore = '',
//     referenceBefore = "До ";

// function change(val) {
//     var indBefore = val.indexOf(referenceBefore);

//     if (indBefore !== 0) {
//         $inpBefore.prop("value", prevValBefore || referenceBefore);
//     } else {
//         prevValBefore = val;
//     }
// }

// $inpBefore.on("input", function() {
//     var val = $(this).prop("value");
//     change(val);
//