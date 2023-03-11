
<script setup>
</script>

<template>
  <div class="card">
    <router-link to="/detail-listing">
      <div class="img-container"></div>
    </router-link>

    <div class="inf-container">
      <div class="title-and-icos">
        <h2>Stokvisstraat 132</h2>
        <div class="icos">
          <img src="../assets/ic_edit@3x.png" alt="" />
          <img src="../assets/ic_delete@3x.png" alt="" />
        </div>
      </div>

      <p class="price">$ 500.000</p>
      <p class="address">1011AA Amsterdam</p>

      <div class="utilitis">
        <img src="../assets/ic_bed@3x.png" alt="" />
        <span>1</span>
        <img src="../assets/ic_bath@3x.png" alt="" />
        <span>1</span>
        <img src="../assets/ic_size@3x.png" alt="" />
        <span>120 m2</span>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card {
  display: flex;
  height: 100px;
  background-color: var(--element-background2-color);
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0 10px 0;
}
.img-container {
  width: 100px;
  height: 100px;
  justify-content: center;
  background-image: url('../assets/img_placeholder_house@3x.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
}

.inf-container {
  margin-left: 15px;
  flex-grow: 1;
}
.title-and-icos {
  display: flex;
  justify-content: space-between;
}
.icos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.title-and-icos img {
  width: 12px;
  height: 14px;
  margin-left: 0;
}

.inf-container h2 {
  margin: 0;
}

.price {
  margin-top: 8px;
  font-size: 14px;
  color: var(--font-secondary-color);
  font-weight: bold;
}
.address {
  margin-top: -3px;
  color: var(--font-secondary-color);
  font-size: 14px;
  font-weight: lighter;
}
.utilitis {
  display: flex;
  gap: 10px;
}
.utilitis img {
  width: 14px;
  height: 14px;
}
</style>