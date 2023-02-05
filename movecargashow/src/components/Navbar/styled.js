import styled from 'styled-components'


export const Container = styled.header`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	padding: 1rem 2rem;
	background-color: transparent;
	font-size: 1.2rem;

	.logo {
		width: 25%;
		height: 4rem;
		margin-left: 2rem;

		img {
			width: 30%;
			margin-left: 10%;
		}
		
	}
	.menu {
		display: flex;
		width: 70%;
		justify-content: space-around;
		align-items: center;

		.menu-item {
			font-weight: bold;
			text-decoration: none;
			color: #700209;
		}
		.menu-item:hover {
			color: #944444;
			transform: scale(1.1);
		}
	}
`
