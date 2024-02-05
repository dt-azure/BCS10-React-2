import React, { Component } from "react";

export default class GlassesList extends Component {
  renderGlassesList = () => {
    return this.props.glassesData.map((item) => {
      return (
        <div className="col-2" key={item.id}>
          <img
            src={item.url}
            alt=""
            className="item-select img-fluid"
            onClick={() => {
              this.props.handleItemChange(`${item.id}`);
            }}
          />
        </div>
      );
    });
  };

  render() {
    return <div className="row align-items-center h-100">{this.renderGlassesList()}</div>;
  }
}
