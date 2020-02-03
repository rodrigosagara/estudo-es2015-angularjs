import { App } from "../app.module";
import { NavbarComponent } from "./Navbar/navbar.component";
import { TableComponent } from "./Table/table.component";

export const { AppRoot } = App.component('appRoot', {
    //uma sintaxe que lembra o jsx do react
    template:
        `<navbar-component></navbar-component>
        <div class="container">
            <div class="jumbotron">
                <h1 class="h4 mt-5">{{$ctrl.saudacao}}</h1>
                <p>Esta pagina é apenas um experimento da junçãoo das expecificações do Ecma6 com o Angularjs 1.7.x</p>
            </div>
            <h5>Pegando recursos de um web service</h5>
            <table-component></table-component>
            <footer>
                <p class="text-center">&copy; Todos os direitos reservados &bull; Rodrigo Santos Sagara - Propriedade Intelectual 2020</p>
            </footer>
    </div>`,
    controller: function ctAppRoot() {
        this.saudacao = "App AngularJS - Hello World";
    }
});