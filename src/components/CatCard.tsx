import React from 'react';
import { Grid } from '@mui/material';
import { StyledPaper, StyledImg } from '../all.styles';
import HeartIcon from './HeartIcon';
import { ICats } from '../types';
import { useAppDispatch } from '../redux/hooks';

import { changeFavorite } from '../redux/catsSlice';

export default function CatCard({ id, url, isFavorite }: ICats) {

	const dispatch = useAppDispatch();

	const handleChangeFavorite = (id: string) => {
		dispatch(changeFavorite(id));
	}

	return (
		<Grid key={id} item xs={12} sm={6} md={4} lg={3}>
			<StyledPaper>
				<StyledImg 
					src={url}
					alt='beautiful cat'
				/>
				<HeartIcon
					id={id}
					isFavorite={isFavorite}
					changeFavorite={handleChangeFavorite} />
			</StyledPaper>
		</Grid>
	)
}