import { Button, FormControl, InputAdornment, makeStyles, TextField, Typography, Divider } from '@material-ui/core';
import { FaUserCircle } from 'react-icons/fa';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: theme.spacing(1),
    },
    title: {
        textAlign: 'center'
    },
    price: {
        textAlign: 'center'
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(5)
    },
    input: {
        marginBottom: theme.spacing(2)
    },
    btn: {
        padding: theme.spacing(1)
    }
}))
const PaymentGateway = (props) => {
    const history = useHistory();

    const [card, setCard] = useState(null);

    // Handles the form submission
    function handleSubmit(e) {
        e.preventDefault();
        history.push('/verifyotp');
    }

    // Defining material UI styles.
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.title}>Payment Details</Typography>
            <Typography variant="h1" className={classes.price}>Price: {props.location.state.price}</Typography>
            <Divider />
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <FormControl>
                    <TextField
                        className={classes.input}
                        size="medium"
                        label="Name"
                        id="name"
                        helperText="Full Name"
                        autoFocus={true}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaUserCircle />
                                </InputAdornment>
                            )
                        }}
                    ></TextField>
                    <TextField
                        className={classes.input}
                        id="card-details"
                        label="Card Number"
                        helperText="Enter Random Card Detail"
                    />
                    <TextField
                        className={classes.input}
                        id="CVV"
                        label="CVV"
                        helperText="Enter CVV"
                        inputMode="numeric"
                        type="password"
                    />
                    <TextField
                        className={classes.input}
                        id="date"
                        helperText="Expiry Date"
                        inputMode="numeric"
                        type="date"
                    />
                    <Button type="submit" size="large" variant="outlined" color="primary" className={classes.btn}>Submit</Button>
                </FormControl>
            </form>
        </div>
    );
}

export default PaymentGateway;