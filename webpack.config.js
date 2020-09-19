var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/SkillSet.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'SkillSet.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    externals: {
	    react: {
		root: 'React',
		commonjs2: 'react',
		commonjs: 'react',
		amd: 'react'
	    },
	    'react-dom': {
		root: 'ReactDOM',
		commonjs2: 'react-dom',
		commonjs: 'react-dom',
		amd: 'react-dom'
	    }
    },
}
