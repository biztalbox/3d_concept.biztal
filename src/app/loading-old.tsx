import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <section className="fixed top-0 h-screen overflow-hidden w-full flex justify-center items-center bg-black">

        <Image src="/loader.gif" width="1024" height="1024" alt="loading" className="w-52 block" />

    </section>
  )
}

export default loading