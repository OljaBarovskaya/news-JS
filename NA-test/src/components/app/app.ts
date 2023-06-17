import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import {IAppData} from '../../types'

class App {
  
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start():void {
    const element = document.querySelector('.sources') as HTMLDivElement;
    element.addEventListener('click', (e:MouseEvent):void => this.controller.getNews(e, (data: Partial<IAppData>) => this.view.drawNews(data)));
    this.controller.getSources((data: Partial<IAppData>) => this.view.drawSources(data));

    element.addEventListener(
      'click',
      ():void => {
        element.style.height = '200px';
      },
      true
    );
  }
}

export default App;
