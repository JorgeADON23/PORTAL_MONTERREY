<template>
    <body>
        <div class="container-fluid" style=" padding: 0px;">

            <div class="row filas">
                <div class="col-3 sideBar" style="margin: 20px;">
                    <div>
                        <div class="row">
                            <div class="divIcon">
                                <img src="../../assets/Img/ICON_RED.png" alt="" class="icon">
                            </div>
                        </div>
                        <div class="row">
                            <div>
                                <nav class="main-menu">
                                    <ul style="list-style-type: none;" class="ulMenu">
                                        <li class="listado">
                                            <span class="material-symbols-outlined icnosList">
                                                groups
                                            </span>
                                            <router-link to="/BaseDeClientes" class="aLinks">
                                                Base de Clientes
                                            </router-link>
                                        </li>
                                        <li class="listado">
                                            <span class="material-symbols-outlined icnosList">
                                                sync
                                            </span>
                                            <router-link to="/Renovaciones" class="aLinks">
                                                Renovaciones
                                            </router-link>

                                        </li>
                                        <li class="listado ">
                                            <span class="nav-text material-symbols-outlined icnosList">
                                                add_box
                                            </span>
                                            <a href="#" class="aLinks">
                                                Sistemas Nuevos
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="contenedorBc">
                        <div class="header">
                            <div class="row">
                                <div class="col">
                                    <h4 style="text-align: left;" class="textHeader">(Area de Trabajo)</h4>
                                </div>
                                <div class="col">
                                    <h4 style="text-align: right;" class="textHeader">(Usuario)</h4>
                                </div>
                            </div>
                        </div>
                        <div class="contentForms">
                            <div class="row">
                                <h1 style="text-align: left;">Nuevo Sistema</h1>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col">
                                    <label class="form-label label" style="text-align=left">RFC</label>
                                    <input type="text" class="form-control" v-model="addSistema.RFC">
                                </div>
                                <div class="col">
                                    <label class="form-label label">Nombre del Sistema</label>
                                    <input type="text" class="form-control" v-model="addSistema.NomSistema">
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col">
                                    <label class="form-label label">Distribuidor</label>
                                    <select class="form-select" v-model="addSistema.IdDistribuidor">
                                        <option v-for="dis in distribuidores" :key="dis.value" :value="dis.value" >
                                            {{ dis.label }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label class="form-label label">Constancia</label>
                                    <input type="text" class="form-control" v-model="addSistema.Constancia">
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col">
                                    <label class="form-label label">Contrato</label>
                                    <input type="text" class="form-control" v-model="addSistema.Contrato">

                                </div>
                                <div class="col">
                                    <label class="form-label label">Plan Inicial</label>
                                    <select class="form-select" v-model="addSistema.PlanIncial">
                                        <option v-for="plan in planFolios" :key="plan.value" :value="plan.value">
                                            {{ plan.label }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col">
                                    <label class="form-label label">Telefono</label>
                                    <input type="text" class="form-control" v-model="addSistema.Telefono">

                                </div>
                                <div class="col">
                                    <label class="form-label label">Correo</label>
                                    <input type="text" class="form-control" v-model="addSistema.Correo">
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col">

                                </div>
                                <div class="col" >
                                    <button class="btn btn-primary" @click="enviarSolicitud" style="float: right">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>


<script>

import axios from 'axios';

export default {
    name: "AgregarSistema",
    data (){
        return{
            planFolios: [
                {value: 20, label:"20 Folios"},
                {value: 50, label:"50 Folios"},
                {value: 100, label:"100 Folios"},
                {value: 200, label:"200 Folios"},
                {value: 300, label:"300 Folios"},
                {value: 400, label:"400 Folios"},
                {value: 500, label:"500 Folios"},
                {value: 1000, label:"1000 Folios"},
                {value: 2000, label:"2000 Folios"},
                {value: 3000, label:"3000 Folios"},
                {value: 4000, label:"4000 Folios"},
                {value: 5000, label:"5000 Folios"}

            ],
            distribuidores: [
                {value: 1, label: 'Ninguno'}

            ],
            addSistema: {
                NomSistema : null,
                RFC: null,
                IdDistribuidor: null,
                Constancia: null,
                Contrato: null,
                PlanIncial: null,
                Telefono: null,
                Correo: null,
                EstatusPago: 0,
                Estatus: 0,
                IdAreaT: 1
            }
        }
    },
    methods: {
        enviarSolicitud(){
            axios.post("http://localhost:5138/api/Sistemas/SolicitudSistema", this.addSistema).then((response) =>(
                alert(response.data),
                window.location.reload()
            )).catch(error =>(
                console.error(error.message)
            ))
        }
    }
}

</script>

<style>
@import url('../../assets/Styles/BaseClientes.css');

.label{
    float: left
}


</style>
