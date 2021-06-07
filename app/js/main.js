$(function(){

  // header user-menu
  var userMenu = $('.menu-user__info');
  // show user-menu
  $('.menu-user__btn--js').on('click', function(e) {
    $(userMenu).toggleClass('menu-user__info--active');
    e.stopPropagation();
  });

  // hide user-menu
  $(document).on('click', function(e) {
    if(userMenu.hasClass('menu-user__info--active')){
      userMenu.removeClass('menu-user__info--active');
    }
  });
  // end user-menu


  // sub-list
  var dropMenu = $('.user__sub-list--js');
// show sub-list
  $('.user__sub-btn--js').on('click', function(e) {
    $(dropMenu).toggleClass('show');
    e.stopPropagation();
  });
  
  // hide sub-list
  $(document).on('click', function(e) {
    if(dropMenu.hasClass('show')){
      $(dropMenu).removeClass('show');
    }
  });
  // end sub-list


  // tabs
  $('.menu__list-link--js').on('click', function(e) {
    e.preventDefault();
    $('.menu__list-link--js').removeClass('menu__list-link--active');
    $(this).addClass('menu__list-link--active');
    
    $('.user__content--js').removeClass('user__content--active');
    $($(this).attr('href')).addClass('user__content--active');
  });
    

  //end  tabs

});