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
              text: 'About me',
              url: '',
              icon: 'fas fa-info'
            },
            {
              text: 'Projects',
              url: '',
              icon: 'fab fa-github-alt'
            },
            {
              text: 'Contact',
              url: '',
              icon: 'fas fa-phone'
            }
          ]
        }
      />
    </>
  )
}

export default Home
