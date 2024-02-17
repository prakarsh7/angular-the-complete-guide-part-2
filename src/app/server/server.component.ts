import { Component } from "@angular/core";

@Component({ // this is a decorator to specify this is a component and not a normal JS class.
    selector: 'app-server', // this is the name of the HTML selector that can be used to use this component
    templateUrl: './server.component.html', // path to the html template file for this component
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline'; // Don't need to specify, it will be inferred

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }
    
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}