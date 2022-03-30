<template>
  <div class="row justify-content-md-center">
    <div class="col-2">
      <h3>Pedidos</h3>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div class="card text-white bg-dark align-items-center">
          <img
            class="card-img-top"
            src="img/img1.png"
            alt="Card image cap"
            style="width: 25rem"
          />
          <div class="card-body">
            <form>
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
                  class="form-control"
                  id="number"
                  min="1"
                  max="5"
                  value="1"
                />
              </div>
              <div class="form-group text-nowrap">
                <label for="direccion" class="col-sm-2 col-form-label"
                  >Direccion de Envio</label
                >
                <input type="text" class="form-control" id="direccion" />
              </div>
              <div class="form-group text-nowrap">
                <label for="precio" class="col-sm-2 col-form-label"
                  >Precio $</label
                >
                <input
                  type="number"
                  readonly
                  class="form-control-plaintext text-white"
                  id="precio"
                  value="360"
                />
              </div>
              <div class="form-group text-nowrap">
                <label for="Total" class="col-sm-2 col-form-label"
                  >Total $</label
                >
                <input
                  type="number"
                  readonly
                  class="form-control-plaintext text-white"
                  id="Total"
                  value="360"
                />
              </div>
              <div class="form-group text-nowrap">
                <button class="btn btn-primary btn-lg">Pedir</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PedidosView'
};
</script>

<style>
</style>