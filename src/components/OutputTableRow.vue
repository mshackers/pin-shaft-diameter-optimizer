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
        <td :class="{ 'table-danger': result.n === minN.first, 'table-warning': result.n === minN.second }">{{result.roundedN}}</td>
        <td :class="{ 'table-danger': result.nMm === minNMm.first, 'table-warning': result.nMm === minNMm.second }">{{result.roundedNMm}}</td>
    </tr>
</template>

<script>
export default {
  props: ["result", "minN", "minNMm"],
};
</script>

<style>
</style>
