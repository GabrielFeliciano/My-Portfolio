import TopicList from '@/components/Topic/TopicList'
import DefaultLay from '@/layouts/DefaultLay'
import AboutMe from '@/modules/home/AboutMe'
import Projects from '@/modules/home/Projects'
import FirstScreen from '@module/home/FirstScreen'
import type { NextPage } from 'next'

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
              url: '#projects',
              icon: 'fab fa-github-alt'
            },
            {
              text: 'Contact',
              url: '#contact',
              icon: 'fas fa-phone'
            }
          ]
        }
      />
      <TopicList>
        <AboutMe />
        <Projects />
      </TopicList>
    </DefaultLay>
  )
}

export default Home
