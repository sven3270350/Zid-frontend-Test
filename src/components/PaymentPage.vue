<template>
  <form class="payment-form">
    <div class="form-group col-md-6">
      <label>Card number</label>
      <input class="form-control" v-cardformat:formatCardNumber>
    </div>
    <div class="form-group col-md-6">
      <label>Card Expiry</label>
      <input class="form-control" v-cardformat:formatCardExpiry>
    </div>
    <div class="form-group col-md-6">
      <label>Card CVC</label>
      <input class="form-control" v-cardformat:formatCardCVC>
    </div>
    <div class="form-group col-md-6">
      <label>Numeric input</label>
      <input class="form-control" v-cardformat:restrictNumeric>
    </div>
    <button class="btn btn-primary">Submit</button>
  </form>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .payment-form {
    padding-top: 50px;
    padding-left: 350px;
  }
  .payment-form > * {
    padding-bottom: 7px;
  }
</style>