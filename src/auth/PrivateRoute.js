import { Navigate } from 'react-router-dom';
import React from 'react';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
	const auth = localStorage.getItem('user');
	return auth ? (
		children
	) : (
		<div>
			<Navigate to={'/login'} />
		</div>
	);
};

export default PrivateRoute;
