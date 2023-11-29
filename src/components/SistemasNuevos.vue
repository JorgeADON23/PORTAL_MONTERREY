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
                                <h1 style="text-align: left;">Sistemas Nuevos</h1>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="RFC">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Nombre Sistema">
                                    <br>
                                    <a href="/SistemasNuevo/add" style="float: right;">Add</a>
                                </div>
                            </div>
                        </div>
                        <div class="contentData">
                            <div class="row">
                                <div class="col">
                                    <div class="containerTablw" style="overflow: scroll;">
                                        <table class="table">
                                            <thead  style="z-index: 999;">
                                                <tr>
                                                    <th scope="col">No. Solicitud</th>
                                                    <th scope="col">RFC</th>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">Fecha Solicitud</th>
                                                </tr>
                                            </thead>
                                            <tbody v-for="sol in lstSolicitudes" :key="sol.idSolicitud">
                                                <tr>
                                                    <td>{{ sol.idSolicitud }}</td>
                                                    <td>{{ sol.rfc }}</td>
                                                    <td>{{ sol.nomSistema }}</td>
                                                    <td>{{ sol.FecSolicitud }}</td>
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


export default{
    name: "SsistemasNuevosC",
    data(){
        return {
            lstSolicitudes: []        }
    },
    mounted(){
        this.listarSolicitudes();
    },
    methods: {
        listarSolicitudes(){
            axios.get("http://localhost:5138/api/Sistemas/ListarSolicitudes/1").then(response =>{
                this.lstSolicitudes = response.data;
            }).catch(error =>{
                console.error(error.message);
            })
        }
    }
}

</script>

<style>
@import url('../assets/Styles/BaseClientes.css');



</style>

