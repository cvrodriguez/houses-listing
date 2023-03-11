<script setup>
import Button from '../components/Button.vue'
import BackNavegation from '../components/BackNavegation.vue'
</script>

<template>
  <div class="margin-content">
    <div class="title">
      <BackNavegation></BackNavegation>
      <h1>Create new listing</h1>
    </div>
    <div class="container">
      <div class="form">
        <div class="control-field">
          <label for="">Street name*</label>
          <input type="text" placeholder="Enter the street name" />
        </div>
        <div class="horizontal-group-control-field">
          <div class="control-field">
            <label for="">House number*</label>
            <input type="text" placeholder="Enter house number" />
          </div>
          <div class="control-field">
            <label for="">Addition (optional)</label>
            <input type="text" placeholder="e.g.A" />
          </div>
        </div>
        <div class="control-field">
          <label for="">Post code*</label>
          <input type="text" placeholder="e.g. 1000A" />
        </div>
        <div class="control-field">
          <label for="">City*</label>
          <input type="text" placeholder="e.g. Utrecht" />
        </div>
        <div class="control-field">
          <label>Upload picture (PNG or JPG)*</label>
          <label for="file-upload" class="custom-file-upload">
            <img src="../assets/ic_plus_grey@3x.png" alt="" />
          </label>
          <input id="file-upload" type="file" />
        </div>
        <div class="control-field">
          <label for="">Price*</label>
          <input type="text" placeholder="e.g. $150.000" />
        </div>
        <div class="horizontal-group-control-field">
          <div class="control-field">
            <label for="">Size*</label>
            <input type="text" placeholder="e.g. 60m2" />
          </div>
          <div class="control-field">
            <label for="">Garage*</label>
            <select name="" id="">
              <option value="">Select</option>
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
        </div>
        <div class="horizontal-group-control-field">
          <div class="control-field">
            <label for="">Bedrooms*</label>
            <input type="text" placeholder="Enter amount" />
          </div>
          <div class="control-field">
            <label for="">Bathrooms*</label>
            <input type="text" placeholder="Enter amount" />
          </div>
        </div>
        <div class="control-field">
          <label for="">Construction date*</label>
          <input type="text" placeholder="e.g. 1900" />
        </div>
        <div class="control-field">
          <label for="">Description*</label>
          <textarea placeholder="Enter description" rows="10px" />
        </div>
        <Button class="post-primary">Post</Button>
      </div>
    </div>
  </div>
</template>



<style  scoped>
.title {
  display: none;
}
.container {
  max-width: 25rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.container::before {
  content: '';
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.5;
  z-index: -1;
  background-image: url('../assets/img_background@3x.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
}

.form {
  display: flex;
  flex-direction: column;
}
.horizontal-group-control-field {
  display: flex;
  gap: 10px;
}

.control-field {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 20px;
}

label {
  font-size: 12px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
}
input,
select,
textarea {
  border-radius: 8px;
  height: 5vh;
  padding-left: 20px;
  outline: none;
  border: none;
}
textarea {
  padding-top: 20px;
}

input[type='file'] {
  display: none;
}

.custom-file-upload {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px dashed #ccc;
  cursor: pointer;
  width: 15vh;
  height: 15vh;
  margin: 5px 0 0px 0;
}
.custom-file-upload img {
  width: 50px;
  height: 50px;
}

textarea {
  border: none;
  height: 10vh;
}

@media screen and (min-width: 768px) {
  .title {
    display: block;
  }
 
}
</style>