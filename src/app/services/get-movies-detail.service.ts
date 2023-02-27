import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


const APIKEY = "da979bab";

@Injectable({
  providedIn: 'root'
})
export class GetMoviesDetailService {

  parentHttp:any;
  parentParams:any;
  constructor() { }

  setHttp(http:any){
    this.parentHttp =  http;
  }
  setParams(params:any)
  {
    this.parentParams = params;
  }
  getMoviesDetail(title?:any): Observable<any>{
    return this.parentHttp.get('http://www.omdbapi.com/?s=' + title + '&apikey=' + APIKEY, { params: this.parentParams.set('search', title) });
  }
}
