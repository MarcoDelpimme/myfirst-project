import { Component } from "react";

class ClassComponent extends Component {
  render() {
    const { src, alt } = this.props;

    return <img src={src} alt={alt} />;
  }
}

export default ClassComponent;
