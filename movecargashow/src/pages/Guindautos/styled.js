import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	main {
		h1 {
			margin: auto;
			margin-top: 5rem;
			margin-bottom: 5rem;
			font-size: 2rem;
			width: 60%;
			color: #700308;
			box-shadow: 0px 0px 5px 0px #041549;
			border-radius: 10px;
			background-color: #fff;
			padding: 2rem;
			text-align: center;
		}

		.loading {
			position: absolute;
			top: 30%;
			left: 50%;
			width: 3rem;
			height: 3rem;
			border: 5px solid #700308;
			border-bottom-color: #fff;
			margin-bottom: 3rem;
			border-radius: 50%;
			animation: spinner 1.5s linear infinite;

			@keyframes spinner {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		}
		.items {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(5rem, 11rem));
			justify-content: center;
			align-items: center;
			gap: 1rem;
			margin-bottom: 3rem;
			width: 60vw;
			word-wrap: break-word;

			.item {
				display: flex;
				flex-direction: column;
				text-align: center;

				box-shadow: 0px 0px 5px 0px #041549;
				border-radius: 10px;
				justify-content: center;
				align-items: center;
				width: 11rem;
				height: 11rem;
				padding: 2rem;
				background-color: #fff;
				word-wrap: break-word;
				cursor: pointer;
				img {
					width: 5rem;
					margin-bottom: 1rem;
				}
				h3 {
					font-size: 15px;
					margin: 1rem;
				}
			}
			.item:hover {
				transform: scale(0.95);
				border: 1px solid #041549;
			}
		}
		.container-modal {
			padding: 0.5rem;

			img {
				width: 8rem;
				margin-bottom: 1rem;
			}
			.modal-item {
				width: 100%;
				height: 25rem;
				overflow: auto;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(5rem, 15rem));
				justify-content: center;
				align-items: center;
				gap: 1rem;

				a {
					text-decoration: none;
					color: #222;
					font-size: 18px;
					font-weight: bold;
					border: 1px solid #555;
					border-radius: 5px;
					padding: 5px;
					margin-bottom: 0.5rem;
					margin-top: 0.5rem;
					word-wrap: break-word;
				}
				a:hover {
					transform: scale(1.05);
					border-width: 2px;
					border-color: #000;
				}
			}
		}
	}
`
