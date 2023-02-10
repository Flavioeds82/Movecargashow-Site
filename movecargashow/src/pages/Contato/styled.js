import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	width: 100%;
	min-height: 100vh;
	justify-content: center;
	align-items: center;

	.container-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;
		min-height: 70vh;
		background-color: #fff;
		border-radius: 1rem;
		color: #c9c9c9;

		h2 {
			color: #700308;
			font-size: 2.5rem;
			margin-top: 1rem;
			margin-bottom: 1rem;
		}

		form {
			display: flex;
			flex-direction: column;
			width: 90%;

			input {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 3rem;
				margin: 0.5rem 0;
				border: none;
				background-color: #eee;
				border-radius: 10px;
				padding: 5px;
				font-size: 18px;
			}
			textarea {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 8rem;
				margin: 0.5rem 0;
				border: none;
				background-color: #eee;
				border-radius: 10px;
				padding: 5px;
				font-size: 20px;
			}
			.file {
				background-color: #fff;
				margin-bottom: 0;
			}
			p{
				margin-top: -10px;
margin-bottom: 2rem;
			}
			button {
				width: 60%;
				padding: 1rem;
				border-radius: 10px;
				border: none;
				background-color: #041549;
				margin: auto;
				margin-bottom: 2rem;
				color: #fff;
				font-size: 20px;
				font-weight: bold;
			}
		}
	}
`
