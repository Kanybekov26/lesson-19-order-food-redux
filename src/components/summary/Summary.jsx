import React from 'react'
import styled from 'styled-components'
import BackgroundImg from '../../assets/imges/samary-backg.jpg'
import SumaryCard from './SumaryCard'

const Summary = () => {
    return (
        <Container>
            <StyledImg src={BackgroundImg} />
            <SumaryCard />
        </Container>
    )
}

export default Summary

const Container = styled.div`
    height: 527px;
`

const StyledImg = styled.img`
    width: 100%;
    height: 432px;
`
