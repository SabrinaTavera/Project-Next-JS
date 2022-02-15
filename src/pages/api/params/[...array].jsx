/**
 * Quando se coloca "..." três pontos antes do nome do arquivo significa
 * que vc pode receber na URL varios valores que serão entendidos como
 * parametros 
 * 
 */

export default function Params(req, res){
    res.status(200).json({
        params: req.query
    })
}