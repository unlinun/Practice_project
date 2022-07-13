"use strict";

// 設定 APP class

class App {
  //新增區域變量
  #map;
  constructor() {
    this._getCurrentLocation();
  }
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
  _loadMap(position) {
    //利用現在正確位置取得精度及緯度
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    // 導入 leaflet API，並傳入經緯度
    this.#map = L.map("map").setView(coords, 13);

    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(this.#map);

    L.marker(coords)
      .addTo(this.#map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  }
}

const loadApp = new App();
