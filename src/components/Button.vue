<template>
  <ion-button type="submit" disabled="false" :color="color" >
        {{label}}
  </ion-button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      color: String,
      label: String
    } 
  }
</script>