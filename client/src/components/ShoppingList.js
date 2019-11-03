import React, {Component} from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import uuid from "uuid";


class ShoppingList extent Component{
	state = {
		items : [
		 {id : uuid(), name : "Eggs"},
		 {id : uuid(), name : "Milk"},
		 {id : uuid(), name : "Water"}
		]
	}
	
	render() {
		return(
		const {items} = this.state;
		<Container>
		<Button
			color = "dark"
			style = {marginBottom:"2rem"}
			onClick = {() => {
				const name = prompt("Enter Item");
				if (name) {
					this.setState(state => {
						items : [...state.items, {id : uuid(), name}
					} );
				}
			}}
		>Add Item </Button>
		
		<ListGroup>
		<TransitionGroup classNmae="shopping-list">
		{items.map(({id, name}) => {
			<CSSTransition key={id} timeout{500} classNames="fade">
			<ListGroupItem>
			{name}
			</ListGroupItem>
			</CSSTransition>
		})}
		</TransitionGroup>
		</ListGroup>
		</Container>
		);
	}
}

export default ShoppingList;
