import { Suspense } from 'react'

import { Navbar } from '../Navbar'

import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import {
  Button,
  Container,
  Desc,
  Img,
  Left,
  Right,
  Section,
  Title,
} from './styles'

export function Home() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Hello, I'am Pedro Ferreira.</Title>
          <Desc>
            My name is <strong>Pedro Ferreira</strong> , I'm 21 years old, I've
            been working with programming for 4 years. I currently live in
            Brazil, working with (Java Script, React, Next.js, Node.js, React
            Native, GoLang, and others).
          </Desc>
          <Button>Read More</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  color="#8C52FF"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/home.png" />
        </Right>
      </Container>
    </Section>
  )
}
