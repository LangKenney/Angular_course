import {Component} from "@angular/core"
//import {TestComponent} from "./test.component"
import {OnInt} from "@angular/core"

@Component({
    selector: "my-component",
    template: `
        <p>Hi I'm <span [style.color]="inputElement.value === 'yes' ? 'red': 'black'">
            {{name}}
        </span> and this is my very first angualr 2 component.</p>
        <p><span [class.is-awsome]="inputElement.value==='yes'">
            It's so awsome!
        </span></p>
        <input type="text" #inputElement (keyup)="0">
        <br>
        <br>
        <button [disabled]="inputElement.value!=='yes'">Only enabled if 'yes' was entered</button>
        
    `,
    styleUrls: ['src/css/mycomponent.css'],
    //directives: [TestComponent]
})

export class MyCompenentComponent implements OnInit {
    name: string;

    ngOnInit():any {
        this.name = "Lang";
    }
}