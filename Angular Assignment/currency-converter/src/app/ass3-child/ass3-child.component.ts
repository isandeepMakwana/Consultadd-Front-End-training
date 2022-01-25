import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ass3-child',
  templateUrl: './ass3-child.component.html',
  styleUrls: ['./ass3-child.component.css']
})
export class Ass3ChildComponent implements OnInit {

  selectValue:any;
  constructor() { }

  ngOnInit(): void {
  }
@Output() message =new EventEmitter<any>();
  sendName(){
    this.selectValue= 1;
    this.message.emit(this.selectValue)
  }
  sendAge(){
    this.selectValue =2;
    this.message.emit(this.selectValue);
  }
}
