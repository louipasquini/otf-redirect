const express = require('express');
const { getLinks , getLink , createLink , deleteLink } = require('../server/app.js');
const router = express.Router();

router.get('/' , async (req,res) => {
    var newLink = await getLinks()
    return res.status(200).send(newLink);
});

router.get('/:short', async (req,res) => {
    const short = req.params.short;

    var newLink = await getLink(short)

    if (newLink.short === short) {
        return res.status(200).redirect(newLink.linkOriginal)
    } else {
        return res.status(500).send({error: "Link not found"})
    }
})

router.post('/add', async (req,res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).end();
    } else {
        await createLink(body.linkOriginal,body.short,body.cliente,body.projeto);
        return res.status(201).send(await getLinks());
    }
})

router.delete('/delete/:id', async (req,res) => {
    const id = req.params.id;

    await deleteLink(id)
    res.status(200).send(await getLinks())
})

module.exports = router