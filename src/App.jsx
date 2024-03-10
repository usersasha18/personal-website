import Header from "./components/Header/Header";
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer'
import styled from 'styled-components';
import './global.css'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`

function App() {
  return (
    <Container>
      <Header />
      <MainContent />
      <Footer />
    </Container>
  )
}

export default App
