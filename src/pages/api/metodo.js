// eslint-disable-next-line import/no-anonymous-default-export
const metodo = (req, res) => {

    if (req.method === "GET") {
        res.status(200).json({
            nome: "Sasá"
        })
    } else {
        res.status(200).json({
            nome: "Lalá"
        })

    }
    res.status(200).json({
        metodo: req.method
    })
}

export default metodo