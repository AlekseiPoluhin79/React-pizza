import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';

const Home = () => {
	const [ items, setItems ] = React.useState([]);

	React.useEffect(() => {
		fetch('https://6293392a089f87a57abc2c6c.mockapi.io/items').then((res) => res.json()).then((arr) => {
			setItems(arr);
		});
	}, []);

	return (
		<React.Fragment>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{items.map((obj) => (
					//можно использовать вместо перечисления свойст объекта spread-оператор  т.е. PizzaBlock(...obj)
					// из минусов такого метода, можно передать большое кол-во ненужных реквизитоа
					<PizzaBlock
						key={obj.id}
						title={obj.title}
						price={obj.price}
						image={obj.imageUrl}
						sizes={obj.sizes}
						types={obj.types}
					/>
				))}
			</div>
		</React.Fragment>
	);
};
export default Home;
