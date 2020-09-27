<template>
  <div :class="categories" v-if="items != null">
    <div v-for="item in items" :key="item._id">
      <Category :categoryId="item._id" />
    </div>
  </div>
</template>

<script>
import { FetchCategories } from "@/helpers/fetch";
import Category from "@/components/Category";

export default {
  name: 'Home',
  components: {
    Category
  },
  data() {
    return {
      loading: false,
      items: null,
      error: null,
    }
  },
  async created() {
    await this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      this.loading = true;
      const response = await FetchCategories();
      this.error = response.error || null;
      this.items = response.content.data || null;
      this.loading = false;
    }
  }
}
</script>