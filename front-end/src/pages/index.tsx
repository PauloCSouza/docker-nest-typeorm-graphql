import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Code from '../assets/vetor_code.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>

      <Image src={Code} width="640px" height="485px" />
      <h1>NextJS + Apollo</h1>
      <p>API NestJS + TypeORM + GraphQL + MongoDB.</p>
    </Container>
  )
}

export default Home
