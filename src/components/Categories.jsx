import React from 'react';

const Categories = (categoryId, onChangeCategory) => {
	const [ activIndex, setActivIndex ] = React.useState(0);

	const categories = [ 'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые' ];

	const onClickCategory = (i) => {
		setActivIndex(i);
	};

	return (
		<div className="categories">
			<ul>
				{categories.map((categoryName, i) => (
					<li key={i} onClick={() => onChangeCategory(i)} className={categoryId === i ? 'active' : ''}>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
