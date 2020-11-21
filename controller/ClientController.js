const knex = require('../service/database')

module.exports = class Client {

    listClients =  async ()=>{
        return knex('client')
    }
    listClientsForId = async (id)=>{


        if(id == "" || id == undefined || id == null){
            return {
                errorCode : 1,
                errorDescription : "Campo Código do Cliente Invalido"
            }
        }


        return knex('client').where({idclient : id})
    }
    addClient =  async (client)=>{
        if(client.name == "" || client.name == undefined || client.name == null){
            return {
                errorCode : 1,
                errorDescription : "Campo Nome Invalido"
            }
        }
        if(client.lastname == "" || client.lastname == undefined || client.lastname == null){
                        return {
                errorCode : 1,
                errorDescription : "Campo Sobrenome Invalido"
            }
        }
        if(client.cpf == "" || client.cpf == undefined || client.cpf == null){
                        return {
                errorCode : 1,
                errorDescription : "Campo CPF Invalido"
            }
        }
        if(client.rg == "" || client.rg == undefined || client.rg == null){
                        return {
                errorCode : 1,
                errorDescription : "Campo RG Invalido"
            }
        }
        if(client.registerdate == "" || client.registerdate == undefined || client.registerdate == null){
                        return {
                errorCode : 1,
                errorDescription : "Campo Data de Registro Invalido"
            }
        }
        if(client.tel1 == "" || client.tel1 == undefined || client.tel1 == null){
                        return {
                errorCode : 1,
                errorDescription : "Campo Telefone 1 Invalido"
            }
        }
        if(client.tel2 == "" || client.tel2 == undefined || client.tel2 == null){
                        return {
                errorCode : 1,
                errorDescription : "Campo Telefone 2 Invalido"
            }
        }
        if(client.email == "" || client.email == undefined || client.email == null){
                        return {
                errorCode : 1,
                errorDescription : "Campo Email Invalido"
            }
        }
        if(client.adress == "" || client.adress == undefined || client.adress == null){
                        return {
                errorCode : 1,
                errorDescription : "Campo Endereço Invalido"
            }
        }

        return knex('client').insert({
            name : client.name,
            lastname : client.lastname,
            cpf : client.cpf,
            rg : client.rg,
            registerdate : client.registerdate,
            tel1: client.tel1,
            tel2: client.tel2,
            email: client.email,
            adress:client.adress

        })
    }
    deleteClient =  async (idClient)=>{

        if(idClient == "" || idClient == null || idClient == undefined)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo ID Cliente Invalido"
            }
        }

        console.log(idClient)
        return knex('client').delete().where({idclient : idClient})

    }
    updateClient =  async (client)=>{

        let clientforupdate = {}

        for (var key in client) {
            if (client.hasOwnProperty(key)) {
                clientforupdate[key] = client[key]
            }
        }

        if(clientforupdate.idclient == "" || clientforupdate.idclient == undefined || clientforupdate.idclient == null){
            return {
                errorCode : 1,
                errorDescription : "Campo ID Cliente Invalido"
            }
        }

        return knex('client').where({idclient : client.idclient}).update(clientforupdate)
    }


}