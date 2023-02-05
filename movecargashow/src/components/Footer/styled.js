import styled from 'styled-components';

export const Container = styled.footer`
	display: flex;
	width: 100%;
	height: 20%;
	padding: 2rem;
	background-color: #273339;
	color: #fff;
	align-items: center;
	justify-content: space-between;

	.footer-left {
		.menu {
			display: flex;
			flex-direction: column;

			.menu-item {
				color: #fff;
				text-decoration: none;
				padding: 0.5rem 0;
			}
			.menu-item:hover {
				transform: scale(1.05);
			}
		}
	}
	.footer-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		figure {
			display: flex;

			a {
				color: #fff;
				margin: 0 1rem;
			}
			a:hover {
				transform: scale(1.1);
			}
		}
	}
	.footer-right {
		display: flex;
		justify-content: center;
		align-items: center;

		figure {
			img {
				width: 8rem;
			}
			img:hover {
				transform: scale(1.1);
			}
		}
	}
`
