/* eslint-disable react-refresh/only-export-components */
import { SquareArrowOutUpRight } from 'lucide-react'
import * as S from './styles'
import github from 'devicon/icons/github/github-original.svg'
import mensal from '../../assets/mensal.png'
import efood from '../../assets/Efood.png'
import eplay from '../../assets/Eplay.png'
import esports from '../../assets/ESports.png'
import listaDeContatos from '../../assets/ListaDeContatos.png'
import spiderman from '../../assets/SpiderMan.png'
import breakingBad from '../../assets/BreakingBad.png'
import disney from '../../assets/Disney.png'
import foodNow from '../../assets/foodNow.png'
import csgoNades from '../../assets/CSGranadas.png'

interface ProjetosMockados {
  name: string,
  description: string,
  githubLink: string,
  siteLink?: string,
  imageRef: string
}

export const ProjetosMockados: ProjetosMockados[] = [
  // {
  //   name: 'Mensalidade',
  //   description: 'Projeto de mensalidade pensando em professores de academia que não tem controle do fluxo de alunos e mensalidade.',
  //   githubLink: 'https://github.com/R4NP3R/projeto_mensalidade',
  //   imageRef: mensal
  // },
  {
    name: 'Efood',
    description: 'Projeto da EBAC para colocar em pratica o conhecimento em React, com acompanhamento dos tutores.',
    githubLink: 'https://github.com/R4NP3R/efood',
    siteLink: 'https://efood-phi.vercel.app/',
    imageRef: efood
  },
  {
    name: 'EPlay',
    description: 'Projeto da EBAC para colocar em pratica o conhecimento em React e consumo de API, com acompanhamento dos tutores.',
    githubLink: 'https://github.com/R4NP3R/eplay',
    siteLink: 'https://eplay-rho-five.vercel.app/',
    imageRef: eplay
  },
  {
    name: 'Food Now',
    description: 'Projeto freelancer feito para um polonês em html, css e javascript',
    githubLink: 'https://github.com/R4NP3R/freela_restaurant',
    siteLink: 'https://freela-restaurant.vercel.app/',
    imageRef: foodNow
  },
  // {
  //   name: 'Granadas CS:GO',
  //   description: 'Desafio da EBAC para colocar em pratica o conhecimento em construção de site com bootstrap, com acompanhamento dos tutores.',
  //   githubLink: 'https://github.com/R4NP3R/Granadas-CSGO',
  //   siteLink: 'https://granadas-csgo.vercel.app/',
  //   imageRef: csgoNades
  // },
  // {
  //   name: 'EBAC Sports',
  //   description: 'Desafio da EBAC para colocar em pratica o conhecimento em Redux fazendo um carrinho, com acompanhamento dos tutores.',
  //   githubLink: 'https://github.com/R4NP3R/ebac_sports',
  //   siteLink: 'https://ebac-sports-ashy.vercel.app/',
  //   imageRef: esports
  // },  
  {
    name: 'Lista de Contatos',
    description: 'Desafio da EBAC, fazer um lista de contatos com Redux com adição, remoção e edição de contatos, inspirado no contatos da Google',
    githubLink: 'https://github.com/R4NP3R/exercicio_lista_de_contatos_React',
    siteLink: 'https://lista-de-contatos-opal.vercel.app/',
    imageRef: listaDeContatos
  },
  {
    name: 'Clone Disney+',
    description: 'Projeto da EBAC para colocar em pratica o conhecimento em contrução de site com HTML e CSS',
    githubLink: 'https://github.com/R4NP3R/clone_disneyplus',
    siteLink: 'https://clone-disneyplus-theta.vercel.app/',
    imageRef: disney
  },
  {
    name: 'Spiderman Carrousel',
    description: 'Carrousel do SpiderMan para colocar em prática conhecimentos de estilização e framer motion.',
    githubLink: 'https://github.com/R4NP3R/NextJS-spiderman-carousel',
    siteLink: 'https://spiderman-carousel.vercel.app/',
    imageRef: spiderman
  },  
]

export const ProjectsSection = () => {
  return (
    <S.StyledSection id="Projetos" className='container'>
      <S.SectionTittle>
        <h1>Projetos Desenvolvidos para clientes</h1>
      </S.SectionTittle>
      <S.SectionProjects>
        {ProjetosMockados.map((projeto) => (
          <S.ProjectContainer
          key={projeto.name}
          variants={{
            hidden: {opacity: 0, y: 300},
            show: {opacity: 1, y: 0}
          }}
          viewport={{
            once: true
          }}
          initial="hidden"
          whileInView="show"
          transition={{duration: 0.6}}
          >
            <S.ProjectImage className='bg-image' src={projeto.imageRef} alt="" />
            <S.ProjectInformations className='informations'>
              {projeto.siteLink ? 
                (
                <div>
                <a target='_blank' href={projeto.siteLink} className='siteLink'>
                  <SquareArrowOutUpRight size={32} color='#fff'/>
                </a>
                <a target='_blank' href={projeto.githubLink} className='gitHubLink'>
                  <img src={github} color='#fff' alt="" />
                </a>
                </div>
                ) : 
                (
                <a target='_blank' href={projeto.githubLink} className='gitHubLinkSolo'>
                  <img src={github} alt="" />
                </a>
                )
              }
              <S.ProjectTitle>{projeto.name}</S.ProjectTitle>
              <S.ProjectDescription>{projeto.description}</S.ProjectDescription>
            </S.ProjectInformations>
          </S.ProjectContainer>
        ))}
      </S.SectionProjects>
    </S.StyledSection>
  )
}