import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormControl, Grid, TextField, Typography, Button } from '@material-ui/core';

const OtpVerification = (props) => {
    const history = useHistory();
    const [otp, setOtp] = useState('');
    function handleSubmit(e) {
        e.preventDefault();

        if (otp !== '123456') {
            history.push('paymentFailure');
        } else {
            history.push('paymentSuccess');
        }
    }
    function handleChange(e) {
        setOtp(e.target.value);
    }
    return (
        <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h3">OTP Details</Typography>
                <Typography variant="body1">Enter the OTP details received (For success, enter 123456)</Typography>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <TextField
                            variant="outlined"
                            id="otp-details"
                            label="Enter OTP"
                            helperText="OTP details(length atmost to be 6)"
                            autoFocus={true}
                            type="password"
                            error={!otp? true: false}
                            value={otp}
                            onChange={handleChange}
                        />
                        <Button variant="outlined" color="primary" type="submit">Submit</Button>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    );
}

export default OtpVerification;