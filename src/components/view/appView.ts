import News from './news/news';
import Sources from './sources/sources';
import { IAppData, newsObjData, sourceObjData } from '../../types';

export class AppView {
  private news: News;

  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: Partial<IAppData>) : void {
    const values: newsObjData[] = data?.articles ? data?.articles : [];
    console.log(data)
    this.news.draw(values);
  }

  public drawSources(data: Partial<IAppData>) : void {
    const values: sourceObjData[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
