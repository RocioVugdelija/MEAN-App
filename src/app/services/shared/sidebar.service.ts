import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu:[
        {title: 'Dashboard', url:'/dashboard'},
        {title: 'ProgressBar', url:'/progress'},
        {title: 'Charts', url:'/graphic1'},
        {title: 'Promises', url:'/promises'},
        {title: 'RxJs', url:'/rxjs'},




      ]
    }
  ]

  constructor() { }
}
