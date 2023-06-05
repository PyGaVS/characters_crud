import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { Character } from 'App/Models/Character'

export default class opController {
    public async index ({view}:HttpContextContract){
        let characters = await Character.all()
        return view.render('op', {characters})
    }

    public async store ({request, response}: HttpContextContract){
        const data = request.only(['firstname', 'lastname'])

        /*const data = await request.validate({
            schema: schema.create({
                firstname: schema.string({ trim: true }, [
                    rules.maxLength(255)
                ]),
                lastname: schema.string({ trim: true }, [
                    rules.maxLength(255)
                ]),
            })
        })*/


        await Character.create(data)

        response.redirect().toRoute('op')
    }
}