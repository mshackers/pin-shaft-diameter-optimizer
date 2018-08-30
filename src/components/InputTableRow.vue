<template>
    <tr>
        <th>{{component.name}}</th>
        <td><input class="form-control" type="number" :value="component.diameter" @input="onUpdate($event, 'diameter')" /></td>
        <td><input class="form-control" type="number" :value="component.stress" @input="onUpdate($event, 'stress')" /></td>
    </tr>
</template>

<script>
export default {
  props: ["component"],
  methods: {
    onUpdate(e, prop) {
      this.$emit("update", { prop, value: parseFloat(e.target.value) || "" });
    },
  },
};
</script>

<style>
</style>
