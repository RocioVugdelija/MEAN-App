import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    
  /*   this.returnObservable().pipe(
      retry(2)
    )   */  
    this.subscription = this.returnObservable().subscribe(
      number => console.log('Subs', number),
      error => console.error('Error with the obs'),
      () => console.log("The observer succeeded")
     )
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    //La página se cierra
    this.subscription.unsubscribe();
  }

  returnObservable() : Observable<any> {
    return new Observable( (observer : Subscriber<any>) => {
      
      let counter=0;
      let interval = setInterval ( () => {
        counter+=1;

        const outcome = {
          value: counter
        };
        observer.next(outcome);

        /* if (counter === 3) {
          clearInterval(interval);
          observer.complete();
        } */
        /* if (counter === 2) {
          clearInterval(interval);
          observer.error('Observer failed');
        } */
      }, 1000);
    }).pipe(
      map(resp =>resp.value),
      filter( (value, index) => {
        if((value % 2) === 1){
          return true;
        }
        else {
          return false;
        }
      })
      );
    
  }

}
