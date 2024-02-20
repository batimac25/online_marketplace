const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "UeeLvuSF93LGo2Pr", 
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://tibursiasmachado:UeeLvuSF93LGo2Pr@Marketplace.ve4ktrf.mongodb.net/Marketplace?retryWrites=true&w=majority"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/mernproject' 
    }
    export default config
   
   