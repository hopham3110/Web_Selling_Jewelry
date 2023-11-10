import { Badge, Col, Popover } from 'antd'
import React, { useEffect, useState } from 'react'
import { WrapperContentPopup, WrapperHeader, WrapperHeaderAccount, WrapperHeaderSmall, WrapperImgStyle, WrappertypeHeader } from './style'
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slide/userSlide';
import Loading from './../LoadingComponent/Loading';


const HeaderCompoent = (isHiddenCart = false) => {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [ loading, setLoading ] =useState(false)
    const navigate = useNavigate()
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const order = useSelector((state) => state.order)
    const user = useSelector((state) => state.user)
    const handleNavigatelogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
      }, [user?.name, user?.avatar])
      
    const content = (
        <div>
        <WrapperContentPopup onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</WrapperContentPopup>
        {user?.isAdmin && (
  
          <WrapperContentPopup onClick={() => handleClickNavigate('admin')}>Quản lí hệ thống</WrapperContentPopup>
        )}
        <WrapperContentPopup onClick={() => handleClickNavigate(`my-order`)}>Đơn hàng của tôi</WrapperContentPopup>
        <WrapperContentPopup onClick={() => handleClickNavigate()}>Đăng xuất</WrapperContentPopup>
      </div>
    );
    
    const handleClickNavigate = (type) => {
        if(type === 'profile') {
          navigate('/profile-user')
        }else if(type === 'admin') {
          navigate('/system/admin')
        }else if(type === 'my-order') {
          navigate('/my-order',{ state : {
              id: user?.id,
              token : user?.access_token
            }
          })
        }else {
          handleLogout()
        }
        setIsOpenPopup(false)
      }

    return (
    <div>
        <WrapperHeader>
            <Col span={6}>
                <WrapperImgStyle onClick={() => navigate('/')} style={{cursor: 'pointer'}} src={logo} alt={logo}/>
            </Col>

            <Col span={14} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontFamily: 'Poppins-sans-serif'}}>
                <WrappertypeHeader>
                    <span onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Trang chủ</span>
                    <span onClick={() => navigate('/products')} style={{cursor: 'pointer'}}>Sản phẩm</span>
                    <span onClick={() => navigate('/info')} style={{cursor: 'pointer'}}>Thông tin</span>
                    <span onClick={() => navigate('/contact')} style={{cursor: 'pointer'}}>Liên hệ</span>
                </WrappertypeHeader>
            </Col>

    
            <Col span={4} style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'flex-end'}} >
                <Loading isLoading={loading}>
                    <WrapperHeaderAccount>
                    {userAvatar ? (
                        <img src={userAvatar} alt="avatar" style={{
                        height: '30px',
                        width: '30px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                        }} />
                    ) : (
                        <UserOutlined style={{ fontSize: '25px' }} />
                    )}
                    {user?.access_token ? (
                    <>
                        <Popover content={content} trigger="click" open={isOpenPopup}>
                            <div style={{ fontSize: '18px', fontFamily: 'Poppins-sans-serif', cursor: 'pointer',maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
                        </Popover>
                    </>
                    ) : (
                        <div onClick={handleNavigatelogin} style={{cursor: 'pointer'}}>
                        <div>
                            <WrapperHeaderSmall style={{  fontFamily: 'Poppins-sans-serif'}}>Tài khoản</WrapperHeaderSmall>
                        </div>
                    </div>
                    )}
                    
                    </WrapperHeaderAccount>
                </Loading>

                    <div onClick={() => navigate('/order')} style={{cursor: 'pointer'}}>
                        <Badge count={order?.orderItems?.length}  size="small">
                            <ShoppingCartOutlined style={{ fontSize: '25px'}} />
                        </Badge>
                    </div>

            </Col>
        </WrapperHeader>
    </div>
  )
}

export default HeaderCompoent