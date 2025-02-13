import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const users: user[] = [];

interface user {
    id: number,
    nome: string, 
    sobrenome: string
}

router.post('', (req: Request, res: Response) => {  
    const{nome, sobrenome } = req.body
    var id = users.length + 1;
    users.push({id: id, nome : nome, sobrenome: sobrenome})
    res.status(200).send(`Pessoa ${id} ${nome} ${sobrenome} recebida com sucesso!`);
})

router.get('', (req: Request, res: Response) => {
    res.status(200).send(users);
})

router.get('/usuarios/{id}', (req: Request, res: Response) => {
    res.status(200).send(`Fazendo um get id no servidor!`);
})

router.put('/usuarios/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, sobrenome } = req.body;
    
    res.status(200).send(`Pessoa com o id: ${id} foi atualizado para
    ${nome} ${sobrenome}`)
})

router.patch('/usuarios/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome} = req.body;

    res.send(`Nome da pessoa com ID ${id} foi atualizado para: ${nome}`);
});

router.delete('/usuarios/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).send(`O user com o id: ${id} foi deletada `)
})
export default router;