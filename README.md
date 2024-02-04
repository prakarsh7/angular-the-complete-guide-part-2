## Notes
### How Angular Works?
-  **_main.ts_** is executed first
- **_app.module.ts_** has a bootstrap array lists all components which should be known to angular at a point of time (for eg, _bootstrap: [AppComponent]_)
- Now Angular analysis the **_app.component.ts_** (AppComponent) and it is now able to hand _app-root_ in _index.html_ file.
- Going to the component it understands that an **_app.component.html_** file (HTML code) is attached to it and loads it