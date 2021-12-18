import TopicList from '@/components/Topic/TopicList'
import DefaultLay from '@/layouts/DefaultLay'
import AboutMe from '@/modules/home/AboutMe'
import Projects from '@/modules/home/Projects'
import Tecnology from '@/modules/home/Tecnology'
import FirstScreen from '@module/home/FirstScreen'
import type { NextPage } from 'next'

// Components

const Home: NextPage = () => {
  return (
    <DefaultLay>
      <FirstScreen 
        img='/img/me.png'
        title='Gabriel Feliciano'
        description='Olá! Sou Gabriel Feliciano, desenvolvedor Full-Stack, apaixonado por tecnologia e inovação. Adoro desenvolver e aprender novas tecnologias e ferramentas para melhorar minhas habilidades e desenvolver projetos.'
        menuButtons={
          [
            // {
            //   text: 'Sobre mim',
            //   url: '#about-me',
            //   icon: 'fas fa-info'
            // },
            {
              text: 'Projetos',
              url: '#projects',
              icon: 'fab fa-github-alt'
            },
            {
              text: 'Tecnologias aprendidas',
              url: '#tecnology',
              icon: 'fas fa-tools'
            },
            {
              text: 'Contato',
              url: '#contact',
              icon: 'fas fa-phone'
            }
          ]
        }
      />
      <TopicList>
        <AboutMe />
        <Projects />
        <Tecnology />
      </TopicList>
    </DefaultLay>
  )
}

export default Home
