const express = require('express')
const router = express.Router()
const flash = require("connect-flash")
const session = require("express-session")
const cors = require("cors")
const bodyParser = require("body-parser")
const httpmsg = require("http-msgs")
const category = require('../controller/CategoryController')
const provider = require('../controller/ProviderController')
const product = require('../controller/ProductController')
const client = require('../controller/ClientController')
let urlencodedParser = bodyParser.urlencoded({extended:false})



//INSTANTIATE CONTROLLERS

    const Category = new category
    const Provider = new provider
    const Client = new client
    const Product = new product

//END INSTANTIATE CONTROLLERS

// GET ROUTES  --------------------------------------------------------------

 


    router.get('/' , (req,res) => {})
    router.get("/cadastroProduto" , (req , res) => {})
    router.get("/cadastroCategoria" , (req,res) => {})
    router.get("/entradaemProdutos" , (req,res) => {})
    router.get("/entradaEmNota" , (req,res)=>{})
    router.get("/novaVenda" , (req,res) =>{})
    router.get("/listarClientes" , (req,res)=>{})
    
    router.get('/cadastroClientes' , (req,res) =>{
        Client.listClients()
        .then(response => {
            res.send(response)
        })
        .catch(err =>{
            res.send(err)
        })
    })
    router.get('/cadastroClientes/ForId=:id' , (req,res) =>{
        Client.listClientsForId(req.params.id)
        .then(response => {
            res.send(response)
        })
        .catch(err =>{
            res.send(err)
        })
    })
    router.get("/listarFornecedores" , (req,res) =>{
        Provider.listAllProvider()
        .then(response =>{
            res.send(response)
        })
        .catch(err =>{
            res.send(err)
        })
    })
    router.get("/listarFornecedores/PorId=:id" , (req,res) =>{

        Provider.listProviderForId(req.params.id)
        .then(response =>{
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })


    })
    router.get("/listarFornecedores/PorNome=:name" , (req,res) =>{

        Provider.listProviderForName(req.params.name)
        .then(reponse =>{
            res.send(response)
        })
        .catch(err =>{
            res.send(err)
        })

    })


    router.get("/listarCategorias" , (req,res) =>{
        Category.listAllCategory().then((response) =>{
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
    })


    router.get("/listarCategorias/PorId=:id" , (req,res)=>{

        const idPesquisado = req.params.id 

        Category.listCategoryForID(idPesquisado)
        .then(response => {res.send(response)})
        .catch(err =>{res.send(err)})


    })

    router.get("/listarCategorias/PorNome=:name" , (req,res)=>{

        const namePesquisado = req.params.name 
        Category.listCategoryForName(namePesquisado)
        .then(response => {res.send(response)})
        .catch(err =>{res.send(err)})


    })

    router.get('/listarProdutos' , (req,res)=>{
            Product.listAllProduct()
            .then((response) => {res.send(response)})
            .catch((err) => res.send(err))
    })
    router.get('/listarProdutos/PorId=:id' , (req,res)=>{

            const idProduct = req.params.id

            Product.listProductForId(idProduct)
            .then((response) => {res.send(response)})
            .catch((err) => res.send(err))
    })

    router.get('/listarProdutos/PorNome=:nome' , (req,res)=>{

            const nomeProduct = req.params.nome

            Product.listProductForName(nomeProduct)
            .then((response) => {res.send(response)})
            .catch((err) => res.send(err))
    })

// END GET ROUTES  --------------------------------------------------------------
// POST ROUTES ------------------------------------------------------------------


    router.post('/cadastroProduto/addProduct' , (req,res)=>{
        const product = req.body.product

        Product.addProduct(product).then(response => {
            if(response){
                const responseFinal = {
                    success : true,
                    msg : "Produto Cadastrado com Sucesso",
                    idProduct : response
                }
                res.send(responseFinal)
            }
            else{
                const responseFinal = {
                    success : false,
                    msg : "Houve um erro ao cadastrar o Produto",
                    idProduct : response
                }
                res.send(responseFinal)
            }
        })
        .catch(err => {res.send(err)})
    })

    router.post('/cadastroProduto/updateProduct' , (req,res)=>{
        const product = req.body.product
        Product.updateProduct(product)
        .then(response =>{

            if(response != 0){
                const responseFinal = {
                    success : true,
                    msg : "Produto Editado com Sucesso",
                    idProduct : response
                }
                res.send(responseFinal)
               }
               else{
                const responseFinal = {
                    success : false,
                    msg : "Houve um Erro ao Editar o Produto",
                    idProduct : response
                }
                res.send(responseFinal)
               }

        })
        .catch(err => {res.send(err)})
    })

    router.post('/cadastroProduto/deleteProduct' , (req,res)=>{

        const idproduct = req.body.idproduct
        Product.deleteProduct(idproduct)
        .then(response =>{
            const responseFinal = {
                success : true,
                msg :"Produto deletado com sucesso",
                idProduct : response
            }
            res.send(responseFinal)
        })
        .catch(err =>{
            res.send(err)
        })

    })

    router.post("/cadastroFornecedor/addProvider" ,  (req,res)=>{

        const provider = req.body.provider
        Provider.addProvider(provider)
        .then(response =>{
           if(response){
            const responseFinal = {
                success : true,
                msg : "Fornecedor Cadastrado com Sucesso",
                idProvider : response
            }
            res.send(responseFinal)
           }
        })
        .catch(err => {
            res.send(err)
        })
    })
    router.post("/cadastroFornecedor/updateProvider" ,  (req,res)=>{

        const provider = req.body.provider
        Provider.updateProvider(provider)
        .then(response =>{
           if(response === provider.idprovider){
            const responseFinal = {
                success : true,
                msg : "Fornecedor Editado com Sucesso",
                idProvider : response
            }
            res.send(responseFinal)
           }
           else{
            const responseFinal = {
                success : false,
                msg : "Houve um Erro ao Editar Fornecedor",
                idProvider : response
            }
            res.send(responseFinal)
           }
        })
        .catch(err => {
            res.send(err)
        })
    })

    router.post("/cadastroFornecedor/deleteProvider" ,  (req,res)=>{
        const ifProvider = req.body.idProvider
        Provider.deleteProvider(ifProvider)
        .then(response =>{
           if(response){
            const responseFinal = {
                success : true,
                msg : "Fornecedor Deletado com Sucesso",
                idProvider : response
            }
            res.send(responseFinal)
           }
           else
           {
            const responseFinal = {
                success : false,
                msg : "Fornecedor não Encontrado",
            }
            res.send(responseFinal)
           }
        })
        .catch(err => {
            res.send(err)
        })
    })

    router.post("/cadastroCliente/newClient" , (req,res)=>{
        const client = req.body.client
        Client.addClient(client)
        .then(response => {
            if(response){
                let responseCorrect = {
                    success : true,
                    msg : "Cliente Cadastrado com Sucesso",
                    idClient : response
                }
                res.send(responseCorrect)
            }})
        .catch(err => {res.send(err)})
    })

    router.post("/cadastroCliente/deleteClient" , (req,res)=>{

        const idClient = req.body.idclient
        Client.deleteClient(idClient).then((response) =>{

            if(response)
            {
                let responseCorrect1 = {
                    success : true,
                    msg : "Cliente Deletado com Sucesso",
                }
                res.send(responseCorrect1)
            }
            else{
                let responseCorrect1 = {
                    success : false,
                    msg : "Cliente não deletado ID Invalido",
                }
                res.send(responseCorrect1)
            }
        })
        .catch(err => res.send(err))
    })


    router.post('/cadastroCliente/updateClient' , (req,res)=>{
        const client = req.body.client

        Client.updateClient(client).then(response => {
            if(response === client.idclient){
                let responseCorrect1 = {
                    success : true,
                    msg : "Cliente Editado com Sucesso",
                }
                res.send(responseCorrect1)
            }
            else{
                let responseCorrect1 = {
                    success : false,
                    msg : "Cliente Não Encontrado",
                }
                res.send(responseCorrect1)
            }
        })
        .catch(err => res.send(err))
    })


    router.post("/Categorias/AddCategory" , (req,res) =>{
        Category.addCategory(req.body.category)
        .then(response => {
            if(response){
                const responseFinal = {
                    success : true,
                    msg : "Categoria Cadastrada com Sucesso",
                    idCategory : response
                }
                res.send(responseFinal)
            }
        })
        .catch(err => res.send(err))
    })


    router.post("/Categorias/UpdateCategory" , (req,res) =>{
        const categoryObj = req.body.categoryObj
        Category.updateCategory(categoryObj)
        .then((response) => {
 
            if(response === categoryObj.idcategory){
                let responseCorrect = {
                    success : true,
                    msg : "Categoria Editada com Sucesso",
                    idCategory : response
                }
                res.send(responseCorrect)
            }
            else{
                let responseCorrect = {
                    success : false,
                    msg : "Erro ao Editar Categoria",
                    idCategory : response
                }
                res.send(responseCorrect)
            }

            
        })
        .catch((err) => {res.send(err)})
    })


    router.post("/Categorias/DeleteCategory" , (req,res) =>{
        Category.deleteCategory(req.body.id.id)
        .then(response=>{
                const response1 = {
                    success : true,
                    msg : "Categoria Deletada com Sucesso"
                }
                res.send(response1)
        })
        .catch(err =>{
            res.send(err)
        })
    })
    router.post("/Categorias/" , (req,res) =>{})





    router.post("/novaVenda/addProduct",urlencodedParser , (req,res)=>{})
    router.post("/lancarProdutoEmNota/enterone", (req,res)=>{})
    router.post("/lancarProdutoEmNota/success" , (req,res)=>{})
    router.post("/success/ajaxRequest/entradaEmNota", urlencodedParser , (req,res)=>{})
    router.post("/lancarProdutoEmNota/success/onebyone", urlencodedParser , (req,res)=>{})
    router.post("/entradaemProdutos/entrada" , (req,res) =>{})
    router.post("/novaVenda/endSale", urlencodedParser , (req,res)=>{})
    router.post("/entradaemProdutos/new" , (req,res)=>{})
    router.post("/cadastroCategoria/new" , (req,res)=>{})
    router.post("/cadastroProduto/new" , (req,res,next) =>{})
    



// END POST ROUTES ------------------------------------------------------------------






module.exports = router