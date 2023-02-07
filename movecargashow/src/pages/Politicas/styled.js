import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: #e5e5e5;
	justify-content: center;
	align-items: center;
	padding: 5% 15%;

	h2 {
		font-size: 2rem;
		margin: 1rem;
	}
	p {
		font-size: 1.2rem;
		span {
			font-size: 1.2rem;
			a {
				text-decoration: none;
				color: #700308;
			}
		}
	}
	ul {
		li {
			text-decoration: none;
			list-style: none;
		}
	}
	h3 {
		font-size: 1.5rem;
		margin: 1rem;
	}
`
