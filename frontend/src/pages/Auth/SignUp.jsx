import React, { useState } from 'react'
import AuthLayout from '../../components/Layouts/AuthLayout'
import { Link, useNavigate } from 'react-router';
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

export const SignUp = () => {

  const [profilePic, setProfilePic] = useState(null);
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState();
  const [password,setPassword] = useState('');

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //handle sign up form submit
  const handleSignUp = async (e)=>{
    let profileImageUrl = '';
    if(!fullname){
      setError('Please enter your name');
      return;
    }
    if(!validateEmail(email)){
      setError('Please enter valid email address');
      return;
    }
    if(!password){
      setError('Please enter the password');
      return;
    }
    setError('');

    //SignUp API CALL
  }

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
          <p className="text-xs text-slate-700 mt-[5px] mb-6">
            Join us today by entering your details below.
          </p>
          <form onSubmit={handleSignUp}>

            <ProfilePhotoSelector image={profilePic} setImage = {setProfilePic}/>

            <div className="">
              <Input
              value={fullname}
              onChange={({target})=>setFullName(target.value)}
              label='Full Name'
              placeholder='abc'
              type='text'
              />
              <Input value={email}
          onChange={({target})=>setEmail(target.value)}
          label='Email Address'
          placeholder = 'abc@example.com'
          type='text'
          />
          <div className="col-span-2">
          <Input value={password}
          onChange={({target})=>setPassword(target.value)}
          label='Password'
          placeholder = 'Min 8 Characters'
          type='password'
          />
          </div>
            </div>
            {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                      <button className="btn-primary" type='submit'>Sign Up</button>
                      <p className="text-[13px text-slate-800 mt-3]">
                        Already have an account?{' '}
                      <Link className="font-medium text-primary underline" to='/login'>Login</Link>
                      </p>
          </form>
        
      </div>
    </AuthLayout>
  )
}
