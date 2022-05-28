import React, { useEffect, useState } from 'react'
import CatCard from '../components/CatCard';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getCats } from '../redux/catsSlice';
import { Grid, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {}

export default function AllCats({}: Props) {

	const { cats, loading, error } = useAppSelector((state) => state.cats);
	const dispatch = useAppDispatch();
	const [more, setMore] = useState<boolean>(true);

	const fetchMoreCats = () => { dispatch(getCats()) }
	useEffect(() => {
		if (cats.length > 1000 ) {
			setMore(false);
		}
		else {
			dispatch(getCats());
		}
	}, []);

	if (error) {
		return <Error />
	}
	if (loading && !cats.length) {
		return <Loader />
	}

	return (
		<InfiniteScroll
			dataLength={cats.length}
			next={fetchMoreCats}
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			hasMore={more}
			loader={<Typography variant='body2' textAlign='center'>... загружаем еще котиков ...</Typography>}
		>
			<Grid container spacing={4}>
				{
					cats.map((i, idx) => (
						<CatCard {...i} key={idx}/>
					))
				}
			</Grid>
		</InfiniteScroll>
	)
}