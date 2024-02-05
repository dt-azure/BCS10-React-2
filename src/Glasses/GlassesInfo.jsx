import React, { Component } from "react";

export default class GlassesInfo extends Component {
  render() {
    let { id, name, price , desc } = this.props.data;
    let url = `./glassesImage/v${id}.png`;
    
    return (
      <div className="row align-items-center">
        <div className="col-3">
          <img src={url} alt="" className="img-fluid" />
        </div>

        <div className="item-info col-9 text-left">
          <h3 className="item-name">{name}</h3>
          <h5 className="item-price">{price}</h5>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}
