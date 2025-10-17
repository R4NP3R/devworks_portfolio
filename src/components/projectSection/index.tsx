/* eslint-disable react-refresh/only-export-components */
import { SquareArrowOutUpRight } from 'lucide-react'
import * as S from './styles'
import github from 'devicon/icons/github/github-original.svg'
import eplay from '../../assets/Eplay.png'
import foodNow from '../../assets/foodNow.png'
import cherri from '../../assets/image2.png'
import host from '../../assets/image.png'
import oask from '../../assets/imagem3.png'
import casa from '../../assets/imegem4.png'
import foundever from '../../assets/imagem5.png'

interface ProjetosMockados {
  name: string,
  description: string,
  githubLink: string,
  siteLink?: string,
  imageRef: string
}

export const ProjetosMockados: ProjetosMockados[] = [
  {
    name: 'EPlay',
    description: 'Projeto Vitrine colocar em pratica o conhecimento em React e consumo de API',
    githubLink: '',
    siteLink: 'https://eplay-rho-five.vercel.app/',
    imageRef: eplay
  },
  {
    name: 'Food Now',
    description: 'Projeto freelancer feito para um polonês',
    githubLink: '',
    siteLink: 'https://freela-restaurant.vercel.app/',
    imageRef: foodNow
  }, 
  {
    name: 'Foundever',
    description: 'Site criado para uma empresa que impulsiona marcas',
    githubLink: '',
    siteLink: 'https://foundever.com/pt-br/',
    imageRef: foundever
  },
    {
    name: 'Loja De Roupas Cherri',
    description: 'Site de vendas de roupas criado pelo shopify com linguagem de programação liquid',
    githubLink: '',
    siteLink: 'https://cherrifashion.com/',
    imageRef: cherri
  },

  {
    name: 'Site de hospedagem de VSL',
    description: 'Site criado para hospedar videos',
    githubLink: '',
    siteLink: 'https://www.hostvsl.com.br/',
    imageRef: host
  },

  {
    name: 'One of A Kind Stories',
    description: 'Site criado para venda de presentes',
    githubLink: '',
    siteLink: 'https://oaks.com.br/',
    imageRef: oask
  },
  {
    name: 'Casa do Trem',
    description: 'Site de vitrine criado para mostrar Atelier',
    githubLink: '',
    siteLink: 'https://esculturas-personalizadas.ateliercasadotrem.com.br/',
    imageRef: casa
  },  
]

export const ProjectsSection = () => {
  return (
    <S.StyledSection id="Projetos" className='container'>
      <S.SectionTittle>
        <h1>PROJETOS DESENVOLVIDOS PARA CLIENTES</h1>
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