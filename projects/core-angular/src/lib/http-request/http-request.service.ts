import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ParseArgumentException} from '@angular/cli/models/parser';
import {HttpRequestVerbsEnum} from './enum/http-request-verbs.enum';
import {HttpRequestModule} from './http-request.module';
import {UndHttpClientService} from './und-http-client.service';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private readonly headers: HttpHeaders;

  constructor(private client: UndHttpClientService) {
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
  }

  private appendHeaders(headers: object) {
    Object.keys(headers).forEach(key => {
      this.headers.set(key, headers[key]);
    });
  }

  private baseRequest<T>(verb: HttpRequestVerbsEnum, url: string, headers: object, body = {}): Observable<T> {
    this.appendHeaders(headers);

    const options = {
      headers: this.headers,
    };

    switch (verb) {
      case HttpRequestVerbsEnum.GET:
        return this.client.get(url, options) as Observable<T>;
      case HttpRequestVerbsEnum.POST:
        return this.client.post(url, body, options) as Observable<T>;
      case HttpRequestVerbsEnum.PUT:
        return this.client.put(url, body, options) as Observable<T>;
      case HttpRequestVerbsEnum.PATCH:
        return this.client.patch(url, body, options) as Observable<T>;
      case HttpRequestVerbsEnum.DELETE:
        return this.client.delete(url, options) as Observable<T>;
    }
  }

  get<T= object>(url: string, headers = {}): Observable<T> {
    return this.baseRequest<T>(HttpRequestVerbsEnum.GET, url, headers);
  }

  post<T= object>(url: string, body: {}, headers = {}): Observable<T> {
    return this.baseRequest<T>(HttpRequestVerbsEnum.POST, url, headers, body);
  }

  patch<T= object>(url: string, body: {}, headers = {}): Observable<T> {
    return this.baseRequest<T>(HttpRequestVerbsEnum.PATCH, url, headers, body);
  }
}
