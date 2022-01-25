import { Component, OnInit } from '@angular/core';
import { ServiceForApiService } from '../service-for-api.service';

@Component({
  selector: 'app-ass3-parent',
  templateUrl: './ass3-parent.component.html',
  styleUrls: ['./ass3-parent.component.css']
})
export class Ass3ParentComponent implements OnInit {

  data:any;
  selectValue: any;

  constructor(private service : ServiceForApiService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data)=>{
      this.data=data;
    });
  }

  message($event:any){
    this.selectValue =$event;
    this.sortData();
  }

  sortData(){
    if(this.selectValue == 1){
      // sort by name
      this.data.sort((a:any, b:any)=>(a.name>b.name) ? 1:-1);
    }
    if(this.selectValue==2){
      // sort by date
      this.data.sort((a:any,b:any)=>(new Date(a.birthDate).valueOf()-new Date(b.birthDate).valueOf()))
    }
  }

}
