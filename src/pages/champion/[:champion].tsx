import React, {  } from 'react'
import {MemoizedBackground } from '../../components/Background';
import Layout from '../../components/layout';
import ChampInfo from '../../components/ChampInfo';

function ChampPage() {

  return (
    <Layout>
      <MemoizedBackground />
      <ChampInfo />
    </Layout>
  )
}

export default ChampPage
