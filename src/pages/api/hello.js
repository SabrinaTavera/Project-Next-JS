// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function Handler(req, res) {
    res.status(200).json([
        { name: 'John Doe', idade: 60 },
        { name: 'Maria' },
        { name: 'Joana' },
        { name: 'Sasá' }
    ])
}