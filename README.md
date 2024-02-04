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