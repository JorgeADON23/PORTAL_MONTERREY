<template>
    <body>
        <div class="container-fluid" style="margin: 0;">
            <div class="row rowHeader">
                <div class="col encabezado">
                    <p style="text-align: left;">(Area de trabajo)</p>
                </div>
                <div class="col encabezado">
                    <p style="text-align: right;">(Usuario)</p>
                </div>
            </div>
            <div class="row" style="padding-left: 20px; padding-right: 20px;">
                <div class=" container containerData ">
                    <div class="row">
                        <div class="col-1 columnMenu">
                            <div class="row">
                                <div>
                                    <img src="../assets/Img/ICON_WHITE.png" alt="" class="icon">
                                </div>
                            </div>
                            <div class="row">
                                <nav class="main-menu">
                                    <ul style="list-style-type: none;">
                                        <li class="listado">
                                            <a href="">
                                                <i class="material-symbols-outlined icnosList" >groups</i>
                                                <span class="nav-text">
                                                    Base de Clientes
                                                </span>
                                            </a>

                                        </li>
                                        <li class="listado">
                                            <a href="#">
                                                <i class="material-symbols-outlined icnosList">sync</i>
                                                <span class="nav-text">
                                                    Renovaciones
                                                </span>
                                            </a>

                                        </li>
                                        <li class="listado " >
                                            <a href="#">
                                                <i class="material-symbols-outlined icnosList">add_box</i>
                                                <span class="nav-text">
                                                    Sistemas Nuevos
                                                </span>
                                            </a>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col columnData">
                            <div class="row">
                                <div style="margin-top: 70px; margin-left: 30px;">
                                    <h1 style="text-align: left; font-weight: bold;">Base de Clientes</h1>
                                </div>
                            </div>
                            <div>
                                <div class="row">
                                <div class="col-3">
                                    <div>
                                        <input class="form-control inputs" type="text" name="" id="">
                                    </div>
                                </div>
                                <div class="col-3">
                                    <input class="form-control inputs" type="text" name="" id="">
                                </div>
                                <div class="col">
                                    <button class="btn btn-primary btnBorrar ">Borrar</button>
                                </div>
                                <div class="col">
                                    <button class="btn btn-primary btnBuscar">Buscar</button>
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
export default {
    name: "BaseDeClientesC"
}

</script>


<style>
@import url('../assets/Styles/BaseClientes.css');
</style>