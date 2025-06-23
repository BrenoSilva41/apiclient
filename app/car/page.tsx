import TableRowCar from "../components/TableRowCar";

export default async function Car(){
   
    const request = await fetch("https://serverapi-kappa.vercel.app/api/cars")
    const listCar = await request.json();

    const cars = [];
    for (const car of listCar){
        cars.push(<TableRowCar key={car.id} car={car} />)
    }

    return (
        <div className="container mx-auto py-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-center">Lista de Carros</h1>
            <div className="rounded-lg border shadow-sm bg-background w-full max-w-3xl">
            <table className="w-full text-sm text-center">
                <thead>
                <tr>
                    <th className="py-2">Marca</th>
                    <th className="py-2">Modelo</th>
                    <th className="py-2">Placa</th>
                </tr>
                </thead>
                <tbody>
                {cars}
                </tbody>
            </table>
            </div>
        </div>
    )
}