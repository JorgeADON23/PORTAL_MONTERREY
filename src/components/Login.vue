<template>
    <body>
        <div class="container">
            <div class="row filas">
                <div class="col">
                    <img class="logo" src="../assets/Img/ADON_logo.png">
                </div>
            </div>
            <div class="row filas">
                <div class="col">
                    <input type="text" v-model="nomUusario" class="form-control input" placeholder="Usuario">
                    <input type="password" v-model="passw0rd" class="form-control input" placeholder="Contrseña">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="user" id="user">
                        <label class="form-check-label" for="inlineCheckbox1">Usuario</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="admin" id="admin">
                        <label class="form-check-label" for="inlineCheckbox1">Administrador</label>
                    </div>
                </div>
            </div>
            <div class="row filas">
                <div class="col">
                    <div>
                        <button class="btn btn-danger btnIngrsar" @click="validarLogin" >Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>



<script>
import axios from 'axios';

export default {
    name: "ComponenteLogin",
    data(){
        return{
            nomUusario: null,
            passw0rd: null,
            token: null
        }
    },
    methods:{
        validarLogin(){
            axios.post(`http://localhost:5138/api/Login/Login/${this.nomUusario}/${this.passw0rd}`).then(response =>{
                this.token = response.data

                if(this.token){
                    localStorage.setItem('token',this.token )
                    this.$router.push({name: 'AreasDeTrabajo'});
                }
            })
        },
    }
}

</script>


<style>
@import url('../assets/Styles/Login.css');
</style>