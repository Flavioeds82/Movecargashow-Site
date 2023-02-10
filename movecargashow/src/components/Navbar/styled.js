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
			width: 4rem;
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

	.hamburguer {
		display: none;

		.menu-icon {
			text-align: right;
		}
		.menu-mobile {
			display: flex;
			flex-direction: column;
			/* text-align: center; */
			background-color: rgba(255,255,255,0.9);
			padding: 2rem 1rem;
			border-radius: 5px;

			.menu-item {
				font-weight: bold;
				text-decoration: none;
				color: #700209;
				margin-bottom: 1rem;
			}
		}
		.menu-item:hover {
			color: #944444;
			transform: scale(1.1);
		}
	}

	@media (max-width: 900px) {
		.logo {
			position: absolute;
			top: 5px;
			left: 0px;
		}
		.menu {
			display: none;
		}
		.hamburguer {
			display: block;
			position: absolute;
			top: 10px;
			right: 50px;
		}
	}
`
