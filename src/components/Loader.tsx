import React from 'react';
import { CircularProgress } from '@mui/material';
import { StyledBox } from '../all.styles';

interface Props {}

export default function Loader({ }: Props) {
	return (
		<StyledBox>
			<CircularProgress />
		</StyledBox>
	)
}