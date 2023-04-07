import React from 'react'

type ShoppingItemProps = { itemName: string; };

const ShoppingItem: React.FC<ShoppingItemProps> = props => {
    return (
        <li>{props.itemName}</li>
    )
}

type ShoppingListProps = { listItems: string[]; listName: string; };

const ShoppingList: React.FC<ShoppingListProps> = props => {
    return (
        <div>
            <h1>{props.listName}</h1>
            <ul>
                {props.listItems.map((item: string)=> (<ShoppingItem itemName={item}/>))}
            </ul>
        </div>
    )
}

console.log(<ShoppingList listName="My List" listItems={["beans", "rice", "hotsauce"]}/>)