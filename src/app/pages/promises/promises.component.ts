import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    
    this.waitThreeSeconds().then(
     // () => console.log("Promise successfull")
     message => console.log("Promise successfull", message)
    )
    .catch( error => console.log("Promise error"));
    
   }

  ngOnInit() {
  }

  waitThreeSeconds () : Promise<boolean>{
    return new Promise<boolean> ((resolve, reject) =>{
      
      let counter= 0;

      let interval = setInterval( () => {
          counter += 1;
          if (counter ===3) {
            resolve(true);
            //reject("This is a simple error");
            clearInterval(interval);
          }
      }, 1000)//1 second
    });
  
  }

}
