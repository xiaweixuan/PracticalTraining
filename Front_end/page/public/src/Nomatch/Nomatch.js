import React, { Component } from "react";
import store from "../store";
export default class Nomatch extends Component {
    constructor() {
		super();
		var red = store.getState();
		console.log(red.todo);
	}
	
	render() {
		return (
			<div>
				<h1>404</h1>
			</div>
		);
	}
}