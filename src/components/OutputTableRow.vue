<style scoped>
th {
  font-size: 90%;
}
code {
  font-size: 1.2rem;
}
</style>
<template>
    <tr>
        <th><code>{{result.label}}</code> : {{result.name}}</th>
        <td :class="{ 'table-danger': result.n === minN.first, 'table-warning': result.n === minN.second }">{{n}}</td>
        <td :class="{ 'table-danger': result.nMm === minNMm.first, 'table-warning': result.nMm === minNMm.second }">{{nMm}}</td>
    </tr>
</template>

<script>
function round(i) {
  if (i < 0.1 || 100000 <= i) {
    return i.toExponential(2);
  }
  return parseFloat(i.toPrecision(3));
}

export default {
  props: ["result", "minN", "minNMm"],
  computed: {
    n() {
      return round(this.result.n);
    },
    nMm() {
      return round(this.result.nMm);
    },
  },
};
</script>

<style>
</style>
