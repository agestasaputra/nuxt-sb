<template>
  <div class="q-container">
    <b-form @submit="onSubmit" @reset="onReset">
      <!-- Email -->
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <!-- Name -->
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <!-- Food -->
      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <!-- Checkbox -->
      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <!-- Button Action -->
      <QButton 
        type="submit"
        className="q-btn"
        variant="primary"
        :isLoading="isLoading"
      >
        Submit
      </QButton>
      <QButton 
        type="reset"
        className="q-btn"
        variant="danger"
        :isDisabled="isLoading"
      >
        Reset
      </QButton>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import QButton from "@/components/QButton/index.vue";

export default {
  name: 'LandingPage',
  layout: 'default',
  components: {
    QButton
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      isLoading: false,
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      if (event) event.preventDefault()

      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.onReset()
        // alert(JSON.stringify(this.form))
      }, 5000)
    },
    onReset(event) {
      if (event) event.preventDefault()

      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    onSubmitClick() {}
  }
}
</script>
