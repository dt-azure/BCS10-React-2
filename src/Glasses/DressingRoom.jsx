import React, { Component } from "react";

export default class DressingRoom extends Component {
  render() {
    let url = `./glassesImage/v${this.props.id}.png`;

    return (
      <div>
        <img
          src="./glassesImage/model.jpg"
          alt=""
          className="model-img img-fluid"
        />
        <img
          src={url}
          alt=""
          className="item-img img-fluid"
          key={this.props.id}
        />
      </div>
    );
  }
}
