import { App } from './app.module';

export const { AppRoot } = App.component('appRoot', {
    //uma sintaxe que lembra o jsx do react
    template:
        `<div class="container">
        <h1 class="h4">{{$ctrl.saudacao}}</h1>
    </div>`,
    controller: function ctAppRoot() {
        this.saudacao = "App AngularJS - Hello World";
    }
});