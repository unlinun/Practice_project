const themeView = (function () {
  const _parentElement = document.querySelector("html");
  const themeDark = document.querySelector("#theme__dark");
  const themeWhite = document.querySelector("#theme__white");

  let defaultTheme = window.matchMedia(`(prefers-color-scheme: light)`).matches
    ? "light"
    : "dark";

  function getTheme(e) {
    _parentElement.setAttribute("data-theme", defaultTheme);
  }
  themeDark.addEventListener("click", function () {
    _parentElement.setAttribute("data-theme", "dark");
  });
  themeWhite.addEventListener("click", function () {
    _parentElement.setAttribute("data-theme", "white");
  });
  return {
    getTheme,
  };
})();

export default themeView;
