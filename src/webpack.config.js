const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
    const envPath = env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : '.env';

    const config = {
        plugins: [
            new Dotenv({
                path: envPath
            })
        ]
    };

    return config;
};