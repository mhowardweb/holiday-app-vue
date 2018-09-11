<template>
<ion-card-content>
    <ion-item>
      <ion-label>{{label}}</ion-label>
      <ion-datetime
        :name=name
        :display-format=dFormat
        :min=min
        :max=max
        :picker-format=pFormat
        :value=value
      />
    </ion-item>
   
  </ion-card-content>
</template>

<script>
export default {
  name: 'DateTime',
    props: {
      name: String,
      label: String,
      error: String,
      value: String,
      dFormat: String,
      pFormat: String,
      min: String,
      max: String
    } 
}
</script>