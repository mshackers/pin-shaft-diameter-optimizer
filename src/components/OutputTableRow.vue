<template>
    <tr>
        <th>{{result.name}}</th>
        <td>{{Math.round(result.n)}}</td>
        <td>{{Math.round(result.nMm)}}</td>
    </tr>
</template>

<script>
export default {
  props: ["result"],
};
</script>

<style>
</style>
