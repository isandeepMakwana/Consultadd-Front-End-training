import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-fectch-data-from-api',
  templateUrl: './fectch-data-from-api.component.html',
  styleUrls: ['./fectch-data-from-api.component.css']
})
export class FectchDataFromApiComponent implements OnInit {
  
  li:any;
  lis=[];
  isHidden:boolean = false;
  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
      this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(Response => {
   
        console.log(Response)
        this.li=Response;
        this.lis=this.li;
      });  
}     
  // clickEve()
  // { 
  //   this.isHidden = false;
  // }
}


