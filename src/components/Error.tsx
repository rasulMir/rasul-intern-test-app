import { Typography } from '@mui/material'
import React from 'react'
import { StyledBox } from '../all.styles'

interface Props {}

export default function Error({}: Props) {
	return (
		<StyledBox>
			<Typography
				variant='body2'
			>
				Упс... Что-то Пошло Не Так! Пожалуйста Перезагрузите Страницу!
			</Typography>
		</StyledBox>
	)
}