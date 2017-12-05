var ThemeModule = function() {


  //////////////////////
  // Private Methods //
  ////////////////////
  var _header = function() {
    $('.navbar-toggler').click(function() {
      $('body').toggleClass('open-menu');
      $(this).toggleClass('open-menu');
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    _header();
  };

  return {
    init: init
  };
}();

ThemeModule.init();
