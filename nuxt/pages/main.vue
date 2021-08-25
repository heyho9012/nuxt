<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="product.imageUrl" :alt="product.name" />
        <p>{{ product.name }}</p>
        <p>${{ product.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // Nuxt => Server Side Rendering
  // NOTE: page component(pages 폴더 안에 있는 파일)에만 제공되는 속성
  async asyncData({ params, $http }) {
    const response = await axios.get('http://localhost:3000/products');
    const products = response.data.map(x => ({
      ...x,
      imageUrl: `${x.imageUrl}?random=${Math.random()}`,
    }));

    return { products };
  },

  // data() {
  //   return {
  //     products: []
  //   }
  // },

  // Vue => Client Side Rendering
  // async created() {
  //   const response = await axios.get('http://localhost:3000/products');
  //   console.log(response);
  //   this.products = response.data;
  // },
};
</script>

<style lang="scss" scoped></style>
