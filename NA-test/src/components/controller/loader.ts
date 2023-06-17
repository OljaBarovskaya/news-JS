import {IGetResponseParameters, callbackFunction, IOptionsObject} from '../../types';

class Loader {
  
  public baseLink: string;

  public options: Partial<IOptionsObject>;

  constructor(baseLink: string, options: Partial<IOptionsObject>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  protected getResp(
    { endpoint, options = {} }: IGetResponseParameters,

    
    callback : callbackFunction = () => {
      console.error('No callback for GET response');
    }
  ) :void {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) throw Error(res.statusText);
    }
    
    return res;
  }

  private makeUrl(options: Partial<IOptionsObject>, endpoint: 'sources'|'everything'): string {
    const urlOptions: Partial<IOptionsObject>= { ...this.options, ...options };
    let url: string = `${this.baseLink}${endpoint}?`;

    Object.entries(urlOptions).forEach(([key, value]: string[]): void => {
      url += `${key}=${value}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: 'GET' | 'SET', endpoint: 'sources'|'everything', callback: callbackFunction, options: Partial<IOptionsObject> = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
