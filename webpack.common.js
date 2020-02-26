module.exports = {
    entry: {
        index: './src/js/index.js',
        //counter1: './src/js/counter1.js',
        //counter2: './src/js/counter2.js',
        //do_count_up1: './src/js/do_count_up1.js',
        //do_count_up2: './src/js/do_count_up2.js',
        do_count_ups: [
            './src/js/do_count_up1.js',
            './src/js/do_count_up2.js'
        ],
        background: './src/js/background.js'
    },
    output: {
        filename: '[name].js'
    },
    /*
    optimization: {
        splitChunks: {
            cacheGroups: {
                counter: {
                    name: 'counter',
                    chunks: 'all',
                    enforce: true
                }
            }
        },
    }
    */
};
