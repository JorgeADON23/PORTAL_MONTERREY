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
                    <input type="text" class="form-control input" placeholder="Usuario">
                    <input type="password" class="form-control input" placeholder="Contrseña">
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
                        <button class="btn btn-danger btnIngrsar" >Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>



<script>
export default {
    name: "ComponenteLogin"
}

</script>


<style>
@import url('../assets/Styles/Login.css');
</style>