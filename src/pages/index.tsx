import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useSession, signIn, signOut} from "next-auth/react"

export default function Home() {
  const {data: session, status} = useSession();

  const getUserData = async () => {
    try {
      const response = await axios.post('/api/users', {

      })
      const userData = response.data;
      console.log("DATA", userData)
    } catch (e) {
      console.log(e)
    }
  }
  if (status === 'loading') {
    return null;
  }
  if (session) {

  
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        Signed in as {session?.user?.email}< br />
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    )
  }
  return (
    <>
    Not signed in 
    <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
