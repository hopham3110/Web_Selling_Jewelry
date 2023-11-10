import React from 'react'
import ProductDetailComponents from '../../components/ProductDetailComponents/ProductDetailComponents'
import SlideComponent from '../../components/SlideComponent/SlideComponent'
import  slide1  from '../../assets/images/slide1.png'
import  slide2  from '../../assets/images/slide2.png'
import  slide3  from '../../assets/images/slide3.png'
import  slide4  from '../../assets/images/slide4.png'
import  slide5  from '../../assets/images/slide5.png'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <div style={{ padding: '30px 230px'}}>
        <SlideComponent arrImages={[slide1, slide2, slide3, slide4, slide5]}/>  
        
      </div>
      <div style={{ padding: '30px 230px', fontFamily: 'Poppins-sans-serif'}}>
      <h3><span style={{cursor: 'pointer', fontWeight: 'bold'}} onClick={() => {navigate('/')}}>Trang chủ</span> - Chi tiết sản phẩm</h3>
        <ProductDetailComponents idProduct={id}/>
      
      </div>
    </div>
  )
}

export default ProductDetailPage