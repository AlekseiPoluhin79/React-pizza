import React from 'react';

import style from './Search.module.scss';

const Search = () => {
	return (
		<div className={style.root}>
			<input className={style.input} placeholder="Поиск пиццы..." />
		</div>
	);
};

export default Search;
