import styled from 'styled-components'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Works } from './components/Works'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    133deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(51, 51, 51, 1) 98%
  );
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  return (
    <Container>
      <Home />
      <About />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
