document.querySelector('.menu-open').onclick = function () {
    document.querySelector('.burger-menu').classList.add('show');
}

document.querySelector('.close').onclick = function () {
    document.querySelector('.burger-menu').classList.remove('show');
}

//categories

document.querySelector('.category1').onclick = function () {
    document.querySelector('.category1').classList.toggle('active');
    document.querySelector('.card1').classList.toggle('none')
    document.querySelector('.card3').classList.toggle('none')
    document.querySelector('.card4').classList.toggle('none')
    document.querySelector('.card5').classList.toggle('none')
    document.querySelector('.card6').classList.toggle('none')
}

document.querySelector('.category2').onclick = function () {
    document.querySelector('.category2').classList.toggle('active');
    document.querySelector('.card1').classList.toggle('none')
    document.querySelector('.card2').classList.toggle('none')
    document.querySelector('.card5').classList.toggle('none')
}

document.querySelector('.category3').onclick = function () {
    document.querySelector('.category3').classList.toggle('active');
    document.querySelector('.card1').classList.toggle('none')
    document.querySelector('.card3').classList.toggle('none')
    document.querySelector('.card4').classList.toggle('none')
}

document.querySelector('.category4').onclick = function () {
    document.querySelector('.category4').classList.toggle('active');
    document.querySelector('.card1').classList.toggle('none')
    document.querySelector('.card2').classList.toggle('none')
    document.querySelector('.card4').classList.toggle('none')
    document.querySelector('.card5').classList.toggle('none')
    document.querySelector('.card6').classList.toggle('none')
}

document.querySelector('.category5').onclick = function () {
    document.querySelector('.category5').classList.toggle('active');
    document.querySelector('.card1').classList.toggle('none')
    document.querySelector('.card6').classList.toggle('none')
}

document.querySelector('.category6').onclick = function () {
    document.querySelector('.category6').classList.toggle('active');
    document.querySelector('.card5').classList.toggle('none')
    document.querySelector('.card6').classList.toggle('none')
    document.querySelector('.card1').classList.toggle('none')
}

document.querySelector('.reset').onclick = function () {
    document.querySelector('.category1').classList.remove('active');
    document.querySelector('.category2').classList.remove('active');
    document.querySelector('.category3').classList.remove('active');
    document.querySelector('.category4').classList.remove('active');
    document.querySelector('.category5').classList.remove('active');
    document.querySelector('.category6').classList.remove('active');
    document.querySelector('#card1').classList.remove('none')
    document.querySelector('#card2').classList.remove('none')
    document.querySelector('#card3').classList.remove('none')
    document.querySelector('#card4').classList.remove('none')
    document.querySelector('#card5').classList.remove('none')
    document.querySelector('#card6').classList.remove('none')
}

document.querySelector('.reset-mobile').onclick = function () {
    document.querySelector('.category1').classList.remove('active');
    document.querySelector('.category2').classList.remove('active');
    document.querySelector('.category3').classList.remove('active');
    document.querySelector('.category4').classList.remove('active');
    document.querySelector('.category5').classList.remove('active');
    document.querySelector('.category6').classList.remove('active');
    document.querySelector('#card1').classList.remove('none')
    document.querySelector('#card2').classList.remove('none')
    document.querySelector('#card3').classList.remove('none')
    document.querySelector('#card4').classList.remove('none')
    document.querySelector('#card5').classList.remove('none')
    document.querySelector('#card6').classList.remove('none')
}


