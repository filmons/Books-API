import dotenv from 'dotenv' 

dotenv.config();

const env = {
    app_port: process.env.APP_PORT  || 3000 ,
    password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	user:process.env.DB_USER,
	host: process.env.DB_HOST,
	dialect: "mysql",
	jwt_secret:process.env.JWT_SECRET,
};

export default env;