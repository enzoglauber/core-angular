import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoreAngularService {

  constructor(private http: HttpClient, private router: Router) { }

  generateUniqueId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  getChangelog() {
    let urlHml = 'http://hml-portalcorporativo.unidas.com.br/api/Tools/ChangeLog';
    let urlProd = 'https://portalcorporativo.unidas.com.br/api/Tools/ChangeLog';
    let url = '';
    if (this.router.url.includes('hml')) {
      url = urlHml;
    } else {
      url = urlProd;
    }

    return this.http.get<any>(url).pipe();
  }
}
