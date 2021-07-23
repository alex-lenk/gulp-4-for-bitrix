$(document).ready(function () {
  /* BEGIN: Раскрываем и сворачиваем список dropdown */
  let dropdown = '.js__dropdown',
    dropdownActive = 'dropdown-active',
    dropdownToggle = '.js__dropdown-toggle';

  $(dropdownToggle).click(function () {
    if (!$(this).hasClass(dropdownActive)) {
      $('.js__dropdown-toggle.dropdown-active').removeClass(dropdownActive);
      $(this).addClass(dropdownActive);
    } else {
      $(this).removeClass(dropdownActive);
    }
  });

  $('.js__dropdown-close').click(function () {
    $('.dropdown-active').removeClass(dropdownActive);
  });

  $(document).mouseup(function (e) {
    if (!$(dropdown).is(e.target) && $(dropdown).has(e.target).length === 0) {
      $(dropdownToggle).removeClass(dropdownActive);
    }
  });
  /* END */
});
