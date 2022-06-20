import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setcategoryId } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from '../components/Pagination';

const Home = () => {
	const dispatch = useDispatch();
	const categoryId = useSelector((state) => state.filter.categoryId);
	const [ sortType, setSortType ] = React.useState({
		name: 'популярности',
		sortProperty: 'rating'
	});
	const [ items, setItems ] = React.useState([]);
	const [ carrentPage, setCarrentPage ] = React.useState(1);

	const onChangeCategory = (id) => {
		dispatch(setcategoryId(id));
	};

	React.useEffect(
		() => {
			//	fetch(`https://6293392a089f87a57abc2c6c.mockapi.io/items?page=${carrentPage}&limit=4&`)
			//		.then((res) => res.json())
			//		.then((arr) => {
			//			setItems(arr);
			//		});
			axios.get(`https://6293392a089f87a57abc2c6c.mockapi.io/items?page=${carrentPage}&limit=4&`).then((res) => {
				setItems(res.data);
			});

			window.scrollTo(0, 0);
		},
		[ carrentPage ]
	);

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
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
			<Pagination onChangePage={(namber) => setCarrentPage(namber)} />
		</div>
	);
};
export default Home;
