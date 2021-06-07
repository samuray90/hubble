import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled.div`
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	bottom: 1rem;
	width: 100%;
`;

export const Title = styled.h1`
	justify-content: center;
	bottom: 1rem;
	width: 100%;
	font-size: 14px;
`;

export const Wrapper = styled.div`
	background-color: #fff;
	border-radius: 32px;
	padding: 1rem 2rem;
	box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.25),
		inset -5px -5px 5px rgba(0, 0, 0, 0.25), 5px 5px 5px rgba(0, 0, 0, 0.25);
`;

export const SmartStyledForm = styled(Form)`
	display: grid;
	grid-gap: 16px;
	grid-auto-flow: row;
`;
