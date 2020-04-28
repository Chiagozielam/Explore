import React from 'react';
import { Grid, Advertisement } from 'semantic-ui-react'
import SearchBar from '../components/search/SearchBar';
import { TopCard, RegularCard } from '../components/cards'
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
          <Grid className="top-card-grid">
            <Column width={5}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992037/ajt-bin-haddu-4753097_640.jpg"
                continent="Africa"
                description="View all amazing and stunning places around Africa"
              />
            </Column>
            <Column width={5}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1588036752/statue-of-liberty-271430_640.jpg"
                continent="America"
                description="View all amazing and stunning places around America"
              />
            </Column>
            <Column width={5}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992036/sydney-4034244_640.jpg"
                continent="Australia"
                description="View all amazing and stunning places around Australia"
              />
            </Column>
            <Column width={5}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992037/takshang-669959_640.jpg"
                continent="Asia"
                description="View all amazing and stunning places around Asia"
              />
            </Column>
            <Column width={5}>
              <TopCard
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992036/river-690374_640.jpg"
                continent="Europe"
                description="View all amazing and stunning places around Europe"
              />
            </Column>
          </Grid>
        </Column>
      </Grid>
      <section className="space top-locations-section">
        <p className="space home-top-cards-headline"><span>Most</span> visited places</p>
          <Grid>
            <Column width={4}>
              <RegularCard />
            </Column>
            <Column width={4}>
              <RegularCard />
            </Column>
            <Column width={4}>
              <RegularCard />
            </Column>
            <Column width={4}>
              <RegularCard />
            </Column>
            <Column width={4}>
              <RegularCard />
            </Column>
            <Column width={4}>
              <RegularCard />
            </Column>
            <Column width={4}>
              <RegularCard />
            </Column>
            <Column width={4}>
              <RegularCard />
            </Column>
          </Grid>
          </section>
          <div className="space" style={{height: "1000px"}}></div>
    </div>
  )
}

export default Home
