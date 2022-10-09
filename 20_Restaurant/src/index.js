import _ from "lodash";
import "./style.css";
import { data } from "./js/model";
import contentView from "./js/contentView";
import { addHandlerWindowLoad } from "./js/renderLanding";
import { renderMenu } from "./js/renderMenu";
import renderContentNew from "./js/renderContentNew";

const controlLanding = function () {
  renderContentNew.renderData(data);
  renderMenu();
  renderContentNew.renderNewContent("new");
};

function init() {
  addHandlerWindowLoad(controlLanding);
}
init();
