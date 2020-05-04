import React from 'react';
import { Grid, Advertisement, Responsive } from 'semantic-ui-react'
import SearchBar from '../components/search/SearchBar';
import { TopCard, RegularCard } from '../components/cards'
import './css/home.css';

const Home = () => {
  const { Column } = Grid;
  return (
    <div>


      <div className="mobile-topo-cards-container">
        <h2 className="explore-header">Explore</h2>
        <SearchBar />
        <p className="home-top-cards-headline"><span>Discover</span> new places</p>
        <Grid className="top-card-grid space">
            <Column mobile={12}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992037/ajt-bin-haddu-4753097_640.jpg"
                continent="Africa"
                description="View all amazing and stunning places around Africa"
              />
            </Column>
            <Column mobile={12}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1588036752/statue-of-liberty-271430_640.jpg"
                continent="America"
                description="View all amazing and stunning places around America"
              />
            </Column>
            <Column mobile={12}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992036/sydney-4034244_640.jpg"
                continent="Australia"
                description="View all amazing and stunning places around Australia"
              />
            </Column>
            <Column mobile={12}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992037/takshang-669959_640.jpg"
                continent="Asia"
                description="View all amazing and stunning places around Asia"
              />
            </Column>
            <Column mobile={12}>
              <TopCard
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992036/river-690374_640.jpg"
                continent="Europe"
                description="View all amazing and stunning places around Europe"
              />
            </Column>
          </Grid>
      </div>


      <Grid>
        <Responsive minWidth={760}>
          <Column width={4}>
            <Advertisement unit="half page" test="Half Page" />
          </Column>
        </Responsive>
        <Column mobile={16} tablet={12} computer={10} className="top-cards-container">
          <SearchBar />
          <p className="home-top-cards-headline"><span>Discover</span> new places</p>
          <Grid className="top-card-grid space">
            <Column mobile={12}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992037/ajt-bin-haddu-4753097_640.jpg"
                continent="Africa"
                description="View all amazing and stunning places around Africa"
              />
            </Column>
            <Column mobile={12}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1588036752/statue-of-liberty-271430_640.jpg"
                continent="America"
                description="View all amazing and stunning places around America"
              />
            </Column>
            <Column mobile={12}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992036/sydney-4034244_640.jpg"
                continent="Australia"
                description="View all amazing and stunning places around Australia"
              />
            </Column>
            <Column mobile={12}>
              <TopCard 
                imageUrl="https://res.cloudinary.com/dcft8yhab/image/upload/v1587992037/takshang-669959_640.jpg"
                continent="Asia"
                description="View all amazing and stunning places around Asia"
              />
            </Column>
            <Column mobile={12}>
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
            <Column mobile={8} tablet={4} computer={4}>
              <RegularCard />
            </Column>
            <Column mobile={8} tablet={4} computer={4}>
              <RegularCard />
            </Column>
            <Column mobile={8} tablet={4} computer={4}>
              <RegularCard />
            </Column>
            <Column mobile={8} tablet={4} computer={4}>
              <RegularCard />
            </Column>
            <Column mobile={8} tablet={4} computer={4}>
              <RegularCard />
            </Column>
            <Column mobile={8} tablet={4} computer={4}>
              <RegularCard />
            </Column>
            
          </Grid>
          </section>
          <div className="space" style={{height: "1000px"}}></div>
    </div>
  )
}

export default Home
