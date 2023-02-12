import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 99;
	justify-content: center;
	align-items: center;

	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 80%;
		height: auto;
		background-color: #f0f0f0;
		transform: translate(-50%, -50%);
		text-align: center;
		padding-top: 2rem;
		font-size: 1.5rem;
      font-weight: bold;
		border-radius: 10px;

		.close-bt {
			position: fixed;
			top: 10px;
			right: 10px;
         cursor: pointer;
		}
      .close-bt:hover{
         transform: scale(1.1);
      }
	}
`
