import LoginForm from '@/components/module/auth/login/LoginForm'
import React, { Suspense } from 'react'

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center p-6 md:p-0 min-h-screen'>
      <Suspense fallback={<div>Loading...</div>}>
      <LoginForm/>
      </Suspense>
    </div>
  )
}

export default LoginPage