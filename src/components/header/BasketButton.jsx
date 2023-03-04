import { styled } from '@mui/material/styles'
import React from 'react'
import styledComponents from 'styled-components'
import { Button } from '@mui/material'
import { ReactComponent as BasketIcon } from '../../assets/icons/BasketIcon.svg'

const BasketButton = ({ count, ...restProps }) => (
    <StyledButton {...restProps}>
        <BasketIcon />
        <StyledSpan> Your cart</StyledSpan>
        <StyledCounter id="counter">{count || 0}</StyledCounter>
    </StyledButton>
)

export default BasketButton

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '20px',
    padding: '12px 32px',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#ffffff',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.primary.main,
    cursor: 'pointer',

    '&:hover': {
        background: theme.palette.primary.light,
    },
    '&:hover > #counter': {
        background: theme.palette.primary.light,
    },

    '&.bump': {
        animation: 'bump 300ms ease-out',
    },

    '@keyframes bump': {
        ' 0% ': {
            transform: 'scale(1)',
        },
        '10%': {
            transform: 'scale(0.9)',
        },
        '30%': {
            transform: 'scale(1.1)',
        },
        '50%': {
            transform: 'scale(1.15)',
        },
        '100%': {
            transform: 'scale(1)',
        },
    },
}))

const StyledSpan = styledComponents.span`
  margin-left: 12px;
  margin-right: 24px;
`

const StyledCounter = styledComponents.span`
  background: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #ffffff;
  padding: 4px 20px;
`
