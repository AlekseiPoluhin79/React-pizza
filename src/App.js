import React from 'react';

import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

import pizzas from '../src/components/assets/pazzas.json';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{pizzas.map((obj) => (
							//можно использовать вместо перечисления свойст объекта spread-оператор  т.е. PizzaBlock(...obj)
							<PizzaBlock
								title={obj.title}
								price={obj.price}
								image={obj.imageUrl}
								sizes={obj.sizes}
								types={obj.types}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
