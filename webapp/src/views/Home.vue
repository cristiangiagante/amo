<template>
<b-container class="bv-example-row">
    <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
    </b-row>
    <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
    </b-row>
</b-container>
</template>

<script>
// @ is an alias to /src
import Turns from '@/components/Turns.vue'

export default {
  name: 'home',
  components: {
    Turns
  }
}
</script>
