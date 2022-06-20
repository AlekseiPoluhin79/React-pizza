import React from 'react';

const Categories = (value, onChangeCategory) => {
	const [ activIndex, setActivIndex ] = React.useState(0);

	const categories = [ 'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые' ];

	const onClickCategory = (i) => {
		setActivIndex(i);
	};

	return (
		<div className="categories">
			<ul>
				{categories.map((categoryName, i) => (
					<li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
