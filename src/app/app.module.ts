// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent }  from './app.component';

// @NgModule({
//   imports:      [ BrowserModule ],
//   declarations: [ AppComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }

////////////////////////////////////////////////
// import { Component } from '@angular/core';

// @Component ({ 
//    selector: 'my-app', 
//    templateUrl: 'app/app.component.html' 
// }) 

// export class AppComponent { 
//    appTitle: string = 'Welcome';
// }
////////////////////////////////////////////////
import { NgModule }      from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent }  from './app.component';  

@NgModule ({ 
   imports:      [ BrowserModule ], 
   declarations: [ AppComponent ], 
   bootstrap:    [ AppComponent ] 
}) 
export class AppModule { } 
//////////////////////////////////////////////

