import dotenv from 'dotenv';
dotenv.config();

const config = {
    mysql : {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    },
    jwtSecretKey: process.env.JWT_KEY,
    jwtTokenLoginLifeTime: "1d",
    jwtTokenRefreshLifeTime: "7d",
    rootProjectPath: "saku-saku",
    imageUrlPath: (req) => {
        return `${req.protocol}://${req.get("host")}/saku-saku/images/`;
    }
}

export default config;