import React, { Component, Fragment } from 'react';
import RecipeList from './RecipeList';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Container, withStyles } from '@material-ui/core';

const URL = "http://starlord.hackerearth.com/recipe";

const useStyles = theme => ({
    root:{

    },
    title:{
        textAlign: 'center',
        marginBottom: theme.spacing(4)
    }
});

class HomePage extends Component {
    state = {
        recipes: JSON.parse(localStorage.getItem('recipes')) || [],
        error: false,
        loading: false
    };

    componentDidMount() {
        this.setState({ loading: true })
        axios.get(URL)
            .then(res => res.data)
            .then(recipes => {
                localStorage.setItem('recipes', JSON.stringify(recipes));
                this.setState({
                    recipes,
                    loading: false
                }
                );
            })
    }
    render() {
        const {recipes} = this.state;
        const {classes} = this.props;
        return (
            <Fragment>
                <header className="recipe__app__header">
                    <Typography variant='h4' className={classes.title}>Recipe Payment Gateway</Typography>
                </header>
                <Container fixed>
                    {recipes && <RecipeList recipes={recipes} />}
                </Container>
            </Fragment>
        );
    }
}

export default withStyles(useStyles, {withTheme: true})(HomePage);