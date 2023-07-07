import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'




const Login = () => {

    const [email, setemail] = useState("");
    const {user,logIn} = UserAuth()
const [password, setpassword] = useState("");
const [error, seterror] = useState("");
const navigate = useNavigate();

const handleSubmit = async (e) =>{
    e.preventDefault()
    seterror('')
    try {
        await logIn(email,password)
        navigate('/')
    } catch (error) {
        console.log(error)
        seterror(error.message)
    }

}


  return (
    <div className='w-full h-full'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/ffe925ad-8290-400c-b125-6fe8fd9469a5/US-en-20230626-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="cover-image" />
        <div className='bg-black/60 fixed top-0 left-0 h-full w-full'></div>
        <div className='fixed w-full px-4 py-24 z-50 '>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    {error ? <p className='p-3 bg-red-400 my-2'>error wrong username or password</p> : null}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e)=>setemail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded ' type="text" placeholder='email' autoComplete='email'/>
                        <input onChange={(e)=>setpassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded ' type="password" placeholder='password'autoComplete='current-password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                        
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p className='mr-2'><input type="checkbox"/>Remember me</p>
                            <p>Need help</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600'>New to Netflix?</span>{' '}
                        <Link to='/signup'> Sign Up</Link>
                       </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
