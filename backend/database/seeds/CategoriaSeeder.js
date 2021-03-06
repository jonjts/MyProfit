'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Categoria = use('App/Models/Common/Categoria')

class CategoriaSeeder {

  async run() {

    //Cria as categorias
    let data = [
      {
        nome: 'Assinaturas',
        alias: 'assianturas'
      },
      {
        nome: 'Casa',
        alias: 'casa'
      },
      {
        nome: 'Educação',
        alias: 'educacao'
      },
      {
        nome: 'Lazer',
        alias: 'lazer'
      },
      {
        nome: 'Restaurante',
        alias: 'restaurante'
      },
      {
        nome: 'Saúde',
        alias: 'saude'
      },
      {
        nome: 'Serviços',
        alias: 'servicos'
      },
      {
        nome: 'Supermercado',
        alias: 'supermercado'
      },
      {
        nome: 'Transporte',
        alias: 'transporte'
      },
      {
        nome: 'Vestuário',
        alias: 'vestuario'
      },
      {
        nome: 'Outros',
        alias: 'outros'
      }
    ]

    await Categoria.createMany(data)

  }
}

module.exports = CategoriaSeeder
