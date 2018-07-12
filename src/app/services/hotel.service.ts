import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private _url: string;
  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor( private _http: HttpClient ) { 
     this._url = GLOBAL.url;
     
  }


  getHotels() : Observable<any> {
    return this._http.get(`${this._url}hotel`, { headers: this.headers });
  }

  getHotelsByname(name) : Observable<any>{
     
     
     return this._http.get(`${this._url}hotel/${name}`, { headers: this.headers });
  }

  getHotelByStar(star) : Observable<any>{
    return this._http.get(`${this._url}star/${star}`, { headers: this.headers });
  }

}
