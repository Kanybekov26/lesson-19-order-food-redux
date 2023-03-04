import styled from 'styled-components'

import Button from '../Ui/Button'

const Basketitem = ({
    title,
    price,
    amount,
    increamentAmount,
    decrementAmount,
}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <ContentContainer>
                <PriceAndAmountContainer>
                    <Price>${price}</Price>
                    <Amount>x{amount}</Amount>
                </PriceAndAmountContainer>
                <CounterContainer>
                    <Button
                        borderStyle="sgaured"
                        variant="outlined"
                        onClick={decrementAmount}
                    >
                        -
                    </Button>
                    <Button
                        borderStyle="sgaured"
                        variant="outlined"
                        onClick={increamentAmount}
                    >
                        +
                    </Button>
                </CounterContainer>
            </ContentContainer>
        </Container>
    )
}

export default Basketitem

const Container = styled.div`
    padding: 24px 0;
    width: 100%;
`

const Title = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    /* text-align: center; */
    color: #222222;
    margin: 0 0 12px 0;
`

const Price = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #ad5502;
    margin: 0;
`

const Amount = styled.span`
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    padding: 6px 14px;
    display: block;
`

const PriceAndAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 153px;
`

const CounterContainer = styled.div`
    display: flex;
    gap: 14px;
`

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
