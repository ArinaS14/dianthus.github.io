let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let count2 = document.getElementById("num");
let costTovar = document.getElementById("total__cost-tovar");
let delivery = 0;
let costDelivery = document.getElementById("total__cost-delivery");
let costAll = document.getElementById("total__all-cost");
let costAllCalc = 0;
let number = 1;
let totalCostTovar = 0;
let price = 1500;

costTovar.innerHTML = `Стоимость: за ` + number + `шт. ` + number * price + ` руб`;
costAll.innerHTML = `Итого: ` + ((number * price) + delivery) + ` руб`;


buttonCountPlus.onclick = function() {
    if (number <= 50) {
        number++;
        count.innerHTML = number;
        totalCostTovar = number * price;
        calculation.innerHTML = totalCostTovar + ` руб`;
    }
    costTovar.innerHTML = `Стоимость: за ` + number + `шт.  ` + totalCostTovar + ` руб`;
    costAllCalc = totalCostTovar + delivery;
    costAll.innerHTML = `Итого: ` + costAllCalc + ` руб`;

};

buttonCountMinus.onclick = function() {
    if (number >= 2) {
        number--;
        count.innerHTML = number;
        totalCostTovar = number * price;
        calculation.innerHTML = totalCostTovar + ` руб`;
    }
    costTovar.innerHTML = `Стоимость: за ` + number + `шт.  ` + totalCostTovar + ` руб`;
    costAllCalc = number * price + delivery;
    costAll.innerHTML = `Итого: ` + costAllCalc + ` руб`;
};

document.getElementById("pickup").addEventListener("click", function() {
    costDelivery.innerHTML = ``
    delivery = 0;
    costAllCalc = number * price + delivery;
    costAll.innerHTML = `Итого: ` + costAllCalc + ` руб`;
});

document.getElementById("delivery-city").addEventListener("click", function() {
    delivery = 300;
    costDelivery.innerHTML = `Стоимость доставки: по городу 300 руб.`
    costAllCalc = number * price + delivery;
    costAll.innerHTML = `Итого: ` + costAllCalc + ` руб`;
});

document.getElementById("delivery-sip").addEventListener("click", function() {
    delivery = 200;
    costDelivery.innerHTML = `Стоимость доставки: по Сипайлово 200 руб.`
    costAllCalc = number * price + delivery;
    costAll.innerHTML = `Итого: ` + costAllCalc + ` руб`;
});


$('.user-order__del').on('click', function() {
    $('.main-user-order, .booking, .total, .delivery-order, .user-order-mobile').fadeOut('slow');
    document.querySelector('.empty').innerHTML += 'Корзина пуста...';
    document.querySelector('.back-catalog').style.display = 'block';

});