import React from 'react';
import './MobileNav.css';
import { Link } from 'react-router-dom';
import { Icon, Grid } from 'semantic-ui-react';

const MobileNav = () => {
    const { Column } = Grid;
    return (
        <div className="mobile-nav-container">
            <Grid>
                <Column width={4}>
                    <div className="mobile-nav-grid-columns mobile-nav-active">
                        <Icon name="home" />
                    </div>
                </Column>
                <Column width={4}>
                    <div className="mobile-nav-grid-columns">
                        <Icon name="user" />
                    </div>
                </Column>
                <Column width={4}>
                    <div className="mobile-nav-grid-columns">
                        <Icon name="heart" />
                    </div>
                </Column>
                <Column width={4}>
                    <div className="mobile-nav-grid-columns">
                        <Icon name="bell" />
                    </div>
                </Column>
            </Grid>
        </div>
    )
}

export default MobileNav
