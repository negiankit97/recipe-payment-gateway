import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import {makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        margin: theme.spacing(2),
    }
}))
const RecipeList = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.margin} spacing={5} justify="center">{props.recipes.map((recipe) => (
            <Recipe
                key={recipe.id}
                name={recipe.name}
                img={recipe.image}
                category={recipe.category}
                label={recipe.label}
                price={recipe.price}
                desc={recipe.description}
            ></Recipe>
        ))}</Grid>
    );
};

RecipeList.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};
export default RecipeList;
