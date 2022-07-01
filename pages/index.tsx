import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AddMemes } from '../components/addMemes';

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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(null);

  function openModal() {
    setIsOpen(true)
  }

  const Header = () => {
    return (
      // <div
      //   className="flex flex-col w-full h-24 basis-1/3 relative bg-[linear-gradient(180deg,_#F44129_33%,_#F5B925_33%_66%,_#1F4888_66%)]"
      // >
       <div
         className="flex justify-center items-center w-full h-1/6 bg-gradient bg-cover shadow-sm"
      >
        <p className="font-berkshire text-white text-4xl">jester</p>
      </div>
    )
  }

  const handleClick = (f) => {
    setSelectedFolder(f);
  };

  return (
    <div>
      <Head>
        <title>jester</title>
        <meta name="description" content="meme it 2 existence" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex h-screen flex-col justify-center items-center">

          <div className="bg-gradient bg-cover flex justify-center items-center h-24 w-full">
            <p className="font-berkshire text-white text-4xl">jester</p>
          </div>

          {selectedFolder === null
          ? <div className="flex-grow grid grid-cols-2 justify-items-center pt-4 auto-rows-min gap-2 bg-green-100 w-2/3">
            {
              Object.entries(folders).map(([foldername, memes]) => {
                return (
                  <div 
                    className="bg-blue-200 w-24 h-24 items-center flex flex-col"
                    key={foldername}>
                      <p className="text-red-400 text-center">
                        {foldername}
                      </p>
                      <button 
                        // onDoubleClick={() => setSelectedFolder(foldername)}
                        onClick={ e => {
                          if (e.detail === 2) setSelectedFolder(foldername)
                        }}
                        className="bg-slate-200 flex-grow w-full">
                        folder
                      </button>
                  </div>
                  )
              })
            }
            <button
              onClick={openModal}
              className="w-24 h-24 bg-rose-500">
              +
            </button>

            <AddMemes 
              test_memes={test_memes} 
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              folders={folders}
              setFolders={setFolders}
              />

          </div>

          : <div>
              <button 
              className="bg-blue-200"
              onClick={() => setSelectedFolder(null)}>
                Home
              </button>
              <p>{selectedFolder}</p>
              <div className="flex-grow grid grid-cols-2 justify-items-center pt-4 auto-rows-min gap-2 bg-green-100 w-2/3">
                {
                  folders[selectedFolder].map(({ name, url }) => {
                    return (
                      <div>
                        {name}
                        {/* {url} */}
                        <Image
                          src={url}
                          height={200}
                          width={200}
                        />
                      </div>
                    )
                  })
                }
              </div>
            </div>

          }

          <div className="bg-yellow-100 h-20 flex justify-center items-center w-full">
            made by me
          </div>

        </div>
      </main>
      
      {/* <main className="flex flex-col min-h-screen">
        
        <div className="flex justify-center items-center w-full h-1/5 bg-gradient bg-cover shadow-sm">
          <p className="font-berkshire text-white text-4xl">jester</p>
        </div>

        <div className="flex-grow bg-green-200">
        {
          Object.entries(folders).map(([key, memes]) => {
            return (
              <div 
              className="bg-blue-200"
                key={key} 
                memes={memes}>
                  {key}
              </div>
              )
          })
        }
        </div>

        <footer className="h-1/5 bg-red-200">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>

      </main> */}

      
    </div>
  )
}

export default Home
