"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ShoppingItem = function (props) {
    return (<li>{props.itemName}</li>);
};
var ShoppingList = function (props) {
    return (<div>
            <h1>{props.listName}</h1>
            <ul>
                {props.listItems.map(function (item) { return (<ShoppingItem itemName={item}/>); })}
            </ul>
        </div>);
};
console.log(<ShoppingList listName="My List" listItems={["beans", "rice", "hotsauce"]}/>);
