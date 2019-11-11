import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('GET_MOVIES_GENRES', getMoviesGenres);
    yield takeEvery('EDIT_MOVIE', editCurrentMovie);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the relational data from movies_genres table
const moviesGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the user selected movie data to render on details page
const currentMovie = (state = {}, action) => {
        if (action.type === 'CURRENT_MOVIE') {
            return action.payload;
        }
        return state;
    }

// Used to store the genres of user selected movie
const currentGenre = (state = [], action) => {
    if (action.type === 'CURRENT_GENRE') {
        return [ ...action.payload ];
    }
    return state;
}

// Fetches all data from movies table in database
function* getMovies(action) {
    try
    {const moviesResponse = yield axios.get('/movies');
    yield put({ type: 'SET_MOVIES', payload: moviesResponse.data });
     console.log('getMovies was hit with action:', action);
    } catch(error){
        console.log('error fetching movies', error);
    }
} // End getMovies

// Fetches all data from genres table in database
function* getGenres(action) {
    try
    {const genresResponse = yield axios.get('/genres');
    yield put({ type: 'SET_GENRES', payload: genresResponse.data });
     console.log('getGenres was hit with action:', action);
    } catch(error){
        console.log('error fetching genres', error);
    }
} // End getGenres

// Fetches all data from movies_genres table in database
function* getMoviesGenres(action) {
    try
    {const moviesGenresResponse = yield axios.get('/movies_genres');
    yield put({ type: 'SET_MOVIES_GENRES', payload: moviesGenresResponse.data });
     console.log('getMoviesGenres was hit with action:', action);
    } catch(error){
        console.log('error fetching movies_genres', error);
    }
} // End getMoviesGenres

// Edits title and description of current movie 
function* editCurrentMovie(action) {
    try
    {const editCurrentMovieResponse = yield axios.put('/edit/movie', action.payload);
    yield put({ type: 'SET_MOVIES', payload: editCurrentMovieResponse });
     console.log('editCurrentMovie was hit with action:', action);
    } catch(error){
        console.log('error editing currentMovie', error);
    }
} // End editCurrentMovie

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        moviesGenres,
        currentMovie,
        currentGenre,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
