const knex = require('../service/database')

module.exports  = class Product {

    addProduct = async(product)=>
    {
        if(product.name == "" || product.name == null || product.name == undefined )
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Nome do Produto Invalido"
            }
        }
        if(product.description == "" || product.description == null || product.description == undefined )
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Descrição do Produto Invalido"
            }
        }
        if(product.reference == "" || product.reference == null || product.reference == undefined )
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Referencia do Produto Invalido"
            }
        }
        if(product.color == "" || product.color == null || product.color == undefined )
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Cor do Produto Invalido"
            }
        }
        if(product.idsizeclothes == "" || product.idsizeclothes == null || product.idsizeclothes == undefined )
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Tamanho do Produto Invalido"
            }
        }
        if(product.idcategory == "" || product.idcategory == null || product.idcategory == undefined )
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Categoria do Produto Invalido"
            }
        }
        if(product.buyvalue == "" || product.buyvalue == null || product.buyvalue == undefined )
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Valor de Compra do Produto Invalido"
            }
        }
        if(product.sellvalue == "" || product.sellvalue == null || product.sellvalue == undefined )
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Valor de Venda do Produto Invalido"
            }
        }
        if(product.idprovider == "" || product.idprovider == null || product.idprovider == undefined )
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Codigo do Fornecedor do Produto Invalido"
            }
        }
        if(product.quantity == "" || product.quantity == null || product.quantity == undefined )
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Quantidade do Produto Invalido"
            }
        }

        return knex('product').insert({
            name : product.name,
            description : product.description,
            reference : product.reference,
            color : product.color,
            idsizeclothes : product.idsizeclothes,
            idcategory : product.idcategory,
            buyvalue : product.buyvalue,
            sellvalue : product.sellvalue,
            idprovider : product.idprovider,
            quantity : product.quantity,
        })
    }
    deleteProduct = async(idProduct)=>{


        if(idProduct == "" || idProduct == null || idProduct == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo ID Produto Invalido"
            }
        }
        return knex('product').delete().where({idproduct : idProduct})
    }

    updateProduct = async(product)=>{

        if(product.idproduct == "" || product.idproduct == null || product.idproduct == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo ID Produto Invalido"
            }
        }

        let productforupdate = {}

        for (var key in product) {
            if (product.hasOwnProperty(key)) {
                productforupdate[key] = product[key]
            }
        }

        return knex('product').where({idproduct : product.idproduct}).update(productforupdate)


    }


    listAllProduct = async()=>{
        return knex('product')
    }

    listProductForId = async(id)=>{

        if(id == "" ||id == null ||id == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo ID Produto Invalido"
            }
        }

        return knex('product').where({idproduct : id})
    }

    listProductForName = async(nomeProduct)=>{

        if(nomeProduct == "" ||nomeProduct == null ||nomeProduct == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Nome do Produto Invalido"
            }
        }
        return knex('product').where({name : nomeProduct})
    }

}