<template>
    <body>
        <div class="contrainer">
            <div class="row">
                <div class="ContenedorAdt">
                    <h1 style="font-size: 50px;">AREAS DE TRABAJO</h1>
                    <br>
                    <select name="" v-model="adtSeleccionada" id="" class="form-select listadoAdt" @change="irInicio">
                        <option  v-for="adt in datosAdt" :key="adt.idAreaT" :value="adt.idAreaT">
                            {{adt.nomArea}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </body>
    <footer class="pie">
        <div style="position: relative;" >
            <img src="../assets/Img/ICON_RED.png" alt="" class="icono">
        </div>
    </footer>
</template>



<script>

import axios from 'axios';

export default {
    name: "AreaDeTrabajosC",
    data(){
        return{
            datosAdt: [],
            adtSeleccionada: null
        }
        
    },
    mounted(){
        this.AreadDeTrabajo();
    },
    methods: {
        AreadDeTrabajo(){
            axios.get("http://localhost:5138/api/ADT/AreasDeTrabajo").then(response =>(
                this.datosAdt = response.data
            )).catch(error =>(
                console.error(error)
            ));
        },
        irInicio(){
            this.$router.push({name: 'BaseDeClientes', params: {area: this.adtSeleccionada}});
        }
    }
}

</script>


<style>
@import url("../assets/Styles/Adt.css");
</style>