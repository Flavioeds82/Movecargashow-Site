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
			margin-top: 5rem;
			margin-bottom: 5rem;
			font-size: 2rem;
			width: 100%;
			color: #700308;
			box-shadow: 0px 0px 5px 0px #041549;
			border-radius: 10px;
			background-color: #fff;
			padding: 2rem;
			text-align: center;
		}

		.loading {
			width: 3rem;
			height: 3rem;
			border: 5px solid #041549;
			margin-bottom: 3rem;
			border-radius: 50%;
			animation: spinner 1.5s linear infinite;

			@keyframes spinner {
				0% {
					transform: rotate(0deg);
					border-bottom-color: #11f411;
				}
				100% {
					transform: rotate(360deg);
					border-bottom-color: #11f4f4;
				}
			}
		}
		.items {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			justify-content: center;
			align-items: center;
			gap: 1rem;
			margin-bottom: 3rem;

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
				padding: 1rem;
				background-color: #fff;
				cursor: pointer;
				img {
					width: 5rem;
				}
			}
			.item:hover {
				transform: scale(0.95);
				border: 1px solid #041549;
			}
		}
	}
`
