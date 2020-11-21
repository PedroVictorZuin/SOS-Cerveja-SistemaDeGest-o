const { Module } = require('module')
const knex = require('../service/database')


module.exports = class Provider {

    listAllProvider = ()=>{
        return knex('provider')
    }

    listProviderForId = (id) =>{

        if(id == "" || id == null || id == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo ID Invalido"
            }
        }
        return knex('provider').where({idprovider : id})
    }


    //REVER !!!!!!!!!!!!!!!!!!!!!!!!!
    listProviderForName = (nameProvider) =>{

        if(nameProvider == "" || nameProvider == null || nameProvider == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Nome Invalido"
            }
        }
        return knex('provider').where({name : nameProvider})
    }

    addProvider = async (provider)=>{
        if(provider.name == "" || provider.name == null || provider.name == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Nome Invalido"
            }
        }
        if(provider.company == "" || provider.company == null || provider.company == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Empresa Invalido"
            }
        }
        if(provider.tel1 == "" || provider.tel1 == null || provider.tel1 == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Telefone 1 Invalido"
            }
        }
        if(provider.tel2 == "" || provider.tel2 == null || provider.tel2 == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Telefone 2 Invalido"
            }
        }
        if(provider.email == "" || provider.email == null || provider.email == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Email Invalido"
            }
        }
        if(provider.cnpj == "" || provider.cnpj == null || provider.cnpj == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo CNPJ Invalido"
            }
        }
        if(provider.fisicaladress == "" || provider.fisicaladress == null || provider.fisicaladress == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Endereço Fisico Invalido"
            }
        }
        if(provider.activity == "" || provider.activity == null || provider.activity == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Atividade Invalido"
            }
        }

        return knex('provider').insert({
                name: provider.name,
                company: provider.company,
                tel1: provider.tel1,
                tel2: provider.tel2,
                email: provider.email,
                cnpj: provider.cnpj,
                cpf: provider.cpf,
                fisicaladress: provider.fisicaladress,
                activity: provider.activity
        })
    }

    deleteProvider = (idProvider) =>{
        if(idProvider == "" || idProvider == null || idProvider == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Código do Fornecedor Invalido"
            }
        }
        return knex('provider').delete().where({idprovider : idProvider})

    }

    updateProvider = (provider) =>{

        let providerforupdate = {}

        for (var key in provider) {
            if (provider.hasOwnProperty(key)) {
                providerforupdate[key] = provider[key]
            }
        }

        if(providerforupdate.idprovider == "" || providerforupdate.idprovider == undefined || providerforupdate.idprovider == null){
            return {
                errorCode : 1,
                errorDescription : "Campo ID Fornecedor Invalido"
            }
        }

        return knex('provider').where({idprovider : provider.idprovider}).update(providerforupdate)

    }

}