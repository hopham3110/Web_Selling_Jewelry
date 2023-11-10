import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style';
import { StarFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const CardComponents = (props) => {
  const {countInStock, description, image, name, price, rating, type, selled, id} = props
  const navigate = useNavigate()
  const handleDetailsProduct = (id) => {
    navigate(`/product-detail/${id}`)
}
  return (
    <WrapperCardStyle
        hoverable
        headStyle={{ }}
        style={{ width: '200px' }}
        bodyStyle={{ padding: '10px', fontFamily: 'Poppins-sans-serif' }}
        cover={<img alt="example" src={image} />}
        onClick={() =>  handleDetailsProduct(id)}
    >
        <StyleNameProduct>{name}</StyleNameProduct>
        <WrapperPriceText>{price?.toLocaleString}</WrapperPriceText>
        <WrapperReporText>
            <span>
                <span>{rating}</span><StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)'}} />
            </span>
            <WrapperStyleTextSell> | {selled || 1000}+ Đã bán</WrapperStyleTextSell>
        </WrapperReporText>

    </WrapperCardStyle>
  )
}

export default CardComponents