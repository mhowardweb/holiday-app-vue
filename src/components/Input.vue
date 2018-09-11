<template>
<ion-card-content>
    <ion-item>
      <ion-label>{{label}}</ion-label>
      <ion-input  :name=name :value=value  />
    </ion-item>
   
  </ion-card-content>
</template>

<script>
export default {
  name: "Input",
  props: {
    name: String,
    label: String,
    error: String,
    value: [String, Number],
    type: String,
    inputmode: String,
    onInput: String
  }
};
</script>
