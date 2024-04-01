<script setup lang="ts">
const { x, y } = useMouse();
</script>

<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-5">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Lorem ipsum dolor sit amet
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        tempora nihil velit libero nostrum unde harum vitae fuga facilis
        recusandae veniam quis distinctio, quia soluta, blanditiis repellendus
        quaerat eligendi doloribus!
      </p>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        useMouse: {{ x }}, {{ y }}
      </p>
    </div>
  </div>
</template>
