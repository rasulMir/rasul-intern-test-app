import styled from '@emotion/styled';
import { Button, Container, AppBar, Card } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledContainer = styled(Container)`
	padding-top: 30px;
	padding-bottom: 30px;
`;

export const StyledAppBar = styled(AppBar)`

	background-color: #2196F3;
`;

export const StyledHeaderContainer = styled(Container)`
	display: flex;
	align-items: center;
`;

export const StyledLinks = styled(Link)`
	padding: 23px;
	font-size: 14px;
	line-height: 21px;
	color: #fff;
	text-decoration: none;
	text-transform: capitalize;
`;

export const StyledButton = styled(Button)`
	transition: all .3s easy-in;
	border-radius: none;
	padding: 0;
	&:hover {
		background-color: #1E88E5;
	}
`;

export const StyledPaper = styled(Card)`
	position: relative;
	padding: 15px;
	border-radius: none;
	box-shadow: none;
	transition: all .4s linear;
	&:hover {
		background: #FFFFFF;
		box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
	}

	&:hover > div {
		opacity: 1;
	}
`;

export const StyledImg = styled('img')`
	display: block;
	background-size: cover;
	background-repeat: no-repeat;
	-webkit-background-position: center;
	background-position: center;
	object-fit: cover;
	width:100%;
	height: 226px;
`;

export const StyledIconButton = styled('div')`
	transition: all .3s linear;
	position: absolute;
	bottom: 28px;
	right: 21px;
	opacity: 0;
`;

export const StyledBox = styled(Box)`
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 75vh;
`;