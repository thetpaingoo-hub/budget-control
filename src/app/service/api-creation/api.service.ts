import { Injectable } from '@angular/core';
import { QueryStringParameter } from 'src/app/shared/query-string-parameter.model';
import { UrlBuilder } from 'src/app/shared/url-builder.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  constructor() { }

  public createUrlWithQueryParameters(action: string, queryStringHandler?: (queryStringParameters: QueryStringParameter) => void): string {
    const urlBuilder: UrlBuilder = new UrlBuilder();
    urlBuilder.set(environment.api_url, action)
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  public createUrlWithPathAndQueryParameters(action: string,pathVariables: any[] = [], queryStringHandler?: (queryStringParameters: QueryStringParameter) => void): string {
    const urlBuilder: UrlBuilder = new UrlBuilder();
    let encodedPathVariablesUrl: string = '';
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    urlBuilder.set(environment.api_url, `${action}${encodedPathVariablesUrl}`)
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  public createUrlWithPathVariables(action: string, pathVariables: any[] = []): string {
    let encodedPathVariablesUrl: string = '';
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder();
    urlBuilder.set(environment.api_url,`${action}${encodedPathVariablesUrl}`)
    return urlBuilder.toString();
  }

  public createUrl(action: string): string {
    const urlBuilder: UrlBuilder = new UrlBuilder();
    urlBuilder.set(environment.api_url,action);
    return urlBuilder.toString();
  }
}
