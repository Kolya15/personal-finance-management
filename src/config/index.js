const config = {
    port: 3000,
    jwt: {
        secretKey: 'SECRET_KEY_RANDOM',
        expires: "24h"
    },
    dataBase: {
        baseUrl: 'mongodb+srv://kolya:U407KXno5pOI3rD8@cluster0.8flk0.mongodb.net/pfm'
    }
}

module.exports = config