import React from 'react';
import { StyledContainer } from './all.styles';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { CssBaseline } from '@mui/material';

interface Props {}

export default function Main({}: Props) {
	return (
		<>
			<CssBaseline />
			<Header />
			<StyledContainer maxWidth='lg' >
				<Outlet />
			</StyledContainer>
		</>
	)
}