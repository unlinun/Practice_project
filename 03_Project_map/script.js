"use strict";

const projectsWrapper = document.querySelector(".projects");
const form = document.querySelector(".form");
const input_type = document.querySelector(".input-type");
const input_projectName = document.querySelector(".input-name");
const input_projectImg = document.querySelector(".input-img");
const input_year = document.querySelector(".input-year");
const submit = document.querySelector(".add-btn");

// 設定 APP class
class Projects {
  date = new Date();
  id = (Date.now() + "").slice(-4);
  constructor(coords, type, projectName, projectImg, year) {
    this.coords = coords;
    this.type = type;
    this.projectName = projectName;
    this.projectImg = projectImg;
    this.year = year;
    this._description();
  }
  _description() {
    this.description = `Project : ${this.projectName}
    Year : ${this.year}`;
  }
}

class App {
  //新增區域變量
  #map;
  #mapEvent;
  #imgUrl;
  #projects = [];
  constructor() {
    //先取得使用者位置
    this._getCurrentLocation();
    //取得本地儲存資訊，並顯示在地圖上
    this._getLocalStorage();
    //當按下 esc 關閉 form
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        form.classList.add("hidden");
        //clear value
        input_projectImg.value =
          input_projectName.value =
          input_year.value =
            "";
      }
    });
    // form按下送出後，獲取作品資訊與呈現在地圖上
    form.addEventListener("submit", this._submitForm.bind(this));
    //取得作品 url
    input_projectImg.addEventListener("change", this._readURL.bind(this));
    //點按作品時可以移動至該專案位置
    projectsWrapper.addEventListener("click", this._moveMap.bind(this));
  }

  //獲取用戶當前位置
  _getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert(`can't get your current position`);
        }
      );
    }
  }

  //獲取當前位置後載入地圖
  _loadMap(position) {
    //利用現在正確位置取得精度及緯度
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coord = [latitude, longitude];
    // 導入 leaflet API，並傳入經緯度
    this.#map = L.map("map").setView(coord, 13);

    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(this.#map);

    //當地圖載入完成後，載入marker
    this.#projects.forEach((p) => this._renderMarker(p));
    //當點擊地圖時，加入 form 事件
    this.#map.on("click", this._showForm.bind(this));
    this.#map.setView(coord, 5);
  }

  //show form
  _showForm(e) {
    this.#mapEvent = e;
    form.classList.remove("hidden");
    input_projectName.focus();
  }

  //hide form
  _hideForm() {
    form.classList.add("hidden");
    //clear value
    input_projectImg.value = input_projectName.value = input_year.value = "";
  }

  // submit form
  _submitForm(e) {
    e.preventDefault();
    //按下 + 按鈕，或是按下 enter 都可以
    const type = input_type.value;
    const projectName = input_projectName.value;
    const projectImg = this.#imgUrl;
    const year = input_year.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let project;
    //確認 input 內的值是否不是空值
    const checkValue = (...input) => input.every((e) => e != "");
    if (!checkValue(type, projectName, projectImg, year)) {
      return;
    } else {
      project = new Projects([lat, lng], type, projectName, projectImg, year);
    }
    // 新增一個新的 project 至 Projects
    this.#projects.push(project);
    // 將 marker 新增至地圖
    this._renderMarker(project);
    // 將value 取消;
    this._hideForm();
    // 將 project 呈現
    this._renderProject(project);
    console.log(this.#projects);
    this._localStorage();
  }

  //在地圖上呈現 Marker
  _renderMarker(project) {
    project.marker = L.marker(project.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          minWidth: 50,
          maxWidth: 130,
          className: "stylePopup",
        })
      )
      .setPopupContent(`${project.description}`);
    //   .openPopup();
  }

  // 旁邊列出表格視窗
  _renderProject(project) {
    let html = `
    <li class="project" data-id="${project.id}">
                        <div class="project-detial project-img">
                        </div>
                        <div class="project-detial">
                            <span class="project-title">Project name :</span>
                            <span class="project-value">${project.projectName}</span>
                        </div>
                        <div class="project-detial">
                            <span class="project-title">Project year :</span>
                            <span class="project-value">${project.year}</span>
                        </div>
                        <div class="project-detial">
                            <span class="project-title">Type :</span>
                            <span class="project-value">${project.type}</span>
                        </div>
                    </li>`;
    form.insertAdjacentHTML("afterend", html);
    //將img 呈現
    this._renderImg(project);
  }
  //讀取圖片 URL
  _readURL(event) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      this.#imgUrl = reader.result;
    });
    reader.readAsDataURL(event.target.files[0]);
  }

  //將圖片呈現於網頁
  _renderImg(project) {
    const image = document.querySelector(".project-img");
    image.style.backgroundImage = `url(${project.projectImg})`;
  }

  //移動地圖
  _moveMap(e) {
    const mapMove = e.target.closest(".project");
    if (!mapMove) return;
    const project = this.#projects.find((p) => p.id === mapMove.dataset.id);
    project.marker.openPopup(project.coords);
    this.#map.setView(project.coords, 13);
  }

  //儲存在locaol storage
  _localStorage() {
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };
    localStorage.setItem(
      "projects",
      JSON.stringify(this.#projects, getCircularReplacer())
    );
  }
  //取得本地儲存資料
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("projects"));
    if (!data) return;
    this.#projects = data;
    this.#projects.forEach((p) => this._renderProject(p));
  }

  //重設本地儲存資料
  reset() {
    localStorage.removeItem("projects");
    location.reload();
  }
}

const loadApp = new App();
