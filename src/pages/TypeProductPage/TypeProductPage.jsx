import React, { Fragment } from 'react'
import NavBarComponent from '../../components/NavBarComponents/NavBarComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'
import { useLocation } from 'react-router-dom'
import * as ProductService from '../../services/ProductService'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import CardComponents from '../../components/CardComponents/CardComponents'
import SlideComponent from '../../components/SlideComponent/SlideComponent'
import  slide1  from '../../assets/images/slide1.png'
import  slide2  from '../../assets/images/slide2.png'
import  slide3  from '../../assets/images/slide3.png'
import  slide4  from '../../assets/images/slide4.png'
import  slide5  from '../../assets/images/slide5.png'


const TypeProductPage = () => {

    const { state}  = useLocation()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [panigate, setPanigate] = useState({
        page: 0,
        limit: 10,
        total: 1,
    })
    const fetchProductType = async (type, page, limit) => {
        setLoading(true)
        const res = await ProductService.getProductType(type, page, limit)
        if(res?.status == 'OK') {
            setLoading(false)
            setProducts(res?.data)
            setPanigate({...panigate, total: res?.totalPage})
        }else {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(state){
            fetchProductType(state, panigate.page, panigate.limit)
        }
    }, [state,panigate.page, panigate.limit])


    const onChange = (current, pageSize) => {
        setPanigate({...panigate, page: current -1, limit: pageSize})    
    }

    return (
        <Loading isLoading={loading}>
                <div className='body' style={{ width: '100%'}}>
      <div id='container' style={{ height: 'auto', width:'1270px', margin: '20px auto'}}>
        <SlideComponent arrImages={[slide1, slide2, slide3, slide4, slide5]}/>  
      </div>
    </div>
            <div style={{ width: '100%', height: 'calc(100vh - 64px)' }}>
                <div style={{ width: '1820px', margin: '0 auto', height: '100%' }}>
                    <Row style={{ flexWrap: 'nowrap', paddingTop: '10px',height: 'calc(100% - 20px)' }}>
                        <WrapperNavbar span={3} >
                            <NavBarComponent />
                        </WrapperNavbar>
                        <Col span={21} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <WrapperProducts>
                                {products?.map((product) =>{
                                return (
                                    <CardComponents
                                    key={product._id}
                                    countInStock={product.countInStock}
                                    description={product.description}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    type={product.type}
                                    selled={product.selled}
                                    id={product._id}
                                    />
                                )
                                })}
                            </WrapperProducts>
                            <Pagination defaultCurrent={panigate.page + 1} total={panigate?.total} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
                        </Col>
                    </Row>
                </div>
            </div>
        </Loading>
    )
}

export default TypeProductPage
