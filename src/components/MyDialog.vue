<style scoped>
.main {
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.dialog-container {
  position: relative;
  max-width: 1200px;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
}
.dialog-header {
  padding: 1rem 2rem;
  height: 4rem;
  text-align: right;
}
.dialog-body {
  height: calc(100vh - 4rem);
  overflow: auto;
}
</style>
<template>
    <div class="main">
        <div class="wrapper"></div>
        <div class="dialog-container">
            <div class="dialog-header">
                <button type="button" class="close close-button" aria-label="Close" @click="$emit('close')">
                <span aria-hidden="true"><i class="fas fa-window-close"></i></span>
                </button>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
