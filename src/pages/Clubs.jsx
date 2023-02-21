import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid';
import WineBarIcon from '@mui/icons-material/WineBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import logo from '../assets/img/card_logo.jpeg'

const Clubs = () => {
    return (
        <>
            <Card
                className='grape-card'
                sx={{ minWidth: 275 }}
                square={true}
            >
                <CardContent className="content-card">
                    <h1> Wine Clubs - Join one or more!</h1>
                    <h3>Wine Club Benefits:  Besides experiencing new wines, </h3>
                    <h3>joining the Wine Club has many perks!</h3>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary=" No corkage fee for bottles opened for you enjoyment on premise" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary=" 10% off purchases of 6 bottles or more bottles " />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="15% off purchases of 12 or more bottles" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary=" 15% off Wine Club Selections for 30 days - on ALL wine clubs" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Special invitations to Wine Club only events" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Reduced price admission to most special events and tastings" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Priority notifications of limited availability wines " />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Complimentary monthly Wine Club Release tasting for two" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Tasting notes included with your wines" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WineBarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Early access to the Annual Sale!!" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
            <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                    <Card
                        className='grape-card club-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardMedia style={{ padding: "none", margin: "none" }}
                            component="img"
                            alt="logo"
                            image={logo}
                        />
                        <CardContent className="content-card">
                            <h3>Bub Club</h3>
                            <p>$100 plus tax quarterly.
                                We find you a seasonal selection of a varying
                                amount of bubbles each quarter. Maybe a spring prosecco
                                pack, or a magnum of something special for the holidays!
                                You will always be delighted by the selections we make for you.</p>
                            <Button
                                sx={{ backgroundColor: "#590c3a" }}
                                variant="contained">Sign Up</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card
                        className='grape-card club-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardMedia style={{ padding: "none", margin: "none" }}
                            component="img"
                            alt="logo"
                            image={logo}
                        />
                        <CardContent className="content-card">
                            <h3>Cellar Club</h3>
                            <p>$150 plus tax per quarter. We select two high end, special red wines from
                                around the world (usually one new world, one old world) that are great now
                                or even better if cellared and drank in 5-10 years. This club is an employee
                                favorite!</p>
                            <Button
                                sx={{ backgroundColor: "#590c3a" }}
                                variant="contained">Sign Up</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card
                        className='grape-card club-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardMedia style={{ padding: "none", margin: "none" }}
                            component="img"
                            alt="logo"
                            image={logo}
                        />
                        <CardContent className="content-card">
                            <h3>Club Red</h3>
                            <p>$45 per month. We select for you two red wines
                                (usually one new world and one old world) that we think are
                                crowd pleasing every day drinkers.</p>
                            <Button
                                sx={{ backgroundColor: "#590c3a" }}
                                variant="contained">Sign Up</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card
                        className='grape-card club-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardMedia style={{ padding: "none", margin: "none" }}
                            component="img"
                            alt="logo"
                            image={logo}
                        />
                        <CardContent className="content-card">
                            <h3>Hybrid Club</h3>
                            <p>$65 a month. Get all three wines featured in club red and 50/50.
                                2 reds and 1 white wine, daily drinkers we know you will love!</p>
                            <Button
                                sx={{ backgroundColor: "#590c3a" }}
                                variant="contained">Sign Up</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card
                        className='grape-card club-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardMedia style={{ padding: "none", margin: "none" }}
                            component="img"
                            alt="logo"
                            image={logo}
                        />
                        <CardContent className="content-card">
                            <h3>50/50</h3>
                            <p>$45 plus tax per month. We select for you one white wine and one
                                red wine that we consider to be great daily drinkers and crowd pleasers!</p>
                            <Button
                                sx={{ backgroundColor: "#590c3a" }}
                                variant="contained">Sign Up</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card
                        className='grape-card club-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardMedia style={{ padding: "none", margin: "none" }}
                            component="img"
                            alt="logo"
                            image={logo}
                        />
                        <CardContent className="content-card">
                            <h3>Seasonal Rose Club</h3>
                            <p>Coming Back Spring 2023!</p>
                            <Button
                                sx={{ backgroundColor: "#590c3a" }}
                                variant="contained">Sign Up</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Clubs