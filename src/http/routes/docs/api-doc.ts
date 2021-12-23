export const apiDoc = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Suppliers and Order Space',
        description: 'Suppliers and Order service REST API',
        contact: {
            name: 'Samy Ouaret',
            email: 'samyouaret13@gmail.com',
            url: 'https://samyouaret.com/'
        },
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT'
        }
    },
    servers: [
        {
            url: 'http://localhost:3000/',
            description: 'Local server'
        },
    ],
};