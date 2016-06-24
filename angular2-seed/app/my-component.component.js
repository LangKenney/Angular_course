System.register(["@angular/core", "./test.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var MyCompenentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyCompenentComponent = (function () {
                function MyCompenentComponent() {
                }
                MyCompenentComponent.prototype.ngOnInit = function () {
                    this.name = "Lang";
                };
                MyCompenentComponent = __decorate([
                    core_1.Component({
                        selector: "my-component",
                        template: "\n        <p>Hi I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red': 'black'\">\n            {{name}}\n        </span> and this is my very first angualr 2 component.</p>\n        <p><span [class.is-awsome]=\"inputElement.value==='yes'\">\n            It's so awsome!\n        </span></p>\n        <input type=\"text\" #inputElement (keyup)=\"0\">\n        <br>\n        <br>\n        <button [disabled]=\"inputElement.value!=='yes'\">Only enabled if 'yes' was entered</button>\n        <test></test>\n    ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyCompenentComponent);
                return MyCompenentComponent;
            }());
            exports_1("MyCompenentComponent", MyCompenentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFIRyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQXhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsc2dCQVlUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM5QixDQUFDOzt3Q0FBQTtnQkFRRiwyQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsdURBTUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7VGVzdENvbXBvbmVudH0gZnJvbSBcIi4vdGVzdC5jb21wb25lbnRcIlxuaW1wb3J0IHtPbkludH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1jb21wb25lbnRcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cD5IaSBJJ20gPHNwYW4gW3N0eWxlLmNvbG9yXT1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcycgPyAncmVkJzogJ2JsYWNrJ1wiPlxuICAgICAgICAgICAge3tuYW1lfX1cbiAgICAgICAgPC9zcGFuPiBhbmQgdGhpcyBpcyBteSB2ZXJ5IGZpcnN0IGFuZ3VhbHIgMiBjb21wb25lbnQuPC9wPlxuICAgICAgICA8cD48c3BhbiBbY2xhc3MuaXMtYXdzb21lXT1cImlucHV0RWxlbWVudC52YWx1ZT09PSd5ZXMnXCI+XG4gICAgICAgICAgICBJdCdzIHNvIGF3c29tZSFcbiAgICAgICAgPC9zcGFuPjwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlIT09J3llcydcIj5Pbmx5IGVuYWJsZWQgaWYgJ3llcycgd2FzIGVudGVyZWQ8L2J1dHRvbj5cbiAgICAgICAgPHRlc3Q+PC90ZXN0PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1Rlc3RDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgTXlDb21wZW5lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG5hbWU6IHN0cmluZztcblxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJMYW5nXCI7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
