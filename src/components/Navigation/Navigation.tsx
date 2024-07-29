import React from 'react';
import '../../app/globalStyles/header.css'
import SmallHeader from './SmallHeader/SmallHeader'

const Navigation = () => {
	return (
		<header className='header'>
			<SmallHeader/>
		</header>
	);
};

export default Navigation;