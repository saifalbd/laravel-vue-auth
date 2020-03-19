<template>
  <Layout />
</template>

<script lang="ts">
// tslint:disable
import {Vue,Component} from 'vue-property-decorator';
import Layout from '@/components/Layout/authLayout.vue';
@Component({components:{Layout }})
export default class Login  extends Vue{}

</script>
