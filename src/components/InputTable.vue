<style scoped>
table {
  width: 100%;
  max-width: 350px;
}
th {
  font-size: 90%;
}
</style>


<template>
<div>
    <table class="input-table table table-striped table-bordered table-hover table-sm">
        <thead>
        <tr>
            <td style="min-width: 100px"></td>
            <th>外径</th>
            <th>許容引張応力</th>
        </tr>
        </thead>
        <tbody>
        <input-table-row :component="pin" @update="onUpdate(pin.name, $event)" />
        <input-table-row :component="shaft" @update="onUpdate(shaft.name, $event)" />
        <input-table-row :component="housing" @update="onUpdate(housing.name, $event)" />
        </tbody>
    </table>
</div>
</template>

<script>
import InputTableRow from "./InputTableRow.vue";

export default {
  props: ["pin", "shaft", "housing"],
  components: { InputTableRow },
  methods: {
    onUpdate(name, { prop, value }) {
      this.$emit("update", { name, prop, value });
    },
  },
};
</script>

<style>
</style>
