import {Component} from '@angular/core';
import {MyCompenentComponent} from "./my-component.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Work area</h1>
        <p>Hello new learner!!</p>
        <h2>Now comes the second component</h2>
        <my-component></my-component>
       
    `,
    
    directives: [MyCompenentComponent]
    //'<h1>Angular 2 Boilerplate</h1><p>Hello World!!</p>',
})
export class AppComponent {

}