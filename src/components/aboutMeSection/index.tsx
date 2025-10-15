import * as S from './styles'
import video from '../../assets/BackgroundVideo.mp4'
import { motion } from 'framer-motion'
import github from 'devicon/icons/github/github-original.svg'
import linkedin from 'devicon/icons/linkedin/linkedin-original.svg'
import google from 'devicon/icons/google/google-original.svg'
import fotoPerfil from '../../assets/foto_perfil.jpeg'

export const AboutMeSection = () => {
  return (
    <S.AboutMeSectionContainer id='SobreMim'>
      <h1>Sobre Mim</h1>
      <S.AboutMeSection>
      <S.AboutMeSectionImage src={fotoPerfil} alt="" />
      <S.AboutMeSectionDescription>
        <p>Iniciei os estudos em programação, porquê desde os meus 10 anos gosto de mexer em computador, 
        há dois anos vi que para me especializar na área teria que fazer um curso ou faculdade, e estava desempregado e fui atrás de uma oportunidade
        de emprego em outra área para conquistar um computador melhor e iniciar no curso da EBAC.
        </p>
        <p>
        A partir daí aprendi muitas coisas, porém sinto que tenho muito à aprender, estou buscando minha primeira experiência em desenvolvimento web
        e pretendo cursar a faculdade de progamação, para obter conhecimento e me aprofundar na área.
        </p>
      </S.AboutMeSectionDescription>
      </S.AboutMeSection>
      <S.Contacts>
        <h1>Converse Comigo!</h1>
        <S.ContactsListContainer>
          <S.ContactsList>
            <S.ContactsListItem>
              <S.ContactsLinks
              variants={{
                animation: { rotate: 2, scale: 1.2 }
              }}
              whileHover="animation"
              target='_blank' href="https://github.com/R4NP3R">
                <img src={github} alt="" />
                <p>/R4NP3R</p>
              </S.ContactsLinks>
            </S.ContactsListItem>
            <S.ContactsListItem>
              <S.ContactsLinks 
                variants={{
                  animation: { rotate: -2, scale: 1.2 }
                }}
                whileHover="animation"
                target='_blank' href="https://www.linkedin.com/in/7-rafael-santos/">
                  <img src={linkedin} alt="" />
                  <p>/7-rafael-santos</p>
              </S.ContactsLinks>
            </S.ContactsListItem>
            <S.ContactsListItem>
              <S.ContactsLinks 
                variants={{
                  animation: { rotate: 2, scale: 1.2 }
                }}
                whileHover="animation"
                target='_blank' href="mailto:ssrafa.2014@gmail.com">
                  <img src={google} alt="" />
                  <p>ssrafa.2014@gmail.com</p>
              </S.ContactsLinks>
            </S.ContactsListItem>
          </S.ContactsList>
        </S.ContactsListContainer>
      </S.Contacts>
      <S.BackgroundVideo
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.2}} 
      >
        <motion.video      
        autoPlay
        loop
        muted
        >
          <source src={video} type="video/mp4" />
        </motion.video>
      </S.BackgroundVideo>
      

    </S.AboutMeSectionContainer>
  )
}
