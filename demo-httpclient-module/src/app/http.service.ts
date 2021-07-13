import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

constructor(private http: HttpClient) { }

getPosts() {
  return this.http.get(this.url);
}

}
