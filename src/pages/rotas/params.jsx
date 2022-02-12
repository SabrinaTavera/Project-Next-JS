import { useRouter } from "next/router"
import Link from "next/link";

export default function params(){

    const router = useRouter()

    /**
     * Conseguimos pegar o valor da rota caso ela esteja 
     * com essas informações: http://localhost:3000/rotas/params?nome=Leonardo&id=123
     * 
     */
    const id = router.query.id
    const nome = router.query.nome

    console.log(router)

    return(
        <div>
            <h1>Rotas Params: {id} e {nome}
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
           

            </h1>
        </div>
    )
}
