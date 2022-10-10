import _ from "lodash";
import "./style.css";
import { data } from "./js/model";
import contentView from "./js/contentView";
import renderLanding from "./js/renderLanding";
import renderMenu from "./js/renderMenu";
import renderContent from "./js/renderContent";

const controlLanding = function () {
  renderContent.renderData(data);
  renderMenu.renderMenu("new");
  renderContent.renderNewContent("new");
};

const controlChangeMenu = function (type) {
  renderMenu.renderMenu(type);
  renderContent.renderNewContent(type);
  console.log("click");
};

function init() {
  renderLanding.addHandlerWindowLoad(controlLanding);
  renderContent.addHandlerClickMenu(controlChangeMenu);
}
init();
