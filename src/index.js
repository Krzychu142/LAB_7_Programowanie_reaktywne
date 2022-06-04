import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/counter";

const element = <h1>Hello World</h1>;
ReactDom.render(
    <Counter />, 
    document.getElementById("root")
);