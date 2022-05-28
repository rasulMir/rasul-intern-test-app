import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLinks, StyledHeaderContainer, StyledButton, StyledAppBar } from '../all.styles';

interface Props {}

export default function Header({}: Props) {

	let { pathname } = useLocation();

	return (
		<div>
			<StyledAppBar position='static'>
				<StyledHeaderContainer maxWidth='xl'>
					<StyledButton sx={{ backgroundColor: pathname === '/' ? '#1E88E5' : '' }}>
						<StyledLinks to='/'>Все Котики</StyledLinks>
					</StyledButton>
					<StyledButton sx={{ backgroundColor: pathname === '/favorite' ? '#1E88E5' : '' }}>
						<StyledLinks to='favorite'>Любимые Котики</StyledLinks>
					</StyledButton>
				</StyledHeaderContainer>
			</StyledAppBar>
		</div>
	)
}