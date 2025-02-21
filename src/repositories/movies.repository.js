import movieModel from "../models/movies.js"

const movieRepository = {
    getTenbestMovies: async() => {
        const list = await movieModel.find({}).sort({ avgRate: -1 }).limit(10)
        return list
    },
    getMoviein2024: async()=> {
        const list = await movieModel.find({
            publishedYear: 2002
        })

        return list
    },
    getFrank: async() => {
        const list = await movieModel.find({
            actors: { $in: ["Frankie Scholte"] }
        })

        return list


    },
    getBengakey: async() => {
        const list = await movieModel.find({
            name: { $regex: "benga", $options: "i" }
        })

        return list
    },
   getMovies: async () => {
        try {
            const list = await movieModel.find({
                $expr: {
                    $and: [
                        { $gt: [{ $size: "$episodes" }, 5] }, 
                        { $lt: [{ $size: "$episodes" }, 10] } 
                    ]
                }
            });
    
            return list;
        } catch (error) {
            console.error("Error fetching movies with episodes between 5 and 10:", error);
            return [];
        }
    }
    
}

export default movieRepository