System.register(['@angular/platform-browser-dynamic', "./app.component", "./test.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, test_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
            platform_browser_dynamic_1.bootstrap(MyComponent);
            platform_browser_dynamic_1.bootstrap(test_component_1.TestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQU1BLG9DQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDO1lBQ3hCLG9DQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkIsb0NBQVMsQ0FBQyw4QkFBYSxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNeUNvbXBlbmVudENvbXBvbmVudH0gZnJvbSBcIi4vbXktY29tcG9uZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUZXN0Q29tcG9uZW50fSBmcm9tIFwiLi90ZXN0LmNvbXBvbmVudFwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50KTtcbmJvb3RzdHJhcChNeUNvbXBvbmVudCk7XG5ib290c3RyYXAoVGVzdENvbXBvbmVudCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
