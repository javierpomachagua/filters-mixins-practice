<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>Local Filter: {{ text | reverseText }}</p>
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>Global Filter: {{ text | countText }}</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>Computed Property: {{ reverseText }}</p>
        <p>Computed Property: {{ countText }}</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p>Computed Property Mixin: {{ countTextMixin }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { textMixin } from "./textMixin.js";

export default {
  mixins: [textMixin],
  data() {
    return {
      text: "Hello World!"
    };
  },
  filters: {
    reverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reverseText() {
      return this.text
        .split("")
        .reverse()
        .join("");
    },
    countText() {
      return this.text + " (" + this.text.length + ")";
    }
  }
};
</script>

<style>
</style>
