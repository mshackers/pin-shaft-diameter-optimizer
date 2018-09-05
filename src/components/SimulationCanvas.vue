<style scoped>
.canvas-container {
  width: 100%;
  max-width: 500px;
}
.canvas {
  width: 100%;
}
</style>

<template>
    <div class="canvas-container">
        <canvas width="500" height="250" class="canvas"></canvas>
        <canvas width="500" height="300" class="canvas"></canvas>
    </div>
</template>

<script>
export default {
  props: ["pin", "shaft", "housing", "results"],
  mounted() {
    this.ctx = this.$el.getElementsByClassName("canvas")[0].getContext("2d");
    this.ctx2 = this.$el.getElementsByClassName("canvas")[1].getContext("2d");
    this.draw();
    this.draw2();
  },

  watch: {
    "pin.radius": function() {
      this.draw();
      this.draw2();
    },
    "shaft.radius": function() {
      this.draw();
      this.draw2();
    },
    "housing.radius": function() {
      this.draw();
      this.draw2();
    },
  },

  methods: {
    draw() {
      this.ctx.save();

      const ratio = 50 / this.housing.radius;
      const rh = this.housing.radius * ratio;
      const dh = rh * 2;
      const rs = this.shaft.radius * ratio;
      const ds = rs * 2;
      const rp = this.pin.radius * ratio;
      const dp = rp * 2;
      const width = 500;
      const height = 250;
      const length = 250;
      const shift = 100;
      this.ctx.clearRect(0, 0, width, height);
      this.ctx.translate(60.5, 80.5);

      this.ctx.strokeRect(shift, 0, length, dh);
      this.ctx.clearRect(0, rh - rs, length, ds);
      this.ctx.strokeRect(0, rh - rs, length, ds);
      this.ctx.clearRect(170, 0, dp, dh);
      this.ctx.strokeRect(170, 0, dp, dh);

      this.dimensionLine(
        dh,
        shift + length + 5,
        0,
        `ΦDh=${this.housing.diameterString}`,
      );
      this.dimensionLine(
        ds,
        -5,
        rh - rs,
        `ΦDs=${this.shaft.diameterString}`,
        true,
      );
      this.dimensionLine(
        dp,
        100 + dp,
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
      this.ctx.rotate((Math.PI / 2) * 3);
      this.ctx.font = "18px monospace";
      this.ctx.fillText(text, 0, 0);
      this.ctx.restore();
    },

    draw2() {
      const ctx = this.ctx2;
      ctx.save();

      const ratio = 50 / this.housing.radius;
      const rh = this.housing.radius * ratio;
      const dh = rh * 2;
      const rs = this.shaft.radius * ratio;
      const rp = this.pin.radius * ratio;
      const dp = rp * 2;
      const width = 500;
      const height = 300;
      ctx.clearRect(0, 0, width, height);
      ctx.translate(100.5, 140.5);

      ctx.beginPath();
      ctx.arc(0, 0, rh, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, rs, 0, Math.PI * 2);
      ctx.stroke();

      ctx.save();
      ctx.translate(-rh, -rp);
      ctx.strokeRect(0, 0, dh, dp);

      ctx.restore();
      this.leadLine(
        rs / 4,
        -rp - (rs - rp) / 2,
        -rh - 50,
        `a ${this.results[0].roundedN},${this.results[0].roundedNMm}`,
      );
      this.leadLine(
        rh / 2,
        -rp - (rh - rp) / 2,
        -rh - 10,
        `b ${this.results[1].roundedN},${this.results[1].roundedNMm}`,
      );
      this.leadLine(
        rs / 2,
        rp,
        rh + 30,
        `c ${this.results[2].roundedN},${this.results[2].roundedNMm}`,
        { onlyText: true },
      );
      this.leadLine(
        rs / 2,
        rp,
        rh + 50,
        `d ${this.results[3].roundedN},${this.results[3].roundedNMm}`,
        { arrow: true, angle: -Math.PI / 6 },
      );
      this.leadLine(
        rs + (rh - rs) / 2,
        rp,
        rh - 25,
        `e ${this.results[4].roundedN},${this.results[4].roundedNMm}`,
        { onlyText: true },
      );
      this.leadLine(
        rs + (rh - rs) / 2,
        rp,
        rh - 5,
        `f ${this.results[5].roundedN},${this.results[5].roundedNMm}`,
        { arrow: true, angle: -Math.PI / 4 },
      );
      this.leadLine(
        rs,
        0,
        rh - 70,
        `g ${this.results[6].roundedN},${this.results[6].roundedNMm}`,
        { arrow: true, angle: -Math.PI / 1.7 },
      );

      ctx.restore();
    },

    leadLine(originX, originY, y, label, options = {}) {
      const { onlyText, arrow, angle } = options;
      const ratio = 50 / this.housing.radius;
      const rh = this.housing.radius * ratio;

      const ctx = this.ctx2;
      ctx.save();

      ctx.font = "18px monospace";
      ctx.fillText(label, rh + 40, y - 5);
      if (onlyText) {
        ctx.restore();
        return;
      }

      if (arrow) {
        ctx.save();
        ctx.translate(originX, originY);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(-3, +7);
        ctx.lineTo(0, 0);
        ctx.lineTo(+3, +7);
        ctx.stroke();
        ctx.restore();
      } else {
        ctx.moveTo(originX, originY);
        ctx.beginPath();
        ctx.arc(originX, originY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(rh + 30, y);
      ctx.lineTo(rh + 170, y);
      ctx.stroke();
      ctx.restore();
    },
  },
};
</script>
