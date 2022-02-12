/**
 * Podemos ver que o nome do arquivo possue colchetes, quando isso acontece significa 
 * que estamos trabalhando com rotas dinânmicas
 */
import { useRouter } from "next/router";

export default function buscar(){

    const router = useRouter()

    const id = router.query.id
    const nome = router.query.nome

    console.log(router);

    return(
        <div>
            <h1> Rotas / {id} / {nome} </h1>
        </div>
    )
}