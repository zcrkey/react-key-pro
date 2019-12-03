import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const styles = {
  box: {
    width: '100%',
    height: '100%'
  },
  title: {
    marginBottom: '15px'
  },
  mapBox: {
    width: '100%',
    height: 'calc(100% - 35px)'
  }
};

export default class Openlayers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    new Map({
      target: 'map',
      // 一个图层是资源中数据的可视化显示
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "http://t{0-7}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=90039a35980ddd8a199aecea9fb1a02b",
            projection: 'EPSG:3857'
          })
        }),
        new TileLayer({
          source: new XYZ({
            url: "http://t{0-7}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=90039a35980ddd8a199aecea9fb1a02b",
            projection: 'EPSG:3857'
          })
        }),
      ],
      // 负责地图的中心点，放大，投影之类的设置
      view: new View({
        projection: 'EPSG:3857',
        center: [12989732.862640964, 2675524.1531896805],
        zoom: 12,
        maxZoom: 19,
        minZoom: 1
      })
    });
  }

  render() {
    return (
      <div style={styles.box}>
        <h4 style={styles.title}>Openlayers</h4>
        <div id="map" style={styles.mapBox}></div>
      </div>
    )
  }
}