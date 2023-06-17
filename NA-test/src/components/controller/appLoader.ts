import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: '548f65b46fab4add9cc2eb1a62bd51d5', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
