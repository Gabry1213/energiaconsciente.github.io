import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import Cover from './components/Cover'
import EnergiaClassificacao from './contents/energia.classificação'
import Energia from './contents/energia'
import EnergiaEletrica from './contents/energia.eletrica'
import EnergiaFontes from './contents/energia.fontes'
import EnergiaBrasil from './contents/EnergiaBrasil'
import EnergiaDesperdicio from './contents/EnergiaDesperdicio'


export default function Home() {
  return (
    <Container>
      <Head>
        <title>Energia</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <Cover/>
        <Container>
          <Energia/>
          <EnergiaEletrica/>
          <EnergiaClassificacao/>
          <EnergiaFontes/>
          <EnergiaBrasil/>
          <EnergiaDesperdicio/>
        </Container>
      </Container>

      <footer className="cntr-footer">
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
        </a>
      </footer>
    </Container>
  )
}
