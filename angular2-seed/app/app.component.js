System.register(['@angular/core', "./my-component.component"], function(exports_1, context_1) {
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
    var core_1, my_component_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_component_component_1_1) {
                my_component_component_1 = my_component_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Angular 2 Work area</h1>\n        <p>Hello new learner!!</p>\n        <h2>Now comes the second component</h2>\n        <my-component></my-component>\n       \n    ",
                        directives: [my_component_component_1.MyCompenentComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsbUxBTVQ7d0JBRUQsVUFBVSxFQUFFLENBQUMsNkNBQW9CLENBQUM7cUJBRXJDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge015Q29tcGVuZW50Q29tcG9uZW50fSBmcm9tIFwiLi9teS1jb21wb25lbnQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+QW5ndWxhciAyIFdvcmsgYXJlYTwvaDE+XG4gICAgICAgIDxwPkhlbGxvIG5ldyBsZWFybmVyISE8L3A+XG4gICAgICAgIDxoMj5Ob3cgY29tZXMgdGhlIHNlY29uZCBjb21wb25lbnQ8L2gyPlxuICAgICAgICA8bXktY29tcG9uZW50PjwvbXktY29tcG9uZW50PlxuICAgICAgIFxuICAgIGAsXG4gICAgXG4gICAgZGlyZWN0aXZlczogW015Q29tcGVuZW50Q29tcG9uZW50XVxuICAgIC8vJzxoMT5Bbmd1bGFyIDIgQm9pbGVycGxhdGU8L2gxPjxwPkhlbGxvIFdvcmxkISE8L3A+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
