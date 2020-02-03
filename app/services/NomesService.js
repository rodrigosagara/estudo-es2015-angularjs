import { App } from "../app.module";

const { NomesService } = App.factory('NomesService', function () {
    const nomes = [
        {
            id: 1,
            nome: 'rodrigo'
        },
        {
            id: 2,
            nome: 'santos'
        },
        {
            id: 3,
            nome: 'sagara'
        },
    ];

    return class NomesService {
        constructor(id, nome) {
            this.id = id,
                this.nome = nome
        }

        getNomes() {
            return nomes;
        }
    };

});