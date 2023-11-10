import styled from "styled-components";
import { Card } from "antd"

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        height: 200px;
        width: 200px;
    }
`

export const StyleNameProduct = styled.div`
    font-weight: 400px;
    font-size: 15px;
    line-height: 16px;
    color: rgb(56, 56, 61);
    font-weight: 400;
`

export const WrapperReporText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 8px 0 4px;
`

export const WrapperPriceText = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 66, 78);
`

export const WrapperStyleTextSell = styled.span`
    color: rgb(120, 120, 120);
    font-size: 15px;
    line-height: 24px;
`