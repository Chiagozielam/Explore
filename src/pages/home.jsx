import React from 'react';
import { Grid, Advertisement } from 'semantic-ui-react'
import SearchBar from '../components/search/SearchBar';
import TopCard from '../components/cards/TopCard';
import './css/home.css'

const Home = () => {
  const { Column } = Grid;
  return (
    <div>
      <Grid>
        <Column width={4}>
          <Advertisement unit="half page" test="Half Page" />
        </Column>
        <Column width={12}>
          <SearchBar />
          <p className="space home-top-cards-headline"><span>Discover</span> new places</p>
          <TopCard />
          <div className="space" style={{height: "1000px"}}></div>
        </Column>
      </Grid>
    </div>
  )
}

export default Home
