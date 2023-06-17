import './news.css';
import { newsObjData } from '../../../types';

class News {
  public draw(data: Array<newsObjData>): void {
    const news: newsObjData[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item:newsObjData, idx: number): void => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

      if (idx % 2) {
        const newsItem = newsClone.querySelector('.news__item') as HTMLDivElement;
        newsItem.classList.add('alt');
      }

      const newsMetaPhoto= newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
      newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || './news_placeholder.jpg'})`;

      const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
      newsMetaAuthor.textContent = item.author || item.source.name;

      const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
      newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLHeadingElement;
      newsDescriptionTitle.textContent = item.title;

      const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLHeadingElement;
      newsDescriptionSource.textContent = item.source.name;

      const newsDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLParagraphElement;
      newsDescriptionContent.textContent = item.description;

      const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLParagraphElement;
      newsReadMore.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const newsTemp = document.querySelector('.news') as HTMLDivElement;
    newsTemp.innerHTML = '';
    newsTemp.appendChild(fragment);
  }
}

export default News;
