import TopicList from '@/components/Topic/TopicList'
import DefaultLay from '@/layouts/DefaultLay'
import AboutMe from '@/modules/home/AboutMe'
import FirstScreen from '@module/home/FirstScreen'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components

const Home: NextPage = () => {
  return (
    <DefaultLay>
      <FirstScreen 
        img='/img/me.png'
        title='Gabriel Feliciano'
        description='Olá! Sou Gabriel Feliciano, desenvolvedor Full-Stack, apaixonado por tecnologia e inovação. Adoro desenvolver e aprender novas tecnologias e ferramentas para melhorar minhas habilidades e desenvolver projetos. Também gosto de jogar jogos e assistir vídeos e filmes.'
        menuButtons={
          [
            {
              text: 'About me',
              url: '#about-me',
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
      <TopicList>
        <AboutMe />
      </TopicList>
    </DefaultLay>
  )
}

export default Home
