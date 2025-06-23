import DeleteCar from "./DeleteCar";
import { Suspense } from "react";
    
export default function Page() {

        return (
            <Suspense>
                <DeleteCar />
            </Suspense>
           
        );
}