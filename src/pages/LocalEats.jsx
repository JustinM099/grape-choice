import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import club_sandwich from '../assets/img/club-sandwich.jpg'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import WineBarIcon from '@mui/icons-material/WineBar'
import CardHeader from '@mui/material/CardHeader'
import { Link } from 'react-router-dom'

const LocalEats = () => {
    
    const eatsArray = []
    
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
                            image={club_sandwich}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className='grape-card'
                        sx={{ minWidth: 275, margin: '2%' }}
                        square={true}
                    >
                        <CardContent className="content-card">
                            <h1>Local Eats</h1>
                            <h3>Below is a restaurant list within walking distance of The Grape Choice that have online ordering systems.</h3>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className="content-card"
                            sx={{ minWidth: 275, margin: '2%' }}
                            square={true}>
                        <CardContent className="content-card">
                            <List sx={{ marginLeft: '3%', marginRight: '3%', padding: '3%' }}
                            
                            >    
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Homegrown online ordering, pickup or delivery by (DoorDash). Sandwiches, salads, soups." />
                            </ListItemButton>
                                </ListItem>
                                <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Just Poke online ordering pickup and delivery." />
                            </ListItemButton>
                                </ListItem>
                                <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Coastline Burgers online ordering pickup and delivery." />
                            </ListItemButton>
                                </ListItem>
                                <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="The Slip online ordering for pickup, call in your order and they’ll run it down. Burgers, Salads, Appetizers." />
                            </ListItemButton>
                                </ListItem>
                                <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Vovina online ordering for pickup, located just next to Flatstick pub. High end bar bites." />
                            </ListItemButton>
                                </ListItem>
                                <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Georges online ordering for pickup. Delivery by DoorDash and Grubhub." />
                            </ListItemButton>
                                </ListItem>
                                <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Alanya Café  online ordering for pickup, delivery by Eat24 Eat24 (located just at the top of building on the corner) Turkish and American food." />
                            </ListItemButton>
                                </ListItem>
                                <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Cactus  online ordering for pickup and delivery. TexMex." />
                            </ListItemButton>
                                </ListItem>
                                <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Hanuman Thai Food. online ordering for pickup, delivery by DoorDash." />
                            </ListItemButton>
                                </ListItem>
                                <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Isarn Thai Kitchen  (more upscale) online ordering for pickup, delivery by DoorDash." />
                            </ListItemButton>
                                </ListItem>
                            </List>
                            </CardContent>
                        </Card>
                </Grid>
            </Grid >
        </>
    )
}

export default LocalEats