<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
const { Layout } = DefaultTheme

const { frontmatter } = useData()

function randomLineStyle(i: number) {
  const rand = (min: number, max: number, precision = 0) =>
    (Math.random() * (max - min) + min).toFixed(precision)

  return {
    top: `${rand(20, 240)}px`,
    width: `${rand(40, 80)}px`,
    opacity: rand(0.2, 0.7, 2),
    animationDelay: `${rand(0, 1.5, 2)}s`,
    animationDuration: `${rand(1.5, 3, 2)}s`
  }
}
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <div class="hero-bg-lines">
        <span v-for="i in 10" :key="i" class="line" :style="randomLineStyle(i)" />
      </div>
    </template>

    <template #home-hero-image>
      <div class="eth-logo-bg" />
    </template>

    <template #home-features-after>
      <div class="container book-grid">
        <div
          v-for="(book, i) in frontmatter.hero.books || []"
          :key="i"
          class="book-card"
          :class="{ featured: book.featured }"
        >
          <div class="book-cover">
            <img :src="book.image" :alt="`${book.name} Cover`" />
          </div>
          <div class="book-info">
            <h3>{{ book.name }}</h3>
            <ETHButton :to="book.link" :disabled="book.disabled">{{ book.button }}</ETHButton>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.hero-bg-lines {
    position: absolute;
    top: 2.5em;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
}

.hero-bg-lines .line {
    position: absolute;
    left: 100%;
    width: 60px;
    height: 2px;
    background-color: #3b82f6;
    opacity: 0.2;
    animation: fly-left 2s linear infinite;
    border-radius: 1px;
}

@keyframes fly-left {
    0% {
        left: 100%;
        opacity: 0;
    }

    10% {
        opacity: 0.4;
    }

    50% {
        opacity: 0.8;
    }

    90% {
        opacity: 0.1;
    }

    100% {
        left: -20%;
        opacity: 0;
    }
}

.eth-logo-bg {
    position: absolute;
    top: 0;
    right: 5%;
    width: 280px;
    height: 280px;
    background-image: url('/ETH100-icon.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0.8;
    pointer-events: none;
}

.book-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    justify-content: center;
    align-items: stretch;
    margin: 1.5em auto;
    max-width: 1154px;
    padding: 30px;
}

.book-card {
    padding: 5px;
    text-align: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
}

.book-card.featured {
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.book-card.disabled {
    opacity: 0.5;
}

.btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.4rem 0.8rem;
    background-color: #3b82f6;
    color: white;
    border-radius: 4px;
    text-decoration: none;
}

@media (max-width: 640px) {
    .book-grid {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .book-card.featured {
        grid-row: auto;
    }
}

.book-cover {
    width: 100%;
    overflow: hidden;
    border-radius: 18px;
    box-shadow: 0 2px 8px rgb(43 116 155);
}

.book-card .book-cover img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}

.book-info {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    h3 {
        margin-top: 50px;
        text-align: left;
        font-size: 3rem;
        margin-left: 1em;
        font-weight: bold;
        text-shadow: 1px 1px 4px rgb(62 99 221);
    }

    .eth-btn {
        margin: 1em;
        align-self: end;
        width: fit-content;
        font-size: 1rem;
    }
}
</style>
