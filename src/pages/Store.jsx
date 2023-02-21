import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import wine_into_glass from '../assets/img/wine_into_glass.jpeg'

const Store = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Card className='grape-card'
                        sx={{ minWidth: 275, margin: '2%' }}
                        square={true}>
                        <CardMedia style={{ padding: "none", margin: "none" }}
                            component="img"
                            alt="wine poured into a glass"
                            image={wine_into_glass}
                        />
                        </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className='grape-card'
                        sx={{ minWidth: 275, margin: '2%' }}
                        square={true}>
                        <CardContent className="content-card">
                            <h1>Online Shopping</h1>
                            <p>We love to pick out wines for our customers! Please call us at <a href="tel:+14258277551" style={{ textDecoration: 'none' }}>425-827-7551</a> for a personalized shopping experience.</p>
                            <p>We offer in-store, curb-side pickup or free local delivery (within 5 miles). Orders are available within 24 hours of purchase!</p>
                            <p>You can also shop our online store for a handpicked selection of our giftable wines, wine packages, and our top selling every day wines!</p>
                            <a href="https://thegrapechoice.square.site/"
                                style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{ backgroundColor: "#590c3a" }}
                                    variant="contained">
                                    Visit Our Store
                                </Button>
                            </a>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid >
        </>
    )
}

export default Store