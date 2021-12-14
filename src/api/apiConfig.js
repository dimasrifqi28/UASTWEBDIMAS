const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '06e8c5b4fe76ffaa0b1fd0011c589c9e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;