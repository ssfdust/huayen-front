module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        }
    },
    assetsDir: 'huayen/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5001/',
                pathRewrite: {
                    '/api': '/api',
                },
            }
        },
    }
}
