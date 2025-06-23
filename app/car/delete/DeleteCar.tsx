"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";

export default function DeleteCar() {
    const id = useSearchParams().get("id");
    const router = useRouter();

        async function handleDelete() {
            console.log("Carro deletada");
            try {
                const responde = await fetch(`https://crudcrud.com/api/2cb1d03ecba943199826aa93ce70ee17${id}`, {
                    method: "DELETE",
                })
                router.push("/car");
            } catch (error) {
                console.error("Erro ao deletar o carro:", error);
            }
        }
        return (
            <div className="flex flex-col items-center justify-center min-h-[150px] gap-4 bg-card rounded-md shadow p-4 mx-auto max-w-sm">
                <h1 className="text-lg font-semibold text-destructive">Deletar Carro?</h1>
                <p className="text-sm text-muted-foreground text-center">Tem certeza que deseja deletar? Esta ação não pode ser desfeita.</p>
                <Button variant="destructive" size="sm" className="w-full" onClick={handleDelete}>
                    Deletar
                </Button>
            </div>
        );
    }