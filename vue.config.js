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
                target: 'http://47.117.137.199/',
                pathRewrite: {
                    '/api': '/api',
                },
            }
        },
    }
}
