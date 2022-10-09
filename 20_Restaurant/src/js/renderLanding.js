const parentElement = document.querySelector("#container");
// ADD LANDING PAGE
const renderLanding = function () {
  const landingContainer = document.createElement("div");
  const landingTitle = document.createElement("p");
  const landingContent = document.createElement("p");
  landingContainer.classList.add("landing");
  landingTitle.classList.add("landing__title");
  landingContent.classList.add("landing__content");
  landingTitle.textContent = `GO!`;
  landingContent.textContent = `GET EATTTTT!`;
  landingContainer.appendChild(landingTitle);
  landingContainer.appendChild(landingContent);
  return landingContainer;
};
const hideLanding = function (element) {
  setTimeout(() => {
    element.classList.add("hidden");
  }, 2000);
};

const loadingPage = function () {
  const landing = renderLanding();
  parentElement.appendChild(landing);
  hideLanding(landing);
};

const addHandlerWindowLoad = function (handler) {
  window.addEventListener("load", loadingPage);
  handler();
};

export { addHandlerWindowLoad };
