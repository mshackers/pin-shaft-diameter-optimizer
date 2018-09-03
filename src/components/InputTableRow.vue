<style scoped>
th {
  font-size: 90%;
}
</style>

<template>
    <tr>
        <th>{{component.name}}</th>
        <td><input class="form-control" :value="component.diameterString" @input="onUpdate($event, 'diameterString')" /></td>
        <td><input class="form-control" type="number" :value="component.stress" @input="onUpdate($event, 'stress')" /></td>
    </tr>
</template>

<script>
export default {
  props: ["component"],
  methods: {
    onUpdate(e, prop) {
      this.$emit("update", { prop, value: e.target.value });
    },
  },
};
</script>

<style>
</style>
