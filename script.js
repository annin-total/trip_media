// ローダー
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    // loaderを消す
    const loader = document.querySelector('.loader-container')
    loader.classList.add("loaded")
    // contentを見せる
    const content = document.querySelector('.content')
    content.style.display = "block"
    content.style.opacity = "1"
  },2300) 
  this.setTimeout(() => {
    const loader = document.querySelector('.loader-container')
    loader.style.display = "none"
  },4000)
})

// ハンバーガーメニュー
$(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(400)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});

// ドロップダウンメニュー
$(function() {
  $("ul.dropdown-menu li").hover(
    function() {
      $(".menuSub:not(:animated)", this).slideDown();
    },
    function() {
      $(".menuSub", this).slideUp();
    }
  );
});