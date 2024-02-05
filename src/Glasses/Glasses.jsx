import React, { Component } from "react";
import Header from "./Header";
import { glassesData } from "./data";
import GlassesList from "./GlassesList";
import GlassesInfo from "./GlassesInfo";
import DressingRoom from "./DressingRoom";

export default class Glasses extends Component {
  state = {
    id: "",
    name: "",
    price: "",
    desc: "",
  };

  handleItemChange = (id) => {
    this.setState({ id: id });

    let glassesItem = glassesData.find((item) => item.id == id);
    console.log(glassesItem);

    this.setState({
      name: glassesItem.name,
      price:
        "$" +
        Intl.NumberFormat("en", { minimumFractionDigits: 2 }).format(
          glassesItem.price
        ),
      desc: glassesItem.desc,
    });
  };

  // renderGlassesList = () => {
  //   return glassesData.map((item) => {
  //     return (
  //       <div className="col-2" key={item.id}>
  //         <img
  //           src={item.url}
  //           alt=""
  //           className="item-select img-fluid"
  //           onClick={() => {
  //             this.handleItemChange(`${item.id}`);
  //           }}
  //         />
  //       </div>
  //     );
  //   });
  // };

  render() {
    let url = `./glassesImage/v${this.state.id}.png`;

    return (
      <div className="body">
        <Header />
        <div className="dressing-room row">
          <div className="model col-4">
            <DressingRoom id={this.state.id}/>
          </div>

          <div className="selection col-8">
            <div className="item-picker">
              <GlassesList glassesData={glassesData} handleItemChange={this.handleItemChange  }/>
            </div>

            <div className="item-desc">
                <GlassesInfo data={this.state}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
