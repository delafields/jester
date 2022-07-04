import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { FolderContainer } from '../components/FolderContainer';
import { MemeContainer } from '../components/memeContainer';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  const test_memes =  {
    "funny": [
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
    ],
    "arsenal": [
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

  const [folders, setFolders] = useState(test_memes);
  const [selectedFolder, setSelectedFolder] = useState(null);

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

          {selectedFolder === null
            ? <FolderContainer 
                setSelectedFolder={setSelectedFolder}
                folders={folders}
                setFolders={setFolders} 
              />

            : <MemeContainer
                folders={folders}
                selectedFolder={selectedFolder}
                setSelectedFolder={setSelectedFolder}
              />
          }

          <Footer/>

        </div>
      </main>

    </div>
  )
}

export default Home
