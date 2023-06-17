export type sourceObjData = {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
};

export type newsObjData = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};

export interface IAppData {
  articles: newsObjData[];
  status: string;
  totalResults: number;
  sources: sourceObjData[];
}

 export enum Errors {
    Error401 = 401,
    Error404 = 404,
 }

export interface IOptionsObject {
  sources: string,
  apiKey: string;
}

export interface IAppLoader {
  baseLink: string, 
  options: Partial<IOptionsObject>
}

export interface IGetResponseParameters {
  endpoint: 'sources'|'everything';
  options?: Partial<IOptionsObject>;
}

export type getRespMethod = () => void;

//  export type resources = {
//   body: Object,
//   bodyUsed: boolean,
//   headers: Object,
//   ok:  boolean,
//   redirected: boolean,
//   status: number,
//   statusText: string,
//   type: string,
//   url: string
//  }

export type callbackFunction = (data: Partial<IAppData>) => void;


