<template>
  <main class="container">
    <h2 class="list-title">카트 페이지</h2>
    <div class="list-wrapper">
      <ul>
        <li
          v-for="cartItem in $store.state.cartItems"
          :key="cartItem.id"
          class="list-item"
        >
          <img
            class="thumbnail"
            :src="cartItem.imageUrl"
            :alt="cartItem.name"
          />
          <div class="description">
            <p>{{ cartItem.name }}</p>
            <span>{{ cartItem.price }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="$store.state.cartItems.length > 0" class="extra-panel">
      <button type="button">구매하기</button>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
