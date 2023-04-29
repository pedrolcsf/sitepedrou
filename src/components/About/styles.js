import styled from 'styled-components'

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  flex: 1;
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
  flex: 1;
  display: flex;
  margin-left: 40px;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const LinkButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    display: flex;
    color: white;
    font-weight: 500;
    padding: 10px;
    align-items: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`
