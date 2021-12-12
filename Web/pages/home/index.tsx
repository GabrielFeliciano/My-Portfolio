import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import FirstScreen from './first-screen'

const Home: NextPage = () => {
  return (
    <>
      <FirstScreen 
        img='/img/me.png'
        title='Gabriel Feliciano'
        menuButtons={
          [
            {
              text: 'About',
              url: '/about',
              icon: 'fas fa-info'
            },
            {
              text: 'Contact',
              url: '/about',
              icon: 'fas fa-phone'
            }
          ]
        }
      />
    </>
  )
}

export default Home
