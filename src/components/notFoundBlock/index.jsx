import React from 'react';

import styles from '../notFoundBlock/NotFound.module.scss';

const NotFoundBlock = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>Здесь будет грустный смайлик</span>
				<br />
				Ничего не найдено!
			</h1>
		</div>
	);
};

export default NotFoundBlock;
