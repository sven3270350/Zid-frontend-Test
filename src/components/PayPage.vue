<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = "pk_test_51LvOcdK1DZg0eOfwQ7jmkOzloL7aZIQzgpzb5ymiFNpLVX36vYsemJUf2VQGxVny0IdbI9cTD2EsmoVDByd1Zp4p00BuQBc3Ob";
    return {
      loading: true,
      lineItems: [
        {
          price: '1', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'https://vuestripe.com/stripe-checkout/sessions-generator/?state=success',
      cancelURL: 'https://vuestripe.com/stripe-checkout/sessions-generator/?state=cancel',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>