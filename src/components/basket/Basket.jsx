import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Box, Modal as MuiModal } from '@mui/material'
import {
    deleteBasketItem,
    submitOrder,
    updateBasketItem,
} from '../../store/basket/basket.slice'
import Basketitem from './Basketitem'
import TotalAmount from './TotalAmount'
import { uiActions } from '../../store/ui/ui.slice'

const Basket = ({ onClose, isbasketVisible }) => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.basket.items)

    const getTotalPrice = useCallback(() => {
        return items.reduce((sum, { price, amount }) => sum + amount * price, 0)
    }, [items])

    const decrementAmount = useCallback(
        (id, amount) => {
            if (amount > 1) {
                dispatch(updateBasketItem({ amount: amount - 1, id }))
            } else {
                dispatch(deleteBasketItem(id))
            }
        }
        // [updateBasketItem, deleteBasketItem]
    )

    const increamentAmount = useCallback(
        (id, amount) => {
            dispatch(updateBasketItem({ amount: amount + 1, id }))
        }
        // [updateBasketItem]
    )

    const orderSubmitHandler = async () => {
        try {
            await dispatch(
                submitOrder({
                    orderData: { items },
                })
            ).unwrap()
            dispatch(
                uiActions.showSnackBar({
                    severity: 'success',
                    massage: 'Order completed successfully',
                })
            )
        } catch (error) {
            dispatch(
                uiActions.showSnackBar({
                    severity: 'error',
                    massage: 'failed ,Try again later',
                })
            )
        } finally {
            onClose()
        }
    }
    return (
        <MuiModal open={isbasketVisible} onClose={onClose}>
            {/* <Box> */}
            <Div>
                <Content>
                    {items.length ? (
                        <FixedHeightContainer>
                            {items.map((item) => {
                                return (
                                    <Basketitem
                                        // eslint-disable-next-line no-underscore-dangle
                                        key={item._id}
                                        increamentAmount={() =>
                                            increamentAmount(
                                                // eslint-disable-next-line no-underscore-dangle
                                                item._id,
                                                item.amount
                                            )
                                        }
                                        decrementAmount={() =>
                                            decrementAmount(
                                                // eslint-disable-next-line no-underscore-dangle
                                                item._id,
                                                item.amount
                                            )
                                        }
                                        title={item.title}
                                        price={item.price}
                                        amount={item.amount}
                                    />
                                )
                            })}
                        </FixedHeightContainer>
                    ) : null}

                    <TotalAmount
                        price={getTotalPrice()}
                        onClose={onClose}
                        onOrder={orderSubmitHandler}
                    />
                </Content>
            </Div>

            {/* </Box> */}
        </MuiModal>
    )
}

export default Basket

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1rem 1.5rem 1rem;
`

const FixedHeightContainer = styled.div`
    max-height: 228px;
    overflow-y: scroll;
`

const Div = styled(Box)`
    position: fixed;
    top: 20vh;
    left: 5%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out;
    width: 40rem;
    left: calc(50% - 20rem);
`
