<template>
    <body>
        <div class="container-fluid" style=" padding: 0px;">

            <div class="row filas">
                <div class="col-3 sideBar" style="margin: 20px;">
                    <div>
                        <div class="row">
                            <div class="divIcon">
                                <img src="../assets/Img/ICON_RED.png" alt="" class="icon">
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
                                            <router-link to="/SistemasNuevo" class="aLinks">
                                                Sistemas Nuevos
                                            </router-link>
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
                                <div class="col" v-for="area in detallesArea" :key="area.idAreaT">
                                    <h4 style="text-align: left;" class="textHeader">{{ area.nomArea }}</h4>
                                </div>
                                <div class="col">
                                    <h4 style="text-align: right;" class="textHeader">(Usuario)</h4>
                                </div>
                            </div>
                        </div>
                        <div class="contentForms">
                            <div class="row">
                                <h1 style="text-align: left;">Base de Clientes</h1>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="RFC">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Nombre Sistema">
                                </div>
                            </div>
                        </div>
                        <div class="contentData">
                            <div class="row">
                                <div class="col">
                                    <div class="containerTablw" style="overflow: scroll;">
                                        <table class="table">
                                            <thead style="z-index: 999;">
                                                <tr>
                                                    <th scope="col">RFC</th>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">Fecha Alta</th>
                                                    <th scope="col">Activo</th>
                                                    <th scope="col">Ver</th>
                                                    <th scope="col">Modificar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="cliente in datosClientes" :key="cliente.idCliente">
                                                    <th style="text-align: left;">{{ cliente.rfc }}</th>
                                                    <td style="text-align: left;"> {{ cliente.nomCliente }} </td>
                                                    <td> {{ cliente.fechaAlta }}</td>
                                                    <td> {{ cliente.isActivo }}</td>
                                                    <td>
                                                        <a href="">
                                                            <span class="material-symbols-outlined"
                                                                style="color: goldenrod;">
                                                                visibility
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href="">
                                                            <span class="material-symbols-outlined">
                                                                edit
                                                            </span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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
    name: "BaseDeClientesC",
    data() {
        return {
            datosClientes: [],
            idAdt: null,
            $idAdt: null,
            area: null,
            nomArea: null,
            detallesArea: []
        }
    },
    mounted() {
        this.idAdt = parseInt(this.$route.params.area);
        this.clientesItf();
        this.datosArea();


    },
    methods: {
        clientesItf(){
            axios.get(`http://localhost:5138/api/Clientes/Clientes/${this.idAdt}`).then(resposne => {
                this.datosClientes = resposne.data
            }).catch(error => {
                console.error(error.message);
            })
        },

        datosArea() {
            axios.get(`http://localhost:5138/api/ADT/AreasDeTrabajo/${this.idAdt}`).then(response => (
                this.detallesArea = response.data

            )).catch(error => (
                console.error(error)
            ))
        }
    }
}

</script>


<style>
@import url('../assets/Styles/BaseClientes.css');
</style>