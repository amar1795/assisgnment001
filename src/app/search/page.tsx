"use client"
import SearchResults from '@/components/SearchResults'
import Head from 'next/head'
import React, { useRef } from 'react'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'
import SearchInput from '@/components/searchInput'
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hook'


const page = () => {
    const router = useRouter();


  return (
    <div>
    

    {/*  Header */}

    <Header />


  </div>
  )
}

export default page
