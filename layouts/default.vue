<template>
  <div class="q-layout">
    <QNavbar />
    <div class="q-layout__page">
      <nuxt />
    </div>
  </div>
</template>

<script>
import QNavbar from "@/components/QNavbar/index.vue";

export default {
  components: {
    QNavbar
  }
}
</script>
