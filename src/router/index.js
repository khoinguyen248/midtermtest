import { Router } from "express";
import movieRouter from "./movies.js";


const Root = Router()

Root.use('/movies', movieRouter )

export default Root