import React, { useEffect, useState } from 'react'
import { WeapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel, WrapperUploadFile } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { useDispatch, useSelector } from 'react-redux'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import * as message from '../../components/Message/Message';
import { updateUser } from '../../redux/slide/userSlide'
import { Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { getBase64 } from '../../ultils'

const ProfilePage = () => {
    const user = useSelector((state) => state.user)
    const [ email, setEmail ] = useState('')
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ avatar, setAvatar] = useState('')

    const mutation = useMutationHooks(
        (data) => {
            const { id, access_token, ...rests } = data
            UserService.updateUser(id, rests, access_token)
        }
      )
    
    const dispatch = useDispatch()
    const { data, isLoading, isSuccess, isError } = mutation
    

    useEffect(() => {
        setEmail(user?.email)
        setName(user?.name)
        setPhone(user?.phone)
        setAddress(user?.address)
        setAvatar(user?.avatar)
    }, [user])

    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleGetDetailsUser(user?.id, user?.access_token)
        } else if (isError) {
            message.error()
        }
    }, [isSuccess, isError])

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
    }
    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangeName = (value) => {
        setName(value)

    }

    const handleOnchangePhone = (value) => {
        setPhone(value)

    }

    const handleOnchangeAddress = (value) => {
        setAddress(value)

    }

    const handleOnchangeAvatar = async ({fileList}) => {
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj );
        }
        setAvatar(file.preview)
    }


    const handleUpdtae = () => {
        mutation.mutate({ id: user?.id, email, name, phone, address, avatar, access_token: user?.access_token})

    }

    return (
        <div style={{width: '1440px', margin: '0 auto', height: '700px'}}>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <Loading isLoading={isLoading}>
                <WeapperContentProfile>
                    <WrapperInput>
                        <WrapperLabel htmlFor="name">Name</WrapperLabel>
                        <InputForm id="name" style={{ width: '520px', backgroundColor: '#fff', border: '1px solid #000' }} value= {name} onChange={handleOnchangeName}/>
                        <button
                            onClick={handleUpdtae}
                                style={{ 
                                backgroundColor:'rgb(50, 30, 30)',
                                height: '30px', 
                                width: 'fit-content',
                                border: '0.1px solid #000',
                                borderRadius: '30px',
                                color: '#fff', 
                                fontSize: '15px',
                                }}
                            > 
                            Cập nhật
                        </button>
                    </WrapperInput>

                    <WrapperInput>
                        <WrapperLabel htmlFor="email">Email</WrapperLabel>
                        <InputForm id="email" style={{ width: '520px', backgroundColor: '#fff', border: '1px solid #000' }} value= {email} onChange={handleOnchangeEmail}/>
                        <button
                            onClick={handleUpdtae}
                                style={{ 
                                backgroundColor:'rgb(50, 30, 30)',
                                height: '30px', 
                                width: 'fit-content',
                                border: '0.1px solid #000',
                                borderRadius: '30px',
                                color: '#fff', 
                                fontSize: '15px',
                                }}
                            > 
                            Cập nhật
                        </button>
                    </WrapperInput>

                    <WrapperInput>
                        <WrapperLabel htmlFor="phone">Phone</WrapperLabel>
                        <InputForm id="phone" style={{ width: '520px', backgroundColor: '#fff', border: '1px solid #000' }} value= {phone} onChange={handleOnchangePhone}/>
                        <button
                            onClick={handleUpdtae}
                                style={{ 
                                backgroundColor:'rgb(50, 30, 30)',
                                height: '30px', 
                                width: 'fit-content',
                                border: '0.1px solid #000',
                                borderRadius: '30px',
                                color: '#fff', 
                                fontSize: '15px',
                                }}
                            > 
                            Cập nhật
                        </button>
                    </WrapperInput>

                    <WrapperInput>
                        <WrapperLabel htmlFor="address">Address</WrapperLabel>
                        <InputForm id="address" style={{ width: '520px', backgroundColor: '#fff', border: '1px solid #000' }} value= {address} onChange={handleOnchangeAddress}/>
                        <button
                            onClick={handleUpdtae}
                                style={{ 
                                backgroundColor:'rgb(50, 30, 30)',
                                height: '30px', 
                                width: 'fit-content',
                                border: '0.1px solid #000',
                                borderRadius: '30px',
                                color: '#fff', 
                                fontSize: '15px',
                                }}
                            > 
                            Cập nhật
                        </button>
                    </WrapperInput>

                    <WrapperInput>
                        <WrapperLabel htmlFor="avatar">Avatar</WrapperLabel>
                        <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                            <Button icon={<UploadOutlined />}>Select File</Button>
                        </WrapperUploadFile>
                        {avatar && (
                            <img src={avatar} style={{
                                height: '60px',
                                width: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }} alt='avatar'/>
                        )}
                        <button
                            onClick={handleUpdtae}
                                style={{ 
                                backgroundColor:'rgb(50, 30, 30)',
                                height: '30px', 
                                width: 'fit-content',
                                border: '0.1px solid #000',
                                borderRadius: '30px',
                                color: '#fff', 
                                fontSize: '15px',
                                }}
                            > 
                            Cập nhật
                        </button>
                    </WrapperInput>
                </WeapperContentProfile>
            </Loading>
            
        </div>
  )
}

export default ProfilePage