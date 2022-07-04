import Button from '../Button/Button'
import './Table.css'

export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Mail</th>
          <th>Contraseña</th>
          <th>Acciones</th>
        </tr>
      </thead>    
      <tbody>
        <tr>
          <td>Maria</td>
          <td>Gonzales</td>
          <td>22</td>
          <td>maria@gmail.com</td>
          <td>*******</td>
          <td>
            <Button btn="edit" />
            <Button btn="delete" />
          </td>
        </tr>
        <tr>
          <td>Maria</td>
          <td>Gonzales</td>
          <td>22</td>
          <td>maria@gmail.com</td>
          <td>*******</td>
          <td>
            <Button btn="edit" />
            <Button btn="delete" />
          </td>
        </tr>
        <tr>
          <td>Maria</td>
          <td>Gonzales</td>
          <td>22</td>
          <td>maria@gmail.com</td>
          <td>*******</td>
          <td>
            <Button btn="edit" />
            <Button btn="delete" />
          </td>
        </tr>
        <tr>
          <td>Maria</td>
          <td>Gonzales</td>
          <td>22</td>
          <td>maria@gmail.com</td>
          <td>*******</td>
          <td>
            <Button btn="edit" />
            <Button btn="delete" />
          </td>
        </tr>
        <tr>
          <td>Maria</td>
          <td>Gonzales</td>
          <td>22</td>
          <td>maria@gmail.com</td>
          <td>*******</td>
          <td>
            <Button btn="edit" />
            <Button btn="delete" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
