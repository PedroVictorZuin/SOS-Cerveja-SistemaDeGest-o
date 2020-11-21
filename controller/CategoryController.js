const knex = require("../service/database")


module.exports = class Category {

    listAllCategory = ()=>{
        return knex('category')
    }

    listCategoryForID = (id)=>
    {
        return knex('category').where({idcategory : id})
    }

    listCategoryForName = (name)=>
    {
        return knex('category').where({name : name})
    }

    addCategory = async (category)=>
    {
        console.log(category)
        if(category.name == "" || category.name == undefined || category.name == null)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Nome Invalido"
            }
        }
        if(category.description == "" || category.description == undefined || category.description == null)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Descrição Invalido"
            }
        }
        if(category.dateregister == "" || category.dateregister == undefined || category.dateregister == null)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo Data de Registro Invalido"
            }
        }

        return knex('category').insert({name : category.name , description : category.description , dateregister: category.dateregister})
    }

    deleteCategory = async (idCategoria) =>{
        if(idCategoria == "" || idCategoria == undefined || idCategoria == null)
        {
            return {
                errorCode : 1,
                errorDescription : "Campo ID Categoria Invalido"
            }
        }

        return knex('category').delete().where({idcategory : idCategoria})
    }


    updateCategory = async (newcategory) =>{

        let categoryforupdate = {}

        for (var key in newcategory) {
            if (newcategory.hasOwnProperty(key)) {
                categoryforupdate[key] = newcategory[key]
            }
        }

        if(categoryforupdate.idcategory == "" || categoryforupdate.idcategory == undefined || categoryforupdate.idcategory == null){
            return {
                errorCode : 1,
                errorDescription : "Campo ID Categoria Invalido"
            }
        }


        return knex('category').where({idcategory : categoryforupdate.idcategory}).update(categoryforupdate)
    }
}