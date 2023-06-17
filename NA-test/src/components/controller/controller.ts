import AppLoader from './appLoader';
import { callbackFunction} from '../../types';



class AppController extends AppLoader {
  public getSources(callback: callbackFunction): void {
    
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  public getNews(e:Event, callback: callbackFunction) : void {
    let target = e.target as HTMLElement ;
    const newsContainer = e.currentTarget as HTMLDivElement;


    while (target !== newsContainer) {
        if (target.classList.contains('source__item')) {
          const sourceId: string | null = target.getAttribute('data-source-id');
          
          if (newsContainer.getAttribute('data-source') !== sourceId) {
            if(sourceId !== null){
              newsContainer.setAttribute('data-source', sourceId);
              super.getResp(
                {
                  endpoint: 'everything',
                  options: {
                    sources: sourceId,
                  },
                },
                callback
              );
            }
            
          }
          return;
        }
        if(target.parentNode !== null) {
          target = target.parentNode as HTMLElement;
        }
      
    }
    
  }
}

export default AppController;


