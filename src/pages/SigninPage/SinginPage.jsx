import React, { useEffect, useState } from 'react'
import bia from '../../assets/images/slide5.png'
import { WrapperContainerLeft } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook';
import Loading from '../../components/LoadingComponent/Loading';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/slide/userSlide';


const SinginPage = () => {
  const [isShowPassword] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const user  = useSelector((state) => state.user)
  const handleNavigateSignUp = () => {
      navigate('/sign-up')
  }

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  
  const { data, isLoading, isSuccess } = mutation

  useEffect(() => {
    if (isSuccess) {
      if(location?.state) {
        navigate(location?.state)
      }else {
        navigate('/')
      }
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
      if(data?.access_token) {
        const decoded = jwt_decode(data?.access_token)
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    } 
  }, [isSuccess])



  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storage)
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token,refreshToken }))
  }


  
  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleSignIn = () => {
    mutation.mutate({
      email,
      password
    })
  }

  return (
    <div  style={{ background: 'rgba(242, 242, 240, 1)'}}>
      <div>
        <img style={{width: '100%', height: '350px'}} src={bia} alt={bia} preview= "false"/>
      </div>

      <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', height: '50vh', marginTop: '30px'}}>
        <WrapperContainerLeft>
          <h1>Đăng nhập tài khoản</h1>
          <InputForm style={{ height: '50px', margin: '15px 0'}} placeholder="Email"
          value= {email} onChange={handleOnchangeEmail}/>

          <div>
            <span
            style={{
              display: 'none'
            }}>
              {
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm style={{ height: '50px', marginBottom: '15px'}} placeholder="password" type={isShowPassword ? "text" : "password"}
            value= {password} onChange={handleOnchangePassword}/>
          </div>
          
          {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
          <Loading isLoading={isLoading}>
            <button
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
                style={{ 
                  wight: '40px',
                  background: 'rgba(50, 30, 30, 1)', 
                  height: '48px', 
                  width: '180px',
                  border: 'none',
                  borderRadius: '30px',
                  color: '#fff', 
                  fontSize: '15px',
                  margin: '26px 0 10px'
                }}
              > 
                Đăng nhập
            </button>
          </Loading>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', marginTop: '20px', fontFamily: 'Poppins-sans-serif'}}>
            <span>Quên mật khẩu?</span>
            <span onClick={handleNavigateSignUp} style={{cursor: 'pointer'}}>Đăng kí</span>
          </div>
        </WrapperContainerLeft>
      </div>
    </div>
  )
}

export default SinginPage