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
      <div className='about_wrapper'> 
        <img src="./WIN_20240309_08_47_52_Pro.jpg" alt="" />
        <div className='about_text'>
        Меня зовут Александр, я веб разработчик . Мой путь в it начался 20 года и после поступления в колледж на программиста. Я пробовал себя во многих направлениях, пробовал изучать язык Си, Python, попробовал свои силы в data science, но больше всего меня зацепила веб разработка! С мая 2022 года по апрель 2023 я изучал веб разработку самостоятельно. В настоящий работаю преподавателем фронтенда!
        </div>
      </div>
      {/* <Footer /> */}
    </Container>
    </>
  )
}
