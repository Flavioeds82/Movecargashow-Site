import React from 'react'
import { Container } from './styled'
import Blog from '../../components/Blog'
import GoogleAnalytics from '../../GoogleAnalytics'
import {Banner, BannerNative} from '../../components/Banners'




export default function Home() {
  return (
    <Container>
      <GoogleAnalytics/>
      <main className="main">
      </main>
      <Banner />
      <BannerNative/>
    </Container>
  )
}
