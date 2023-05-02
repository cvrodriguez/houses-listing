<script setup>
import { ref } from 'vue'
import Button from './ButtonComponent.vue'
import { useField, useForm } from 'vee-validate'
import { toFormValidator } from '@vee-validate/zod'
import * as zod from 'zod'

const props = defineProps(['onSave', 'house'])
const requiredMessage = 'Required field missing.'
const defaultRequiredMessage = { required_error: requiredMessage }
const defaultHouseNumber = ref()
const defaultHouseStreetName = ref()
const image = ref()
const imagePreview = ref()

if (props.house) {
  const locationSplit = props.house.location.street.split(' ')
  defaultHouseNumber.value = parseInt(locationSplit.pop())
  defaultHouseStreetName.value = locationSplit.join(' ')
  imagePreview.value = props.house.image
}

const validationSchema = toFormValidator(
  zod.object({
    streetName: zod
      .string(defaultRequiredMessage)
      .nonempty(requiredMessage)
      .default(defaultHouseStreetName.value),
    houseNumber: zod
      .number(defaultRequiredMessage)
      .positive()
      .int()
      .default(defaultHouseNumber.value),
    numberAddition: zod.string().optional().default(''),
    zip: zod
      .string(defaultRequiredMessage)
      .nonempty(requiredMessage)
      .default(props.house ? props.house.location.zip : ''),
    city: zod
      .string(defaultRequiredMessage)
      .nonempty(requiredMessage)
      .default(props.house ? props.house.location.city : ''),
    imageValidation: zod
      .string(defaultRequiredMessage)
      .nonempty(requiredMessage)
      .default(props.house ? props.house.image : ''),
    price: zod
      .number(defaultRequiredMessage)
      .positive()
      .int()
      .default(props.house ? props.house.price : ''),
    size: zod
      .number(defaultRequiredMessage)
      .positive()
      .int()
      .default(props.house ? props.house.size : ''),
    hasGarage: zod
      .boolean(defaultRequiredMessage)
      .default(props.house ? props.house.hasGarage : false),
    bedrooms: zod
      .number(defaultRequiredMessage)
      .positive()
      .int()
      .default(props.house ? props.house.rooms.bedrooms : ''),
    bathrooms: zod
      .number(defaultRequiredMessage)
      .positive()
      .int()
      .default(props.house ? props.house.rooms.bathrooms : ''),
    constructionYear: zod
      .number(defaultRequiredMessage)
      .positive()
      .int()
      .gt(1900)
      .default(props.house ? props.house.constructionYear : ''),
    description: zod
      .string(defaultRequiredMessage)
      .nonempty(requiredMessage)
      .default(props.house ? props.house.description : '')
  })
)

const { handleSubmit, errors } = useForm({ validationSchema })
const { value: streetName } = useField('streetName')
const { value: houseNumber } = useField('houseNumber')
const { value: numberAddition } = useField('numberAddition')
const { value: zip } = useField('zip')
const { value: city } = useField('city')
const { value: imageValidation } = useField('imageValidation')
const { value: price } = useField('price')
const { value: size } = useField('size')
const { value: hasGarage } = useField('hasGarage')
const { value: bedrooms } = useField('bedrooms')
const { value: bathrooms } = useField('bathrooms')
const { value: constructionYear } = useField('constructionYear')
const { value: description } = useField('description')

const onSubmit = handleSubmit((values) => {
  props.onSave(values, image)
})

function uploadImageInput(event) {
  if (event.target.files[0]) {
    imageValidation.value = event.target.files[0].name
    image.value = event.target.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', (e) => {
      imagePreview.value = e.target.result
    })
    reader.readAsDataURL(image.value)
  } else {
    imageValidation.value = ''
    imagePreview.value = undefined
    image.value = undefined
    return
  }
}
</script>


<template>
  <form @submit="onSubmit" class="form">
    <div class="control-field">
      <label for="">Street name*</label>
      <input
        name="streetName"
        v-model="streetName"
        :class="{ errorField: errors.streetName }"
        type="text"
        placeholder="Enter the street name"
      />
      <span class="errorMessage">{{ errors.streetName }}</span>
    </div>

    <div class="horizontal-group-control-field">
      <div class="control-field">
        <label for="">House number*</label>
        <input
          name="houseNumber"
          v-model="houseNumber"
          :class="{ errorField: errors.houseNumber }"
          type="number"
          placeholder="Enter house number"
        />
        <span class="errorMessage">{{ errors.houseNumber }}</span>
      </div>

      <div class="control-field">
        <label for="">Addition (optional)</label>
        <input name="numberAddition" v-model="numberAddition" type="text" placeholder="e.g.A" />
        <span class="errorMessage">{{ errors.numberAddition }}</span>
      </div>
    </div>

    <div class="control-field">
      <label for="">Post code*</label>
      <input
        name="zip"
        v-model="zip"
        :class="{ errorField: errors.zip }"
        type="text"
        placeholder="e.g. 1000A"
      />
      <span class="errorMessage">{{ errors.zip }}</span>
    </div>

    <div class="control-field">
      <label for="">City*</label>
      <input
        name="city"
        v-model="city"
        :class="{ errorField: errors.city }"
        type="text"
        placeholder="e.g. Utrecht"
      />
      <span class="errorMessage">{{ errors.city }}</span>
    </div>

    <div class="control-field">
      <label>Upload picture (PNG or JPG)*</label>
      <label class="custom-file-upload" for="file-upload">
        <img class="custom-file-upload-img" v-if="imagePreview" :src="imagePreview" alt="" />

        <div class="custom-file-upload empty-img" v-else>
          <img src="../assets/ic_plus_grey@3x.png" alt="" />
        </div>
      </label>
      <input
        name="image"
        @change="uploadImageInput"
        :class="{ errorField: errors.imageValidation }"
        type="file"
        id="file-upload"
      />
      <span class="errorMessage">{{ errors.imageValidation }}</span>
    </div>

    <div class="control-field">
      <label for="">Price*</label>
      <input
        name="price"
        v-model="price"
        :class="{ errorField: errors.price }"
        type="number"
        placeholder="e.g. $150.000"
      />
      <span class="errorMessage">{{ errors.price }}</span>
    </div>
    <div class="horizontal-group-control-field">
      <div class="control-field">
        <label for="">Size*</label>
        <input
          name="size"
          v-model="size"
          :class="{ errorField: errors.size }"
          type="number"
          placeholder="e.g. 60m2"
        />
        <span class="errorMessage">{{ errors.price }}</span>
      </div>
      <div class="control-field">
        <label for="">Garage*</label>
        <select
          name="hasGarage"
          v-model="hasGarage"
          :class="{ errorField: errors.hasGarage }"
        >
          <option disabled value="">Select one option</option>
          <option :value="true">Yes</option>
          <option :value="false">No</option>
        </select>
        <span class="errorMessage">{{ errors.hasGarage }}</span>
      </div>
    </div>
    <div class="horizontal-group-control-field">
      <div class="control-field">
        <label for="">Bedrooms*</label>
        <input
          name="bedrooms"
          v-model="bedrooms"
          :class="{ errorField: errors.bedrooms }"
          type="number"
          placeholder="Enter amount"
        />
        <span class="errorMessage">{{ errors.bedrooms }}</span>
      </div>
      <div class="control-field">
        <label for="">Bathrooms*</label>
        <input
          name="bathrooms"
          v-model="bathrooms"
          :class="{ errorField: errors.bathrooms }"
          type="number"
          placeholder="Enter amount"
        />
        <span class="errorMessage">{{ errors.bathrooms }}</span>
      </div>
    </div>
    <div class="control-field">
      <label for="">Construction date*</label>
      <input
        name="constructionYear"
        v-model="constructionYear"
        :class="{ errorField: errors.constructionYear }"
        type="number"
        placeholder="e.g. 1900"
      />
      <span class="errorMessage">{{ errors.constructionYear }}</span>
    </div>
    <div class="control-field">
      <label for="">Description*</label>
      <textarea
        name="description"
        v-model="description"
        :class="{ errorField: errors.description }"
        placeholder="Enter description"
        rows="10px"
      ></textarea>
      <span class="errorMessage">{{ errors.description }}</span>
    </div>
    <Button class="post-primary">Post</Button>
  </form>
</template>
  
  
<style  scoped>
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
select {
  color: gray;
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
  cursor: pointer;
  width: 15vh;
  height: 15vh;
  margin: 5px 0 0px 0;
}
.custom-file-upload-img {
  width: 100%;
  height: 100%;
}
.empty-img {
  border: 2px dashed #ccc;
}

textarea {
  border: none;
  height: 10vh;
}
@media screen and (min-width: 768px) {
}
</style>