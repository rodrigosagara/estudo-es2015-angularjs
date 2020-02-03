import { App } from "../../app.module";
import { NomesService } from '../../services/NomesService';

export const { TableComponent } = App.component('tableComponent', {
    template:
        `<table class="table table-striped table-bordered table-hovered">
        <tr>
            <th>id</th>
            <th>nome</th>
        </tr>
        <tr ng-repeat="obj in $ctrl.nomes | orderBy: '-id' ">
            <td>{{obj.id}}</td>
            <td>{{obj.nome}}</td>
        </tr>
    </table>`,
    controller: function ctTableContente(NomesService) {
        let recursos = new NomesService();
        this.nomes = recursos.getNomes();
        console.log(this.nomes);
    }
});