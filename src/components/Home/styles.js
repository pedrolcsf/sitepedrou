import styled from 'styled-components'

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const Title = styled.h1`
  font-size: 74px;
`

export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Line = styled.img`
  height: 5px;
`

export const Subtitle = styled.h2`
  color: #cb6ce6;
`
export const Desc = styled.p`
  font-size: 18px;
  color: lightgray;
`
export const Button = styled.button`
  background-color: #cb6ce6;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const Right = styled.div`
  flex: 3;
  position: relative;
`
export const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`
