import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

const params = new HttpParams({
  fromObject: {
    action: "opensearch",
    format: "json",
    origin: "*"
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-component-app';
  config:any = {
    httpInstance: null,
    httpParams:null
  }

  constructor(@Inject(HttpClient) private http:HttpClient){
    this.config.httpInstance  = this.http;
    this.config.httpParams = params;
  }
}
