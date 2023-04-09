import React, { Component } from 'react';
import Card from './Card/Card';
import style from './App.module.css';

class App extends Component {
	render() {
		return (
			<div className={style.wrapper}>
				<Card />
			</div>
		);
	}
}

export default App;
