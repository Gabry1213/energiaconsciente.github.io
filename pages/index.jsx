import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Cover from './components/Cover'
import Header from './components/Header'
import EnergiaClassificacao from './contents/energia.classificação'
import Energia from './contents/energia'
import EnergiaEletrica from './contents/energia.eletrica'
import EnergiaFontes from './contents/energia.fontes'
import EnergiaBrasil from './contents/EnergiaBrasil'
import EnergiaDesperdicio from './contents/EnergiaDesperdicio'
import Carousel from './components/Carousel'
import Footer from './components/Footer'


export default function Home() {
  return (
    <Container>
      <Head>
        <title>Energia</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header/>
      <Cover/>
      <Container>
        <EnergiaEletrica/>
        <EnergiaClassificacao/>
        <EnergiaFontes/>
        <EnergiaBrasil/>
        <EnergiaDesperdicio/>
      </Container>
      <Footer/>
    </Container>
  )
}
