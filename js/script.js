document.querySelector('.menu-open').onclick = function () {
    document.querySelector('.burger-menu').classList.add('show');
}

document.querySelector('.close').onclick = function () {
    document.querySelector('.burger-menu').classList.remove('show');
}

document.querySelector('#watchmore').onclick = function () {
    document.querySelector('#card7').classList.add('show');
    document.querySelector('#card8').classList.add('show');
    document.querySelector('#card9').classList.add('show');
    document.querySelector('#watchmore').classList.add('none')
}



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
    });
});
