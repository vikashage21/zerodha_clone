import React from 'react'
import Hero from './Hero'
import Left from './left'
import RightSection from './RightSection'

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <Left

        imageUrl={"media/image/kite.png"}
        heading={"Kite"}
        para={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
        demoLink={""}
        learnLink={""}
      />
      <RightSection
        imageUrl={"media/image/console.png"}
        heading={"Console"}
        para={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}
        demoLink={""}
        learnLink={""} />

<Left

        imageUrl={"media/image/coin.png"}
        heading={"coin"}
        para={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}
        demoLink={""}
        learnLink={""}
      />
       <RightSection
        imageUrl={"media/image/kiteconnect.png"}
        heading={"Kite connect Api"}
        para={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
        demoLink={""}
        learnLink={""} />
    </div>
  )
}

export default ProductPage
