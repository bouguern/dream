import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiObject } from '../models/api-object';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = " https://api.db-ip.com/v2/free/self";

  constructor(private httpClient: HttpClient) { }

  public getDataOfIpAddress(): Observable<ApiObject> {
    return this.httpClient.get<ApiObject>(this.url);
  }
}