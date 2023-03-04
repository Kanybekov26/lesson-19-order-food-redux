import styledComponents from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

import BasketButton from './BasketButton'
import { getBasket } from '../../store/basket/basket.slice'
import { uiActions } from '../../store/ui/ui.slice'

function Header({ onShowBasket }) {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.basket.items)
    const themeMode = useSelector((state) => state.ui.themeMode)
    const [animationClass, setAnimatioClass] = useState('')

    useEffect(() => {
        dispatch(getBasket())
    }, [dispatch])

    const calculateTotalAmount = () => {
        const sum = items.reduce((s, item) => s + item.amount, 0)
        return sum
    }

    useEffect(() => {
        setAnimatioClass('bump')

        const id = setTimeout(() => {
            setAnimatioClass('')
        }, 300)

        return () => {
            clearTimeout(id)
        }
    }, [items])

    const themChangeHandler = () => {
        const them = themeMode === 'light' ? 'dark' : 'light'
        dispatch(uiActions.changeTheme(them))
    }
    return (
        <Container>
            <Logo>ReactMeals</Logo>
            <BasketButton
                className={animationClass}
                onClick={onShowBasket}
                count={calculateTotalAmount()}
            />
            <Button onClick={themChangeHandler} sx={{ color: 'white' }}>
                {themeMode === 'light' ? 'Turn dark mode' : 'Turn light mode'}
            </Button>
        </Container>
    )
}

export default Header

const Container = styled('header')(({ theme }) => ({
    width: '100%',
    height: '101px',
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '120px',
    paddingRight: '120px',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '1',
    top: '0',
}))

const Logo = styledComponents.p`
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;

    margin: 0;
    color: #ffffff;
`
