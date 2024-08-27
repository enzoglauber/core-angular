import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpRequestModule} from './http-request.module';

@Injectable({
  providedIn: 'root',
})
export class UndHttpClientService extends HttpClient{

  constructor(
    private httpHandler: HttpHandler,
  ) {
    super(httpHandler);
  }
}
