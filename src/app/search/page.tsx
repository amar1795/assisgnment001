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

  
  const dispatch = useAppDispatch();

  return (
    <div>
    <Head>
      <title> {router?.query?.value} - Google Search </title>
      <link rel="icon" href="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"/>
    </Head>

    {/*  Header */}

    <Header />
    
    {/* Search Results */}
    {/* <SearchResults results={results} /> */}

  </div>
  )
}

export default page
