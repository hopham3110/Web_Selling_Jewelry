import styled from "styled-components";
import ButtonComponents from "../../components/ButtonComponents/ButtonComponents";

export const WrapperButtonMore = styled(ButtonComponents)`
    &:hover {
        background: rgba(50, 30, 30, 0.5);
        span{
            color: #fff;
        }
    }
    margin-bottom: 30px;
    
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 50px;
    flex-wrap: wrap;
`

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`