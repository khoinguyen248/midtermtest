import movieModel from "../models/movies.js"
import movieRepository from "../repositories/movies.repository.js"


const moviesController = {
   moviesAmount: async(req, res) =>{
     const list = await movieModel.find({})
     const amount = list.length
     console.log(amount)

     res.status(200).send({
        amount: amount,

     })
   },
   getBestFilm: async(req, res) => {
      try {
         const result = await movieRepository.getTenbestMovies()

    

     res.status(200).send({
      data: result})
      } catch (error) {
         res.status(401).json(error.message)
      }
     
    

   },
   get2024movies: async(req, res) => {
      try {
         const result = await movieRepository.getMoviein2024()
         res.status(200).json(result)
      } catch (error) {
         
      }
   },
   getFrank: async(req, res) => {
      try {
         const result = await movieRepository.getFrank()
         res.status(200).json(result)
      } catch (error) {
         
      }
   },
   getBenga: async(req, res) => {
      try {
         const result = await movieRepository.getBengakey()
         res.status(200).json(result)
      } catch (error) {
         
      }
   },
   getMoviesEp: async(req, res) => {
      try {
         const result = await movieRepository.getMovies()
         res.status(200).json(result)
      } catch (error) {
         
      }
   }
}

export default moviesController