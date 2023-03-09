<script setup>
</script>

<template>
  <div class="house-imagen-background"></div>

  <div class="container">
    
      <h1>Stokvisstraat 132</h1>
      <div class="field-style">
        <img src="../assets/ic_location@3x.png" alt="" />
        <p for="">11011 AA Amsterdam</p>
      </div>

      <div class="field-style">
        <img src="../assets/ic_price@3x.png" alt="" />
        <p for="">500.000</p>

        <img src="../assets/ic_size@3x.png" alt="" />
        <p for="">120 m2</p>

        <img src="../assets/ic_construction_date@3x.png" alt="" />
        <p for="">Built in 1990</p>
      </div>
      <div class="field-style">
        <img src="../assets/ic_bed@3x.png" alt="" />
        <p for="">1</p>

        <img src="../assets/ic_bath@3x.png" alt="" />
        <p for="">1</p>

        <img src="../assets/ic_garage@3x.png" alt="" />
        <p for="">Yes</p>
      </div>
      <p>
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  
</template>


<style scoped>
.house-imagen-background {
  position: relative;
  top: -10vh;
  width: 100%;
  height: 30vh;
  background-image: url('../assets/img_placeholder_house@3x.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: -14vh;
  z-index: -1;
}

.container {
  padding: 20px;
  border-radius: 20px 20px 0 0;
  background: var(--element-background2-color);
}
.field-style {
  display: flex;
  gap: 10px;
  align-items: center;
}
.field-style img {
  width: auto;
  height: 12px;
}
p {
  text-align: justify;
}
</style>