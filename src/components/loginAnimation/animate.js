import $ from "jquery";

export const animateLogin = () => {
  const handleRegisterClick = function () {
    $(".veen .wrapper").addClass("move");
    $(".body").css("background", "#7EF5A1");
    $(".veen .login-btn button").removeClass("active");
    $(this).addClass("active");
  };

  const handleLoginClick = function () {
    $(".veen .wrapper").removeClass("move");
    $(".body").css("background", "#7B3DF4");
    $(".veen .rgstr-btn button").removeClass("active");
    $(this).addClass("active");
  };

  $(".veen .rgstr-btn button").on("click", handleRegisterClick);
  $(".veen .login-btn button").on("click", handleLoginClick);

  // return cleanup function
  return () => {
    $(".veen .rgstr-btn button").off("click", handleRegisterClick);
    $(".veen .login-btn button").off("click", handleLoginClick);
  };
};
