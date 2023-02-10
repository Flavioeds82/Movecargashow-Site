import styled from 'styled-components';

export const Container = styled.article`
	width: 40%;
	min-height: 20rem;
	background-color: #e5e5e5;
	border-radius: 10px;
	padding: 1rem;
	margin: 1rem;
	box-shadow: 0px 0px 5px 0px #000;

	img {
		width: 50%;
		border-radius: 15px;
		margin-left: 25%;
	}
	h3 {
		font-size: 2rem;
		margin: 1rem 0rem;
		margin-bottom: 0;
	}
	.text {
		font-size: 1.3rem;
	}
	.read-more {
		font-size: 1.1rem;
		margin-top: 1rem;
		text-align: right;
		a {
			text-decoration: none;
			color: #700308;
		}
	}
	.date {
		font-size: 0.9rem;
		text-align: left;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}
`
