export default function TableRowCar({car}:any){
    return(
        <tr className="border-b hover:bg-muted">
          <td className="px-4 py-2 font-medium">{car.marca}</td>
          <td className="px-4 py-2">{car.modelo}</td>
          <td className="px-4 py-2">{car.placa}</td>
          <td className="px-4 py-2">
            <a
              href={`/car/delete?id=${car.id}`}
              className="text-destructive hover:underline"
            >
              Deletar
            </a>
          </td>
        </tr>
    )
}