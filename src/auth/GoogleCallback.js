import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GoogleCallback = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const id_token = searchParams.get('id_token');
	const access_token = searchParams.get('access_token');
	const getStrapiAuth = async (url, params) => {
		const response = await axios.get(url, { params });
		if (response.status === 200) {
			console.log(response.data.jwt)
			console.log(response.data.user)
			localStorage.setItem('accessToken', response.data.jwt)
			localStorage.setItem('tempId', response.data.user.email)
			response.data.user.displayName = response.data.user.username
			localStorage.setItem('user', JSON.stringify(response.data.user))
			navigate('/dashboard', { replace: true} );
		} else {
			console.log('에러입니다.');
		} return <></>
	}
	const url = `${process.env.REACT_APP_STRAPI_URL}/api/auth/google/callback`
	const params = {
		id_token: id_token,
		access_token: access_token
	};
	getStrapiAuth(url, params);
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: 50,
				position: 'absolute',
				width: '100%',
				height: '100%',
			}}
		>
			구글로그인중
		</div>
	);
};
export default GoogleCallback;