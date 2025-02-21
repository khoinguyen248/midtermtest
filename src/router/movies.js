import { Router } from "express";
import moviesController from "../controller/movies.controller.js";

const movieRouter = Router()

movieRouter.get('/amount', moviesController.moviesAmount)
movieRouter.get('/tenbestmovies', moviesController.getBestFilm)
movieRouter.get('/2024', moviesController.get2024movies)
movieRouter.get('/Frank-Scholte', moviesController.getFrank)
movieRouter.get('/5-10', moviesController.getMoviesEp)

movieRouter.get('/benga', moviesController.getBenga)

export default movieRouter