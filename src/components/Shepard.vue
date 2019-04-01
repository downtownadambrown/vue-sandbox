<template>
  <div class="shepard">
    <h3>Shepard Vue Sandbox</h3>
    <h3
      v-if="loading"
      class="loading"
    >
      Loading. . . .
    </h3>
    <input v-model="newID" placeholder="ID" style="margin: 10px"/>
    <input v-model="newName" placeholder="New name to update" style="margin: 10px"/>
    <button type="submit" v-on:click="this.updateOrder">Request PATCH</button>
    <div
      v-for="order in orders"
    >
      <p>ID: {{ order.id }} | NAME: {{ order.name }}</p>
    </div>
    <h4>Update by ID</h4>
  </div>
</template>

<script>
  import apiTools from '@/api/api';

  export default {
    name: "Shepard",
    data() {
      return {
        loading: true,
        orders: [],
        newID: null,
        newName: null,
      }
    },
    created() {
      this.getOrders();
    },
    methods: {
      async getOrders() {
        this.loading = true;
        let response = await apiTools.getShows();
        response.json().then(resp => {
          this.orders = resp.data;
        });
        this.loading = false;
      },
      async updateOrder(event) {
        this.loading = true;
        let response = await apiTools.updateShow(this.newID, {
          "name": this.newName,
          status_id: "0",
        });
        response.json().then(resp => {
          this.getOrders();
        });
        this.loading = false;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
