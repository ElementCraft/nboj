<script setup lang="ts">
import { List } from 'lodash';
import { ref } from 'vue';
import { getAllRole } from '../api/role';
import { Role } from '../entity/role';

let roles = ref([])

getAllRole().then((v) => roles.value= v);

</script>

<template>
  <div class="app">
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<style>

</style>
