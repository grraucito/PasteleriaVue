<template>
  <div class="row justify-content-md-center">
    <div class="col-2">
      <h3 class="text-nowrap">Pendientes de Cocina</h3>
    </div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col-4">
      <div class="card text-white bg-dark align-items-center">
        <img
          class="card-img-top"
          src="../assets/img1.png"
          alt="Card image cap"
          style="width: 25rem"
        />
        <div class="card-body">
          <div class="form-group">
            <label for="pastel" class="col-sm-2 col-form-label text-nowrap"
              >Pastel</label
            >
            <input
              type="text"
              readonly
              class="form-control-plaintext text-white"
              id="pastel"
              value="CREPE CAKE CONEJITOS"
            />
          </div>
          <div class="form-group text-nowrap">
            <label for="cantidad" class="col-sm-2 col-form-label"
              >Cantidad</label
            >
            <input
              type="number"
              class="form-control-plaintext text-white"
              id="number"
              min="1"
              max="5"
              value="2"
            />
          </div>
          <div class="form-group text-nowrap">
            <button class="btn btn-primary btn-lg">Cerrar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col-4">
      <div class="card text-white bg-dark align-items-center">
        <img
          class="card-img-top"
          src="../assets/img3.png"
          alt="Card image cap"
          style="width: 25rem"
        />
        <div class="card-body">
          <div class="form-group">
            <label for="pastel" class="col-sm-2 col-form-label text-nowrap"
              >Pastel</label
            >
            <input
              type="text"
              readonly
              class="form-control-plaintext text-white"
              id="pastel"
              value="CREPE CAKE HENNESSY"
            />
          </div>
          <div class="form-group text-nowrap">
            <label for="cantidad" class="col-sm-2 col-form-label"
              >Cantidad</label
            >
            <input
              type="number"
              class="form-control-plaintext text-white"
              id="number"
              min="1"
              max="5"
              value="1"
            />
          </div>
          <div class="form-group text-nowrap">
            <button class="btn btn-primary btn-lg">Cerrar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CocinaView",
};
</script>

<style>
</style>