import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import glasses from '../assets/img/glasses.jpeg'
import pouring_wine from '../assets/img/pouring_wine.jpeg'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'



const Dashboard = () => {
    //state for the newsletter signup modal
    const [showModal, setShowModal] = useState(false)
    //state to handle the newsletter signup form
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    })
    //ref for the outside-click functionality on the modal
    const modalRef = useRef(null)
    //handles changes to newsletter signup form fields
    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    //submits form
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    //effect to make the modal pop up
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowModal(true)
        }, 10000) // 10 seconds

        return () => clearTimeout(timeout)
    }, [])
    //effect to handle closing the modal if user clicks outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [])

    return (
        <>
            <div>
                {showModal && (
                    <Card ref={modalRef} className="popup-modal">
                        <IconButton
                                sx={{ cursor: 'pointer', float: 'right', marginTop: '0px'}}
                                // variant="text"
                                onClick={() => setShowModal(false)}
                        ><CloseIcon /></IconButton>
                        <CardContent className='content-card'>

                            <h3>Sign up for the Grape Choice Newsletter!</h3>
                            <p>Get news from The Grape Choice in your inbox regarding tastings, specials and events.</p>
                            <form onSubmit={handleSubmit}>

                                <TextField
                                    label="First Name"
                                    name="firstName"
                                    value={formState.firstName}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth="true"
                                />
                                <br />
                                <TextField
                                    label="Last Name"
                                    name="lastName"
                                    value={formState.lastName}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth="true"
                                />
                                <br />
                                <TextField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth="true"
                                />
                                <br />
                                <TextField
                                    label="Phone"
                                    name="phone"
                                    type="tel"
                                    value={formState.phone}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth="true"
                                />
                                <br />
                                <br />
                                <Button type="submit"
                                    sx={{ backgroundColor: "#590c3a" }}
                                    variant="contained"
                                >Submit</Button>
                            </form>
                            <br />

                        </CardContent>
                    </Card>
                )}
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card className='grape-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardMedia style={{ padding: "none", margin: "none" }}
                            component="img"
                            alt="wine glasses"
                            image={glasses}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className='grape-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardContent className='content-card'>
                            <h1>Our Patio is Open!</h1>
                            <h3>Hours:</h3>
                            <h3>Sun thru Tues: 12pm to 7pm</h3>
                            <h3>Wed thru Sat 11am to 9pm</h3>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card className='grape-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardContent className="content-card">
                            <ul>
                                <li>We have tents and heaters available, as well as some blankets.</li>
                                <li>We have several small plates available for purchase if you are hungry!</li>
                                <li>We also highly encourage you to support your local restaurants that may not
                                    have outdoor seating options by getting
                                    their food to go and enjoying it here with your glass of wine or beer!</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className='grape-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardContent className="content-card">
                            <h3>Never been to The Grape Choice?</h3>
                            <p> We are a small, family-owned (Mayor Penny Sweet and State Representative Larry Springer, owners) wine store and wine bar!</p>
                            <p>We have been in Kirkland for nearly 40 years, providing the community with the largest privately-owned wine selection on the eastside. </p>
                            <p>We have a large selection of international and domestic wines, with a large focus on getting you the things you can’t get just anywhere.</p>
                            <p>As far as the bar goes, we have wines by the glass or bottle with choices that rotate often, and over 30 canned beers/ciders. </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className='grape-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardMedia style={{ padding: "none", margin: "none" }}
                            component="img"
                            alt="pouring wine"
                            image={pouring_wine}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className='grape-card'
                        sx={{ minWidth: 275 }}
                        square={true}
                    >
                        <CardContent className="content-card">
                            <h3>And there's more!</h3>
                            <p>We offer small plates, and we allow outside food (not drinks) to be enjoyed on our patio with purchase from our bar.
                                Our staff is knowledgeable and friendly, and we are often referred to as the “Cheers” of the community.</p>

                            <p><em>Tastings are back!</em> Wednesday tastings are in full swing, and we will have pop-up tastings from time to time on other days.
                                Follow us on social media and join the newsletter to stay up to date!</p>

                            <p>Wednesday tastings are from 5-8pm. We feature a different winery or theme each week.</p>
                            <p>Don’t forget to follow us on Instagram and/or Facebook to keep up to date with all that’s happening
                                here each day!
                                See our <Link to="/tastings" style={{ textDecoration: 'none' }}>EVENT CALENDAR</Link> for all that's going on at the Grape!</p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard