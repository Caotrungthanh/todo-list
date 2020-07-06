import React, { Component } from "react";
import classNames from "classnames";
import "./TodoItem.css";
import check from "../img/check.svg";
import checkSuccess from "../img/check-success.svg";

export default class TodoItem extends Component {
  render() {
    // const item = this.props.item;
    // let className = 'TodoItem';
    // const active = item.isComplete ? className += ' TodoItem--complete' : className;

    const { item, onClick } = this.props;
    let url = check;
    if (item.isComplete) {
      url = checkSuccess;
    }

    return (
      <div
        onClick={onClick}
        className={classNames("TodoItem", {
          "TodoItem--complete": item.isComplete,
        })}
      >
        <img src={url} width="30px"></img>
        <span>{item.title}</span>
      </div>
    );
  }
}
