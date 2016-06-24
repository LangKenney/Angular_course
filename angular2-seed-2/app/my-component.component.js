System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var MyCompenentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                        template: "\n        <p>Hi I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red': 'black'\">\n            {{name}}\n        </span> and this is my very first angualr 2 component.</p>\n        <p><span [class.is-awsome]=\"inputElement.value==='yes'\">\n            It's so awsome!\n        </span></p>\n        <input type=\"text\" #inputElement (keyup)=\"0\">\n        <br>\n        <br>\n        <button [disabled]=\"inputElement.value!=='yes'\">Only enabled if 'yes' was entered</button>\n        \n    ",
                        styleUrls: ['src/css/mycomponent.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyCompenentComponent);
                return MyCompenentComponent;
            }());
            exports_1("MyCompenentComponent", MyCompenentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFIRyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQXhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUseWZBWVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7cUJBRXpDLENBQUM7O3dDQUFBO2dCQVFGLDJCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCx1REFNQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuLy9pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gXCIuL3Rlc3QuY29tcG9uZW50XCJcbmltcG9ydCB7T25JbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktY29tcG9uZW50XCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHA+SGkgSSdtIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnID8gJ3JlZCc6ICdibGFjaydcIj5cbiAgICAgICAgICAgIHt7bmFtZX19XG4gICAgICAgIDwvc3Bhbj4gYW5kIHRoaXMgaXMgbXkgdmVyeSBmaXJzdCBhbmd1YWxyIDIgY29tcG9uZW50LjwvcD5cbiAgICAgICAgPHA+PHNwYW4gW2NsYXNzLmlzLWF3c29tZV09XCJpbnB1dEVsZW1lbnQudmFsdWU9PT0neWVzJ1wiPlxuICAgICAgICAgICAgSXQncyBzbyBhd3NvbWUhXG4gICAgICAgIDwvc3Bhbj48L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSE9PSd5ZXMnXCI+T25seSBlbmFibGVkIGlmICd5ZXMnIHdhcyBlbnRlcmVkPC9idXR0b24+XG4gICAgICAgIFxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG4gICAgLy9kaXJlY3RpdmVzOiBbVGVzdENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNeUNvbXBlbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkxhbmdcIjtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
