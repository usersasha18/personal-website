import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`

export default function About() {
  return (
    <>
    <Container>
      <Header />
      <div>About</div>
      {/* <Footer /> */}
    </Container>
    </>
  )
}
