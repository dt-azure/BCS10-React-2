import React, { Component } from "react";
import Header from "./Header";
import { glassesData } from "./data";

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

  renderGlassesList = () => {
    return glassesData.map((item) => {
      return (
        <div className="col-2" key={item.id}>
          <img
            src={item.url}
            alt=""
            className="item-select img-fluid"
            onClick={() => {
              this.handleItemChange(`${item.id}`);
            }}
          />
        </div>
      );
    });
  };

  render() {
    let url = `./glassesImage/v${this.state.id}.png`;

    return (
      <div className="body">
        <Header />
        <div className="dressing-room row">
          <div className="model col-4">
            <img
              src="./glassesImage/model.jpg"
              alt=""
              className="model-img img-fluid"
            />
            <img src={url} alt="" className="item-img img-fluid" key={this.state.id}/>
          </div>

          <div className="selection col-8">
            <div className="item-picker row align-items-center">
              {this.renderGlassesList()}
            </div>

            <div className="item-desc row align-items-center">
              <div className="col-3">
                <img src={url} alt="" className="img-fluid" />
              </div>

              <div className="item-info col-9 text-left">
                <h3 className="item-name">{this.state.name}</h3>
                <h5 className="item-price">{this.state.price}</h5>
                <p>{this.state.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
