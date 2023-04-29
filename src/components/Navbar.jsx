import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const Logo = styled.img`
  height: 70px;
  padding: 20px;
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`

const ListItem = styled.li`
  cursor: pointer;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #8c52ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.svg" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}
