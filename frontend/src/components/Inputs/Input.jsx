import React from 'react'
import { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

const Input = ({value, onChange, placeholder, label, type}) => {

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword=()=>{
    setShowPassword(!showPassword);
  }

  return (
    <div className="">
    <label className="text-[13px] text-slate-800">{label}</label>
    <div className="input-box">
      <input 
      type={type=="password" ? showPassword ? 'text':'password':type}
      placeholder={placeholder}
      value={value}
      onChange={(e)=>onChange(e)}
       className="" />

       {type==='password'&&(
        <>
        {showPassword?(
          <FaRegEye
          size={22}
          className='text-primary'
          onClick={()=> toggleShowPassword()}
          />
        ):(
           <FaRegEyeSlash
          size={22}
          className='text-slate-400'
          onClick={()=> toggleShowPassword()}
          />
        )}
        </>
       )}
    </div>
    </div>
  )
}

export default Input