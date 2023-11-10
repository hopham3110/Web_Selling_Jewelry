import React, { useEffect } from 'react'
import { WrapperContainerLeft } from './style'
import bia from '../../assets/images/slide5.png'
import InputForm from '../../components/InputForm/InputForm'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook';
import Loading from '../../components/LoadingComponent/Loading';
import * as message from '../../components/Message/Message';

const SignupPage = () => {
  const navigate = useNavigate()
  const handleNavigateSignIn = () => {
      navigate('/sign-in')
  }

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )

  const { data, isLoading, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess) {
      message.success()
      handleNavigateSignIn()
    } else if (isError) {
      message.error()
    }
  }, [isSuccess, isError])

  const [isShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const handleSignUp = () => {
    mutation.mutate({email, password, confirmPassword})
  }


  return (
    <div  style={{ background: 'rgba(242, 242, 240, 1)'}}>
      <div>
        <img style={{width: '100%', height: '350px'}} src={bia} alt={bia} preview= "false"/>
      </div>

      <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', height: '50vh', marginTop: '30px'}}>
        <WrapperContainerLeft>
          <h1>Đăng kí tài khoản</h1>
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
            <InputForm style={{ height: '50px'}} placeholder="password" type={isShowPassword ? "text" : "password"}
            value= {password} onChange={handleOnchangePassword}/>
          </div>

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
            <InputForm style={{ height: '50px', margin: '10px 0'}} placeholder="confirm password" type={isShowPassword ? "text" : "password"}
            value= {confirmPassword} onChange={handleOnchangeConfirmPassword}/>
          </div>
          {data?.status === 'ERR' && <span style={{color: 'red', top: '100px'}}>{data?.message}</span>}
          <Loading isLoading={isLoading}>
            <button
              disabled={!email.length || !password.length || !confirmPassword.length}
              onClick={handleSignUp}
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
                <span>Đăng kí</span>
            </button>
          </Loading>
          <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', marginTop: '20px'}}>
            <span onClick={handleNavigateSignIn} style={{cursor: 'pointer', fontFamily: 'Poppins-sans-serif'}} >Đăng nhập</span>
          </div>
        </WrapperContainerLeft>
      </div>
    </div>
  )
}

export default SignupPage