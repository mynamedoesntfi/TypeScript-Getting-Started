module.exports = {
	// Required since entry point is not './src'
	entry: './js/app.js',
	// devtool: 'inline-source-map',
	// mode: 'development',
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.tsx?$/,
	// 			use: 'ts-loader',
	// 			exclude: /node_modules/,
	// 		},
	// 	],
	// },
	// resolve: {
	// 	extensions: ['.tsx', '.ts', '.js'],
	// },
	// output: {
	// 	// Result of the transpiling - not stored on disk, but only on memeory and set to client browser
	// 	filename: 'bundle.js',
	// },
	devServer: {
		// Set to be able to manually refresh the web page to see its action instead of auto-reload
		inline: false,
	},
};
