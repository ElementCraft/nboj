<script setup lang="ts">
import { ref } from 'vue';

// let date = ref('');
// let repo = ref(null);
// let bookByQuery = ref(null);
// let bookByParams = ref(null);

// getDate().then((res) => (date.value = res));
// fetchGithubStars('midwayjs/midway').then((res) => (repo.value = res));
// getBookByParams({ params: { id: '1' } }).then(
//   (res) => (bookByParams.value = res)
// );
// getBookByQuery({ query: { id: '2' } }).then((res) => (bookByQuery.value = res));

</script>

<template>
  <router-view></router-view> 
</template>

<style>
body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
