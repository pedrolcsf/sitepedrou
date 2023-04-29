import { Suspense } from 'react'

import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
} from 'react-icons/ri'

import {
  Container,
  Desc,
  Left,
  LinkButtons,
  Right,
  Section,
  Title,
} from './styles'
import { Model } from '../3D/Hacker-room'

export function About() {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas>
            <Suspense>
              <Stage environment="city">
                <Model />
              </Stage>
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Pedro Ferreira</Title>
          <Desc>
            Hello, my name is Pedro Ferreira, I'm 21 years old, I live in
            Brazil. I've been working with programming for about 4 years.
          </Desc>

          <Desc>
            Programmer, currently working as a freelancer. I also have
            experience in web and backend development.
          </Desc>

          <Desc>
            I am passionate about web and mobile development technologies.
            Having experiences in projects using JavaScript, Typescript, NodeJS,
            ReactJS, Next.js and React Native.
          </Desc>

          <LinkButtons>
            <a
              style={{
                background: '#171515',
              }}
              href="https://github.com/pedrolcsf"
            >
              <RiGithubLine />
            </a>
            <a
              style={{
                background: '#00acee',
              }}
              href="https://twitter.com/pedrolcsf"
            >
              <RiTwitterLine />
            </a>
            <a
              style={{
                background: '#0e76a8',
              }}
              href="https://linkedin.com/in/pedrolcsf"
            >
              <RiLinkedinLine />
            </a>
            <a
              style={{
                background:
                  'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
              }}
              href="https://instagram.com/pedrolcsf"
            >
              <RiInstagramLine />
            </a>
          </LinkButtons>
        </Right>
      </Container>
    </Section>
  )
}
