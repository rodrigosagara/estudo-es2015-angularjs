import { App } from '../../app.module';
import './navbar.css';

export const { NavbarComponent } = App.component('navbarComponent', {
    template:
        `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/" class="navbar-brand">{{$ctrl.link_brand}}</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item"><a href="/" class="nav-link">home</a></li>
            <li class="nav-item"><a href="/contato" class="nav-link">contato</a></li>
        </ul>
    </nav>`,
    controller: function ctNavbarComponent() {
        this.link_brand = "Montesis"
    }
});