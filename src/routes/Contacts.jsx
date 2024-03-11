import { useState, useEffect } from 'react';
import { FaTelegram , FaYoutube } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`

export default function Contacts() {

  const contacts_links = [
    {id: 1, title: "Telegram", icon: <FaTelegram  />, link: "https://t.me/sashaFeofanov"},
    {id: 2, title: "YouTube", icon: <FaYoutube/> , link: "https://www.youtube.com/channel/UCOwS9rKMmZjDfoC0W1yw--w"},
    {id: 3, title: "Вконтакте", icon: <SlSocialVkontakte />, link: 'https://vk.com/xerrl'}
  ]

  return (
    <>
    <Container>
      <Header />
      <div className='contacts_wrapper'>
      {contacts_links.map(item => (
        <div className={`contact_item`} key={item.id}>
          {item.icon}
          {item.title}
          </div>
      ))}
      </div>
      {/* <Footer /> */}
    </Container>
    </>
  )
}
