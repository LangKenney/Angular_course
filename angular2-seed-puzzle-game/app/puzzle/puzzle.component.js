System.register(['@angular/core'], function(exports_1, context_1) {
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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n            <section class=\"setup\">\n                <h2>Game Setup</h2>\n                Enter your name:\n                <input type=\"text\" #name (keyup)=\"0\">\n            </section>\n            \n            <section \n            [ngClass]=\"{\n                puzzle: true,\n                solved: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number\n            }\"\n            [ngStyle]=\"{display: name.value===''?'none':'block'}\"\n            >\n                <h2>The puzzle</h2>\n                <p>Welcome <span class=\"name\">XXX</span></p>\n                <br>\n                \n                Switch 1\n                <input type=\"text\" #switch1 (keyup)=\"0\">\n                <br>\n                \n                Switch 2\n                <input type=\"text\" #switch2 (keyup)=\"0\">\n                <br>\n                \n                Switch 3\n                <input type=\"text\" #switch3 (keyup)=\"0\">\n                <br>\n                \n                Switch 4\n                <input type=\"text\" #switch4 (keyup)=\"0\">\n                <br>\n            </section>\n            \n            <h2>Congradulation XXX! You did it!</h2>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNENJO2dCQUFBO2dCQWVBLENBQUM7Z0JBVEcsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM3RixDQUFDO2dCQXREVDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNILFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsc3dDQW9DVDtxQkFDSixDQUFDOzttQ0FBQTtnQkFpQkYsc0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELDZDQWVDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgICAgICBzZWxlY3RvcjogJ215LXB1enpsZScsXG4gICAgICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XG4gICAgICAgICAgICAgICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxuICAgICAgICAgICAgICAgIEVudGVyIHlvdXIgbmFtZTpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICBwdXp6bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc29sdmVkOiBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiYgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJiBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXJcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgW25nU3R5bGVdPVwie2Rpc3BsYXk6IG5hbWUudmFsdWU9PT0nJz8nbm9uZSc6J2Jsb2NrJ31cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMj5UaGUgcHV6emxlPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5XZWxjb21lIDxzcGFuIGNsYXNzPVwibmFtZVwiPlhYWDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFN3aXRjaCAxXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgU3dpdGNoIDJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMiAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBTd2l0Y2ggM1xuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFN3aXRjaCA0XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxoMj5Db25ncmFkdWxhdGlvbiBYWFghIFlvdSBkaWQgaXQhPC9oMj5cbiAgICAgICAgYFxuICAgIH0pXG4gICAgXG4gICAgZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgICAgIHN3aXRjaDFOdW1iZXI6IG51bWJlcjtcbiAgICAgICAgc3dpdGNoMk51bWJlcjogbnVtYmVyO1xuICAgICAgICBzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XG4gICAgICAgIHN3aXRjaDROdW1iZXI6IG51bWJlcjtcbiAgICAgICAgXG4gICAgICAgIG5nT25Jbml0KCkge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2gxTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaDNOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2g0TnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gxTnVtYmVyLHRoaXMuc3dpdGNoMk51bWJlcix0aGlzLnN3aXRjaDNOdW1iZXIsdGhpcy5zd2l0Y2g0TnVtYmVyKTtcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
