import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceForApiService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("/assets/data.json");
  }

}
