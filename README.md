# Angular---The-Complete-Guide-2024-Edition-Part-2
This is the 3rd repo for the course: 'Angular - The Complete Guide (2024 Edition)'

#### Course Link - [Angular - The Complete Guide (2024 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/)

---

#### File/Folder Structure
1. **server** - Component folder
    - Basics of _Component_ Decorator
    - _servers.component.html_ shows String Interpolation
2. **servers** - Component folder
    - Inline template
    - Nested Component (_server_ component is called inside this)
    - _servers.component.html_ shows Property Binding
---

## Notes
### How Angular Works?
-  **_main.ts_** is executed first
- **_app.module.ts_** has a bootstrap array lists all components which should be known to angular at a point of time (for eg, _bootstrap: [AppComponent]_)
- Now Angular analysis the **_app.component.ts_** (AppComponent) and it is now able to hand _app-root_ in _index.html_ file.
- Going to the component it understands that an **_app.component.html_** file (HTML code) is attached to it and loads it

### Miscellaneous Notes
- Register the component in _declaration_ array in _app.module.ts_
- _bootstrap_ array has the name of the **Root Component**, all other components go in _declaration_ array
- _imports_ array allow us to add more Modules in our app, so that we can split up our app in multiple modules
- **BrowserModule** provides us with all the basic functionalities we need to start our app
- Standalone components can reduce the amount of boilerplate code you have to write - after all, you don't have to add and manage those extra @NgModules anymore. (Separate Section in course to understand this)

- We can use the CLI to create new component by using the command:
    - `ng generate component componentName` OR `ng g c componentName`
    - This will create a folder with the name _componentName_ containing following files:
        - **componentName.component.ts**
        - **componentName.component.html**
        - **componentName.component.css**
        - **componentName.component.spec.ts** -> This is used for Unit Testing
    - This will also add the component to the _declaration_ array in module file.
- _selector_ of a component can be any of the following:
    1. HTML selector
        - `selector: 'app-server'`
        - This is used as a HTML selector:
            - `<app-server>`
        - This is generally preferred
    2. Attribute selector 
        - `selector: '[app-server]'`
        - This is used as an attribute:
            - `<div app-server>`
    3. Class selector
        - `selector: '.app-server'`
        - This is used as a class of a HTML selector:
            - `<div class="app-server"`

- **Data Binding** - Communication between TypeScript Code (Business logic) and Template (HTML).
    1. _Output Data_
        - Using String Interpolation: `{{data}}`
            - Anything which resolves to a string can be written inside the brackets (string itself can be written as well `{{'Hello'}}`)
        - Or, Property Binding: `[property]: "data"`
            - Anything inside double quotes ("") should have some type of TS/JS code
            - Eg. `<button [disabled]="!allowNewServer">Add</button>`
                - Here, _disabled_ expects something which resolve into boolean inside double quotes ("")
            - Here, disabled is not acting as an attribute of _button_ but as a property of the HTML element (_button_)
            - We can also add Property Binding to _Directives_ and _Components_
        - _NOTE_ - We can not and should not mix _String Interpolation_ and _Property Binding_ as it will not work and brake the code.
    2. _React to (User) Events_
        - Using Event Binding: `(event)="expression"`
    3. _Two Way Binding_
        - This is a combination of both
        - `[(ngModel)]="data"`
- _constructor()_ is a method ran at the time when that component is created by Angular. 