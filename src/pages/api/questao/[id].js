function questao(req, res) {
    if (req.method === "GET") {

        get(req, res)

    } else {
        res.status(405).send()
    }
}

export default function get(req, res) {

    const id = req.query.id
    res.status(200).json({
        id,
        enunciado: 'Qual a sua cor preferida',
        respostas: [
            "Branca", "Azul", "Rosa", "Verde"
        ]
    })


}