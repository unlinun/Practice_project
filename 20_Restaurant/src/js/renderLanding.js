import ContentView from "./contentView";

class RenderLanding extends ContentView {
  _parentElement = document.querySelector("#container");

  // ADD LANDING PAGE
  renderLanding() {
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
  }
  //   set time for 2 sec and closed landing page
  hideLanding(element) {
    setTimeout(() => {
      element.classList.add("hidden");
    }, 2000);
  }

  // when load page => create landing page
  loadingPage() {
    const landing = this.renderLanding();
    this._parentElement.appendChild(landing);
    this.hideLanding(landing);
  }

  ///////// add handler
  addHandlerWindowLoad(handler) {
    window.addEventListener("load", this.loadingPage.bind(this));
    handler();
  }
}

export default new RenderLanding();
