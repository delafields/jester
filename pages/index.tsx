import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ClientView } from '../components/views/ClientView';
import { LandingView } from '../components/views/LandingView';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {


  const test_memes =  {
    "funny": {
      "emoji": "😂",
      "memes": [
        {
          "name": "doggie",
          "url": "https://media.giphy.com/media/GvEZr8EgoLGkCn2ZSS/giphy-downsized-large.gif"
        },
        {
          "name": "bulldog",
          "url": "https://media.giphy.com/media/kUzl3AEdxFplm2hV3Y/giphy-downsized-large.gif"
        },
        {
          "name": "chihuahua",
          "url": "https://media.giphy.com/media/oOkuKZEmTjDE2G3QIm/giphy.gif"
        }
      ]
    }
    ,
    "arsenal": {
      "emoji": "😤",
      "memes": [
        {
          "name": "wenger",
          "url": "https://media.giphy.com/media/xUOwGm7QRxMQv52Q3m/giphy.gif"
        },
        {
          "name": "scarf",
          "url": "https://media.giphy.com/media/xUOwFUB0y0SDfaoEHS/giphy.gif"
        },
        {
          "name": "tifo",
          "url": "https://media.giphy.com/media/3oxQNnEZqBmN7z3Tnq/giphy.gif"
        }
      ]
    }
  }

  const [memes, setMemes] = useState(test_memes);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Head>
        <title>jester</title>
        <meta name="description" content="meme it 2 existence" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex bg-[#FFE9CE] h-screen flex-col justify-center items-center">

          <Header/>

          {isLoggedIn === true
          ? <ClientView memes={memes} setMemes={setMemes}/>
          : <LandingView isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }

          <Footer/>

        </div>
      </main>

    </div>
  )
}

export default Home
