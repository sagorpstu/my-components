$(document).ready(function () {
  // SideBar
  $("#sideBarOpen").click(function () {
    $("#sideBarClose").show();
    $("#sideBarOpen").hide();
    $("#sideBar").animate(
      {
        width: "200px",
      },
      400
    );
  });

  $("#sideBarClose").click(function () {
    $("#sideBarClose").hide();
    $("#sideBarOpen").show();
    $("#sideBar").animate(
      {
        width: "0px",
      },
      400
    );
  });
});
