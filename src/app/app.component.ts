// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>`,
// })
// export class AppComponent  { name = 'Angular'; }

// import { Component } from '@angular/core';

// @Component ({
//    selector: 'my-app',
//    // template: `<h1>Hello SAIDI {{name}}</h1>`,
//    templateUrl: 'app/app.component.html'  
// })
// export class AppComponent  { 
// 	name = 'World'; 
// 	appTitle: string = 'Welcome';
// }

/////////////////////////////////////////////

// import { Component } from '@angular/core';  

// @Component ({
//    selector: 'my-app',
//    templateUrl: 'app/app.component.html'
// })

// export class AppComponent {
//    appTitle: string = 'Welcome';
//    appStatus: boolean = true;
// }

/////////////////////////////////////////////


import { Component } from '@angular/core';
 
@Component ({
   selector: 'my-app',
   templateUrl: 'app/app.component.html'
})

// export class AppComponent {
//    @Environment(‘test’)
//    appTitle: string = 'Welcome';
// }

// export class AppComponent {
//    // @Environment(‘test’)
//    // constructor(@Environment(‘test’ private appTitle:string) { };
//    appTitle: string = 'Bienvenue';
//    appList: any[] = [ {
//       "ID": "1",
//       "Name" : "un"
//    },

//    {
//       "ID": "2",
//       "Name" : "deux"
//    },

//    {
//       "ID": "3",
//       "Name" : "trois"
//    },

//    ];
// }

export class AppComponent {
   appTitle: string = 'Welcome';
   appList: any[] = [ {
      "ID": "1",
      "url": 'app/assets/img/1.jpg'
   },

   {
      "ID": "2",
      "url": 'app/assets/img/2.jpg'
   } ];
}
