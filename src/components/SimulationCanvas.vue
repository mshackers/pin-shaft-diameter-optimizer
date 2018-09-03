<style scoped>
</style>

<template>
    <div>
        <canvas width="400" height="250" class="canvas"></canvas>
    </div>
</template>

<script>
export default {
  props: ["pin", "shaft", "housing"],
  mounted() {
    this.ctx = this.$el.getElementsByClassName("canvas")[0].getContext("2d");
    this.ctx.lineWidth = 1;
    this.draw();
  },

  watch: {
    "pin.radius": function() {
      this.draw();
    },
    "shaft.radius": function() {
      this.draw();
    },
    "housing.radius": function() {
      this.draw();
    },
  },

  methods: {
    draw() {
      this.ctx.save();

      const ratio = 50 / this.housing.radius;
      const hr = this.housing.radius * ratio;
      const hd = hr * 2;
      const sr = this.shaft.radius * ratio;
      const sd = sr * 2;
      const pr = this.pin.radius * ratio;
      const pd = pr * 2;
      const width = 400;
      const height = 250;
      const length = 230;
      const cx = width / 2;
      const cy = height / 2;
      const shift = 50;
      this.ctx.clearRect(0, 0, width, height);
      this.ctx.translate(60.5, 100.5);

      this.ctx.strokeRect(shift, 0, length, hd);
      this.ctx.clearRect(0, hr - sr, length, sd);
      this.ctx.strokeRect(0, hr - sr, length, sd);
      this.ctx.clearRect(100, 0, pd, hd);
      this.ctx.strokeRect(100, 0, pd, hd);

      this.dimensionLine(
        hd,
        shift + length + 5,
        0,
        `ΦDh=${this.housing.diameterString}`,
      );
      this.dimensionLine(
        sd,
        -5,
        hr - sr,
        `ΦDs=${this.shaft.diameterString}`,
        true,
      );
      this.dimensionLine(
        pd,
        100 + pd,
        0 - 5,
        `ΦDp=${this.pin.diameterString}`,
        true,
        Math.PI / 2,
      );

      this.ctx.restore();
    },

    dimensionLine(d, originX, originY, text, reverse, rotate) {
      this.ctx.save();
      this.ctx.translate(originX, originY);
      if (rotate) {
        this.ctx.rotate(rotate);
      }
      if (reverse) {
        this.ctx.scale(-1, 1);
      }
      this.ctx.beginPath();

      // 横線
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(40, 0);

      // 縦線
      this.ctx.moveTo(30, -30);
      this.ctx.lineTo(30, d);

      // 矢印
      this.ctx.moveTo(25, 10);
      this.ctx.lineTo(30, 0);
      this.ctx.lineTo(35, 10);
      this.ctx.moveTo(25, d - 10);
      this.ctx.lineTo(30, d);
      this.ctx.lineTo(35, d - 10);

      // 横線
      this.ctx.moveTo(0, d);
      this.ctx.lineTo(40, d);

      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.restore();

      // テキスト
      this.ctx.save();
      const padding = reverse ? -37 : 22;
      if (rotate) {
        this.ctx.translate(originX + 5, originY + padding);
        this.ctx.rotate(rotate);
      } else {
        this.ctx.translate(originX + padding, originY - 5);
      }
      this.ctx.rotate(Math.PI / 2 * 3);
      this.ctx.font = "18px monospace";
      this.ctx.fillText(text, 0, 0);
      this.ctx.restore();
    },
  },
};
</script>
