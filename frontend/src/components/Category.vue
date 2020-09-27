<template>
  <ul v-if="items != null">
    <li v-for="item in items" :key="item._id">
      {{item.name}}
    </li>
  </ul>
</template>
<script>
import { FetchItemsOfCategory } from "@/helpers/fetch";

export default {
  name: "Category",
  props: ["categoryId"],
  data() {
    return {
      loading: false,
      items: null,
      error: null,
    }
  },
  async created() {
    await this.fetchItems();
  },
  methods: {
    async fetchItems() {
      this.loading = true;
      const response = await FetchItemsOfCategory(this.categoryId);
      this.error = response.error || null;
      this.items = response.content.data.items || null;
      this.loading = false;
    }
  }
}
</script>