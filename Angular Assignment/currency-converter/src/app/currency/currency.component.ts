import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

inputValue : number =0;
toGroup:any;
fromGroup : any;
outputValue : number = 0;
  constructor() { 
    this.fromGroup=1;
    this.toGroup=1;
  }

  ngOnInit(): void {
  }
  clickEve()
  {  
    if(this.fromGroup == this.toGroup)
      this.outputValue = this.inputValue;
    else{
      if(this.fromGroup==1 && this.toGroup==2)
      {
        this.outputValue = this.inputValue*0.013;
      }
      if(this.fromGroup==2 && this.toGroup==1)
      {
        this.outputValue = this.inputValue/0.013;
      }
      if(this.fromGroup==1 && this.toGroup==3)
      {
        this.outputValue = this.inputValue*0.012;
      } 
      if(this.fromGroup==3 && this.toGroup==1)
      {
        this.outputValue = this.inputValue/0.012;
      }
      if(this.fromGroup==2 && this.toGroup==3)
      {
        this.outputValue = this.inputValue*0.88;
      }
      if(this.fromGroup==3 && this.toGroup==2)
      {
        this.outputValue = this.inputValue/0.88;
      }
    }

    }

}