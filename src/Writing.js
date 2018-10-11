import React, { Component } from "react";
import WritingStyle from "./WritingStyle.css";
class Writing extends Component {
  render() {
    return (
      <div>
        <section className="frame">
          <article className="headItem">{this.props.blogName}</article>
          <article>Blogger name: {this.props.name}</article>

          <article>Type: {this.props.type}</article>
          <article>Time posted: {this.props.time}</article>

          <article>{this.props.mainWriting}</article>
        </section>

      </div>
    );
  }
}

export default Writing;
