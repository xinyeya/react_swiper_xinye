import React, {Component} from 'react';
import './assets/css/App.css';
import Swiper from "./componets/swiper"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [
        {image: require("./assets/images/banner1.jpg"), url: "https://www.52pojie.cn/portal.php"},
        {image: require("./assets/images/banner2.jpg"), url: "https://www.xd0.com/"},
        {image: require("./assets/images/banner3.jpg"), url: "http://pic.netbian.com/"}
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Swiper data={this.state.data}></Swiper>
      </div>
    )
  }
}


