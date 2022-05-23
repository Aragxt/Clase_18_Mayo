export function Tabla(){
    return(
        <table class="table table-dark table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-primary">
            <th scope="row">1</th>
            <td>Tatiana</td>
            <td>Guzman</td>
            <td>20 años</td>
            </tr>
            <tr class="table-primary">
            <th scope="row">2</th>
            <td>Saira</td>
            <td>Salazar</td>
            <td>20 años</td>
            </tr>
            <tr class="table-primary">
            <th scope="row">3</th>
            <td>Hernan</td>
            <td>Rios</td>
            <td>22 años</td>
            </tr>
        </tbody>
        </table>
    )
}