<template>
  <div>
    <header id="header">
      <h1>{{ $route.name }} page</h1>
      <ul>
        <li>
          <NuxtLink to="/">홈페이지</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/main">메인페이지</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/product">상품페이지</NuxtLink>
        </li>
      </ul>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>