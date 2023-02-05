import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	background-color: #fff;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;

	h4{
		font-size: 20px;
		text-align: center;
	}

	img{
		height: 100vh;
	}
	.icon{
		position: absolute;
		top: 5rem;
		right: 2rem;
	}
`