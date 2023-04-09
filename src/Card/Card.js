import React from 'react';
import { useEffect, useState } from 'react';
import style from './Card.module.css';
import dice from './icon-dice.svg';
import spacing from './pattern-divider-desktop.svg';

const Card = () => {
	const [advice, setAdvice] = useState({ id: 0, advice: '' });
	const [search, setSearch] = useState(false);
	useEffect(() => {
		const url = 'https://api.adviceslip.com/advice';
		fetch(url)
			.then((data) => data.json())
			.then((data) => {
				setAdvice(data.slip);
			});
	}, [search]);

	return (
		<div className={style.card}>
			<p>Advice #{advice.id}</p>
			<div className={style.quote}>"{advice.advice}"</div>
			<div className={style.spacing}>
				<img src={spacing} alt="Spacing" />
			</div>
			<button
				className={style.button}
				onClick={() => {
					setSearch((oldstate) => !oldstate);
				}}
			>
				<img src={dice} alt="Dice" />
			</button>
		</div>
	);
};
export default Card;
