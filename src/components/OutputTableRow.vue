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
        <td :class="{ 'table-danger': result.n === minN }">{{Math.round(result.n)}}</td>
        <td :class="{ 'table-danger': result.nMm === minNMm }">{{Math.round(result.nMm)}}</td>
    </tr>
</template>

<script>
export default {
  props: ["result", "minN", "minNMm"],
};
</script>

<style>
</style>
