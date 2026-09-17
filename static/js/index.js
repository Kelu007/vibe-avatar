document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');

  burger.addEventListener('click', function () {
    var isExpanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isExpanded));
    burger.classList.toggle('is-active', !isExpanded);
    menu.classList.toggle('is-active', !isExpanded);
  });
});
