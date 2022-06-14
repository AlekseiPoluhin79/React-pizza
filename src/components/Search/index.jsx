import React from 'react';

import style from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
	const inputRef = React.useRef();

	const onClickClear = () => {
		setSearchValue('');
		//document.querySelector('input').focus();  -так нельзя обращаться в Реакте. Вся логика должна идти через виртуальный ДОМ.
		inputRef.current.focus();
	};

	return (
		<div className={style.root}>
			<input
				ref={inputRef}
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				className={style.input}
				placeholder="Поиск пиццы..."
			/>
			{searchValue && (
				<svg
					onClick={onClickClear}
					className={style.clearIcon}
					height="48"
					viewBox="0 0 48 48"
					width="48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
					<path d="M0 0h48v48h-48z" fill="none" />
				</svg>
			)}
		</div>
	);
};

export default Search;
