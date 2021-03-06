import {Api} from "../API_EJS/js/api";

export default {
    token: Api.token,
    listaRutinas: [],
    listaEjercicios: [],
    cardID: 0,
    otrasRutinas: [],
    lengthAuxOtrasRutinas: 0,
    rutinasFavoritas: [],
    idFavoritas:[],
    cyclesOfRutine: [],
    exersisesOfRoutineOnCycle:[],
    allUsernames: [],
    user: 'USER_ID',
    userFirstName:'USER_FIRST_NAME',
    userLastName:'USER_LAST_NAME',
    userDate: null,
    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    userInfo: {username:'',password:'',email:''},
    ejsCycleAux: [],
    rutinaCompartida: {},
}