import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {

  @ViewChild('txtProgress', { static: true }) txtProgress: ElementRef;

  @Input() progress : number = 50;
  @Input() text : string = "Leyenda";

  @Output() valueChange : EventEmitter<number> =new EventEmitter;

  constructor() { 
    /* console.log("Text: ", this.text);
    console.log("Progress: ", this.progress); */
  }
      
  ngOnInit() {
    /* console.log("Text: ", this.text);
    console.log("Progress: ", this.progress); */
  }
  
  onChange (newValue: number) {

/*     let elementHTML: any = document.getElementsByName('progress')[0];
 */ 
    if ( newValue >=100 ){
      this.progress=100;
    }
    else if (newValue <= 0){
      this.progress=0;
    }
    else{
      this.progress= newValue;
    }
    //elementHTML.value = this.progress;
    this.txtProgress.nativeElement.value = this.progress;
    this.valueChange.emit(this.progress);

    
  }

  changeValue ( value: number ){
    if (this.progress + value >=100) {
      this.progress=100;
    }
    else if (this.progress + value <=0 ) {
      this.progress=0;
    }
    else {
      this.progress = this.progress + value;
    }
    this.valueChange.emit(this.progress);
    this.txtProgress.nativeElement.focus();

  }
}
