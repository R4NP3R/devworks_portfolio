import { InitialSection } from "./components/initialSection"
import { Header } from "./components/header"
import { GlobalCSS } from "./styles"
import { ProjectsSection } from "./components/projectSection"
import { AboutMeSection } from "./components/aboutMeSection"

function App() {

  return (
    <>
    <GlobalCSS />
    <Header />
    <InitialSection />
    <ProjectsSection />
    <AboutMeSection/>
    </>
  )
}

export default App
