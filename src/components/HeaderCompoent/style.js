import { Row } from 'antd';
import { styled } from 'styled-components';

export const WrapperImgStyle = styled.img`
    width: 162px;
    height: auto;
`

export const WrapperHeader = styled(Row)`
    padding: 20px 230px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.3);
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
`
export const WrapperHeaderSmall = styled.span`
    font-size: 18px;
    color: black;
`
export const WrappertypeHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: flex-end;
    font-size: 18px;
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`
