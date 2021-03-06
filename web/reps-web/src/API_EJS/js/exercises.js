import { Api } from './api.js';

export { ExerciseApi, Exercise };

class ExerciseApi {
    static get url() {
        return `${Api.baseUrl}/exercises`;
    }

    static async add(excercise, controller) {
        console.log(excercise);
        const result= await Api.post(ExerciseApi.url, true, excercise, controller);
        if(result.id){
           const r1 = await ExerciseApi.getAll(null);
            console.log(r1);
        }else{
            console.log("No se podo agregar el ejercicio");
        }
    }

    static async modify(excercise, controller) {
        const result= await Api.put(`${ExerciseApi.url}/${excercise.id}`, true, excercise, controller);
        if(result.id){
            console.log("Se logro moficar el ejercicio ");
            console.log(excercise);
        }
        return result;
    }

    static async delete(excerciseID, controller) {
        return await Api.delete(`${ExerciseApi.url}/${excerciseID}`, true, controller);
    }

    static async get(excerciseID, controller) {
        return await Api.get(`${ExerciseApi.url}/${excerciseID}`,true, controller);
    }

    static async getAll(parameters,controller) {
        return await Api.get(`${ExerciseApi.url}?${parameters}`, true, controller);
    }
}

class Exercise {
    constructor(id, name, detail) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.detail = detail;
    }
}
