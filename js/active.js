$(document).ready(function () {
  // SideBar

  $("#sideBarNavOpen").click(function () {
    $("#sideBarNav").animate({
      width: "200px",
    });
    $("#sideBarNavClose").show();
    $(this).hide();
  });
  $("#sideBarNavClose").click(function () {
    $("#sideBarNav").animate({
      width: "0px",
    });
    $("#sideBarNavOpen").show();
    $(this).hide();
  });
});
