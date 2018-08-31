<style scoped>
table {
  width: 100%;
  max-width: 500px;
  min-width: 0;
  margin-right: auto;
  margin-left: auto;
}
th {
  font-size: 90%;
}
</style>
<template>
    <table class="table table-striped table-bordered table-hover table-sm">
        <thead>
        <tr>
            <th>壊れる部分</th>
            <th>最大荷重</th>
            <th>最大トルク</th>
        </tr>
        </thead>
        <tbody>
        <output-table-row v-for="result in results" :key="result.name" :result="result" :minN="minN" :minNMm="minNMm" />
        </tbody>
    </table>
</template>

<script>
import OutputTableRow from "./OutputTableRow.vue";
export default {
  components: { OutputTableRow },
  props: ["results"],
  computed: {
    minN() {
      return Math.min(...this.results.map(result => result.n));
    },
    minNMm() {
      return Math.min(...this.results.map(result => result.nMm));
    },
  },
};
</script>

<style>
</style>
