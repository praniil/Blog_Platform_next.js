import React from 'react'
import {authenticate} from '@/app/lib/actions'

const page = () => {
  return (
    <form action={authenticate}>
        <input type="email" name="email" id="email" placeholder='Email' required/>
        <input type="password" name="password" id="password" placeholder='Password' required/>
        <button type='submit'>Login</button>
    </form>
  )
}

export default page