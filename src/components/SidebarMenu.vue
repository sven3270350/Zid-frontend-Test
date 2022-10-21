<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          {
            header: 'Main Navigation',
            hiddenOnCollapse: true
          },
          {
            href: '/',
            title: 'Profile page',
            icon: 'fa fa-user'
          },
          {
            href: '/payment',
            title: 'Payment page',
            icon: 'fa fa-chart-area'
          }
        ]
      }
    }
  }
</script>