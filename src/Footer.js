import React from 'react';

const Footer = ({ items }) => {
	return (
		<footer>
			<p>
				{items.length} List {items.length > 1 ? 'Items' : 'Item'}
			</p>
		</footer>
	);
};

export default Footer;
