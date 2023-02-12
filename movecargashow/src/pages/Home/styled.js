import styled from 'styled-components'

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 90vh;
	align-items: center;
	justify-content: center;
	.top {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		color: #700209;
		p {
			text-align: left;
			padding: 1rem;
			font-size: 1rem;
		}
	}

	.top-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50vw;
		margin: 1rem;

		.left {
			width: 20%;
			height: 100%;
		}
		.center {
			width: 60%;
			height: 100%;
		}
		.right {
			width: 20%;
			height: 100%;
		}
	}

	.main {
		display: flex;
		flex-direction: column;
		width: 100%;
		/* margin-top: 90vh; */
		background-color: rgba(0, 0, 0, 0.8);
		justify-content: center;
		align-items: center;
		overflow-x: hidden;
		h2 {
			color: #fff;
			margin: 2rem 0rem;
			font-size: 2rem;
		}
	}
	.ads {
		display: flex;
		width: 100%;
		background-color: rgba(255, 255, 255, 0.8);
		justify-content: center;
		align-items: center;
	}
`
