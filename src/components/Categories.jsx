import React from 'react';

const Categories = () => {
	const [ activIndex, setActivIndex ] = React.useState(0);

	const categories = [ 'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые' ];

	const onClickCategory = (index) => {
		setActivIndex(index);
	};

	return (
		<div className="categories">
			<ul>
				{categories.map((value, index) => (
					<li onClick={() => onClickCategory(index)} className={activIndex === index ? 'active' : ''}>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
