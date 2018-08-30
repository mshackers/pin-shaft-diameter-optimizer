<template>
  <div id="app" class="container" style="max-width: 640px; margin-top: 1rem;">
    <div style="margin-bottom: 2rem;">
      <input-table :pin="pin" :shaft="shaft" :housing="housing" @update="onUpdate" />
      <div>
      <label style="font-weight: bold">許容せん断応力/許容引張応力<input class="form-control" type="number" v-model.number="allowableShearStress"/></label>
      </div>
    </div>
    <output-table :results="[a,b,c,d,e,f,g]" />
  </div>
</template>

<script>
import InputTable from "./components/InputTable.vue";
import OutputTable from "./components/OutputTable.vue";

class Component {
  name;
  diameter;
  stress;

  constructor(name, diameter, stress) {
    this.name = name;
    this.diameter = diameter;
    this.stress = stress;
  }

  get radius() {
    return this.diameter / 2;
  }

  validate() {
    return this.diameter && this.stress;
  }
}

class Result {
  label;
  name;
  archH;
  rad;
  archArea;
  area;
  archShearStrength;
  n;
  nMm;

  constructor(name) {
    this.name = name;
  }
}

export default {
  name: "app",
  components: { InputTable, OutputTable },
  data() {
    return {
      pin: new Component("ピン", 3, 245),
      shaft: new Component("シャフト", 8, 245),
      housing: new Component("ハウジング", 12, 245),
      allowableShearStress: 0.8,
    };
  },
  computed: {
    a() {
      const radius = this.shaft.radius;
      const result = new Result("a: シャフト断面");
      result.archH = radius - this.pin.radius;
      result.rad = 2 * Math.acos(1 - result.archH / radius);
      result.archArea =
        result.rad * radius ** 2 / 2 -
        (radius - result.archH) *
          Math.sqrt(result.archH * (2 * radius - result.archH));
      result.area = 2 * result.archArea;
      result.archShearStrength =
        (this.pin.radius ** 3 *
          Math.log(
            Math.abs(Math.sqrt(radius ** 2 - this.pin.radius ** 2) - radius) /
              radius,
          ) -
          this.pin.radius ** 3 *
            Math.log(
              (Math.sqrt(radius ** 2 - this.pin.radius ** 2) + radius) / radius,
            ) -
          2 *
            this.pin.radius *
            radius *
            Math.sqrt(radius ** 2 - this.pin.radius ** 2) +
          4 * Math.acos(this.pin.radius / radius) * radius ** 3) *
        (this.shaft.stress * this.allowableShearStress / (12 * radius));
      result.n = result.area * this.shaft.stress;
      result.nMm = 4 * result.archShearStrength;
      return result;
    },
    b() {
      const radius = this.housing.radius;
      const result = new Result("b: ハウジング断面");
      result.archH = radius - this.pin.radius;
      result.rad = 2 * Math.acos(1 - result.archH / radius);
      result.archArea =
        result.rad * radius ** 2 / 2 -
        (radius - result.archH) *
          Math.sqrt(result.archH * (2 * radius - result.archH));
      result.area = 2 * (result.archArea - this.a.archArea);
      result.archShearStrength =
        (this.pin.radius ** 3 *
          Math.log(
            Math.abs(Math.sqrt(radius ** 2 - this.pin.radius ** 2) - radius) /
              radius,
          ) -
          this.pin.radius ** 3 *
            Math.log(
              (Math.sqrt(radius ** 2 - this.pin.radius ** 2) + radius) / radius,
            ) -
          2 *
            this.pin.radius *
            radius *
            Math.sqrt(radius ** 2 - this.pin.radius ** 2) +
          4 * Math.acos(this.pin.radius / radius) * radius ** 3) *
        (this.housing.stress * this.allowableShearStress / (12 * radius));
      const x =
        (this.pin.radius ** 3 *
          Math.log(
            Math.abs(
              Math.sqrt(this.shaft.radius ** 2 - this.pin.radius ** 2) -
                this.shaft.radius,
            ) / this.shaft.radius,
          ) -
          this.pin.radius ** 3 *
            Math.log(
              (Math.sqrt(this.shaft.radius ** 2 - this.pin.radius ** 2) +
                this.shaft.radius) /
                this.shaft.radius,
            ) -
          2 *
            this.pin.radius *
            this.shaft.radius *
            Math.sqrt(this.shaft.radius ** 2 - this.pin.radius ** 2) +
          4 *
            Math.acos(this.pin.radius / this.shaft.radius) *
            this.shaft.radius ** 3) *
        (this.housing.stress *
          this.allowableShearStress /
          (12 * this.shaft.radius));
      result.n = result.area * this.housing.stress;
      result.nMm = (result.archShearStrength - x) * 4;
      return result;
    },
    c() {
      const result = new Result("c: ピンとシャフトの接触 ピン");
      result.area = this.pin.diameter * this.shaft.diameter;
      result.archShearStrength =
        this.pin.diameter * this.pin.stress * this.shaft.radius ** 2 / 3;
      result.n = result.area * this.pin.stress;
      result.nMm = 2 * result.archShearStrength;
      return result;
    },
    d() {
      const result = new Result("d: ピンとシャフトの接触 シャフト");
      result.archShearStrength =
        this.pin.diameter * this.shaft.stress * this.shaft.radius ** 2 / 3;
      result.n = this.c.area * this.shaft.stress;
      result.nMm = 2 * result.archShearStrength;
      return result;
    },
    e() {
      const result = new Result("e: ピンとハウジングの接触 ピン");
      result.area =
        (this.housing.diameter - this.shaft.diameter) * this.pin.diameter;
      result.archShearStrength =
        this.pin.diameter *
        this.pin.stress *
        (this.housing.diameter ** 2 - this.shaft.diameter ** 2) /
        3;
      result.n = result.area * this.pin.stress;
      result.nMm = 2 * result.archShearStrength;
      return result;
    },
    f() {
      const result = new Result("f: ピンとハウジングの接触 ハウジング");
      result.archShearStrength =
        this.pin.diameter *
        this.housing.stress *
        (this.housing.diameter ** 2 - this.shaft.diameter ** 2) /
        3;
      result.n = this.e.area * this.housing.stress;
      result.nMm = 2 * result.archShearStrength;
      return result;
    },
    g() {
      const result = new Result("g: ピン断面のせん断");
      result.area = Math.PI * this.pin.radius ** 2;
      result.n = 2 * result.area * this.pin.stress * this.allowableShearStress;
      result.nMm = result.n * this.shaft.radius;
      return result;
    },
  },

  methods: {
    onUpdate({ name, prop, value }) {
      switch (name) {
        case "ピン":
          this.pin[prop] = value;
          break;
        case "シャフト":
          this.shaft[prop] = value;
          break;
        case "ハウジング":
          this.housing[prop] = value;
          break;
      }
    },
  },
};
</script>

<style>
</style>
