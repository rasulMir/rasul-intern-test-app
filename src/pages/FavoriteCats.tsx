import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import CatCard from '../components/CatCard';
import { useAppSelector } from '../redux/hooks';
import Grid from '@mui/material/Grid';
import { StyledBox } from '../all.styles';

interface Props {}

export default function FavoriteCats({}: Props) {
	const { cats } = useAppSelector((state) => state.cats);
	const favoriteCats = useMemo(() => cats.filter(i => i.isFavorite ), [cats]);
	
	if (!favoriteCats.length) {
		return (
			<StyledBox>
				<Typography variant='body1' textAlign='center'>Пусто! Вы еще не добавили любимчиков!</Typography>
			</StyledBox>
		)
	}
	return (
		<Grid container spacing={4}>
			{
				favoriteCats.map((i, idx) => (
					<CatCard {...i} key={idx}/>
				))
			}
		</Grid>
	)
}