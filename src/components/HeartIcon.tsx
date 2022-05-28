import React, { useEffect, useRef, useState } from 'react';
import { StyledIconButton } from '../all.styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

interface Props {
	id: string,
	isFavorite: boolean | undefined,
	changeFavorite: (id: string) => void,
}

export default function HeartIcon({ isFavorite, changeFavorite, id }: Props) {

	const [hover, setHover] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {

		const handleHover = () => { setHover(!hover) };

		ref.current?.addEventListener('mouseover', handleHover);
		ref.current?.addEventListener('mouseout', handleHover);

		return () => {
			ref.current?.removeEventListener('mouseover', handleHover);
			ref.current?.removeEventListener('mouseout', handleHover);
		}
	});
{/* <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-h0nxb2-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon"><path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg> */}
	return (
		<StyledIconButton ref={ref} onClick={() => changeFavorite(id)}>
			<IconButton sx={{ color: isFavorite ? '#FF3A00' : '#F24E1E' }}>
				{
					isFavorite ?
						<FavoriteIcon color='inherit' sx={{ fontSize: '36px' }} /> :
						hover ? 
							<FavoriteIcon color='inherit' sx={{ fontSize: '36px' }} /> :
							<FavoriteBorderIcon color='inherit' sx={{ fontSize: '36px' }} />
				}
			</IconButton>
		</StyledIconButton>
	)
}