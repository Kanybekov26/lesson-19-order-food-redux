import React, { memo } from 'react'
import styledComponents from 'styled-components'
import { styled } from '@mui/material/styles'

const SumaryCard = () => {
    return (
        <Card>
            <StyledTitle>Delicious Food, Delivered To You</StyledTitle>
            <p>
                Choose your favorite meal from our broad selection of available
                meals and enjoy adelicious lunch ordinner athome.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients,
                just-in-time and of course by experienced chefs!
            </p>
        </Card>
    )
}

export default memo(SumaryCard)

const Card = styled('div')(({ theme }) => ({
    maxWidth: '53.375rem',
    padding: '36px 54px',
    background: theme.palette.primary.dark,
    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.3)',
    borderRadius: '16px',
    position: 'relative',
    margin: '-12rem auto',
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
}))

const StyledTitle = styledComponents.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
`
