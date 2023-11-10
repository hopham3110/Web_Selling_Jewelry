import { Col, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleNameproduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;
`

export const WrapperStyleCol = styled(Col)`
    padding: 0 0 0 30px;
    margin-top: -20px;
`

export const WrapperStyleTextSell = styled.span`
    color: rgb(120, 120, 120);
    font-size: 15px;
    line-height: 24px;
`
export const WrapperStylePriceproduct = styled.div`
    background: rgba(242, 242, 240, 1);
    border-radius: 4px;
    padding-left: 20px;
`

export const WrapperStyleTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;
    color: rgba(210, 19, 18, 1);
`
export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    };
    span.change-address {
        color: rgb(10, 104, 255);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
`

export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 10px;
`



export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width: 50px;
        border-top: none;
        border-bottom: none;
    }
    .ant-input-number-handler-wrap {
        display: none !important;
    }
`
