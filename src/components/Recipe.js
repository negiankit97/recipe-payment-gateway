import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        maxWidth: 600,
        display: 'flex',
        justifyContent: 'center',
        marginRight: theme.spacing(0),
        marginBottom: theme.spacing(2),
        borderRadius: 10
    },
    media: {
        paddingTop: 56.79,
        height: 200,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: theme.spacing(1)
    }
}));

const Recipe = (props) => {
    const classes = useStyle();
    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Link to={{ pathname: "/payment", state: { price: props.price } }} style={{ textDecoration: 'none' }}>
                <Card className={classes.root} elevation={10}>
                    <CardActionArea>
                        <CardHeader title={props.name} className={classes.header} subheader={props.category}></CardHeader>
                        <CardMedia image={props.img} title={props.name} className={classes.media} />
                        <CardContent>
                            <Box overflow="ellipsis" width="20rem">
                                <Typography noWrap>{props.desc}</Typography>
                            </Box>
                            <div className={classes.content}>
                                <Typography variant="subtitle1">{props.price}</Typography>
                                <Typography variant="subtitle2">{props.label}</Typography>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" variant="outlined">ORDER NOW</Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );
}

export default Recipe;