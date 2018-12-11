<template>
  <section>
    <button @click="show = true"  class="edit-btn">Edit</button>
    <Modal v-if="show" :onClose="() => show = false">
      <form @submit.prevent="handleEdit" :goalToEdit="goal" label="Update">
        <label>Title:</label>
        <input v-focus v-model="goal.title" required>
        <label>Type:</label>
        <input v-model="goal.type" required>
        <label>Start date:</label>
        <input type="date" v-model="goal.startDate" required>
        <label>End date:</label>
        <input type="date" v-model="goal.endDate" required>
        <button>Edit</button>
      </form>
    </Modal>
  </section>
</template>

<script>
import Modal from '../shared/Modal';

export default {
  props: {
    onEdit: Function,
    goal: Object
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    Modal
  },
  methods: {
    handleEdit(goal) {
      return this.onEdit(goal)
        .then(() => {
          this.show = false,
          this.$router.go();
        });
    }
  }
};
</script>
