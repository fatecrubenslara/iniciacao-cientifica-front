
<template lang="pug">
    div(
        :class="field.value != '' && field.valid ? 'correct' : !field.valid ? 'error' : ''"
        :style="field.type == 'textarea' ? {'height': '90px', 'justify-content' : 'end'} : ''"
    ).camp
        label(  :for="field.id"
                :class="focus || field.value != '' ? 'selectLabel' : ''"
                :style="( field.type == 'textarea' && ( focus || field.value )) ? {'opacity': '0'} : field.type == 'textarea' ?  {'top' : '50%', 'transform': 'translateY(-50%)'} : ''"
                )

                | {{ field.label }}
        input(  :id="field.id"
                :disabled="field.disabled"
                @focus="focus = true"
                @blur="focus = false, field.valid = field.value != '', hasFunction(field)"
                :type="field.type"
                v-model="field.value"
                v-if="field.type != 'textarea' && field.type != 'money' && field.type != 'mask'"
                )
        textarea(
              v-else-if="field.type == 'textarea'"
              :id="field.id"
              :disabled="field.disabled"
              @focus="focus = true "
              @blur="focus = false, field.valid = field.value != '' "
              :type="field.type"
              v-model="field.value"
        )
        input(  :id="field.id"
                @focus="focus = true "
                @blur="focus = false, field.valid = field.value != '', hasFunction(field) "
                type="text"
                :disabled="field.disabled"
                v-model.lazy="field.value"
                v-money="money"
                @keyup="$emit('inputEvent')"
                v-else-if="field.type == 'money'"
                )
                //- v-if="!field.mask"
        input(  :id="field.id"
                @focus="focus = true "
                @blur="focus = false, field.valid = field.value != '', hasFunction(field) "
                type="text"
                :disabled="field.disabled"
                v-model.lazy="field.value"
                @keyup="$emit('inputEvent')"
                v-mask="mask"
                v-else
                )
</template>
<script>
import { mask } from "vue-the-mask";
import { VMoney } from "v-money";
export default {
  props: {
    field: {
      type: Object,
      required: true
    },
    mask: {
      type: String
    }
  },
  directives: {
    money: VMoney,
    mask
  },
  data() {
    return {
      focus: false,
      money: {
        decimal: ".",
        thousands: ",",
        prefix: "",
        precision: 2,
        masked: false
      }
    };
  },
  methods: {
    hasFunction(has) {
      if (has.focusFunction) {
        this.$emit("blurFunction");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$padInputTop: 10;
$padInputLeft: 15;

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}

input[type="number"] {
  appearance: textfield;
  margin: 0;
}

input[type="month"]::-webkit-inner-spin-button,
input[type="month"]::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}

input[type="month"] {
  appearance: textfield;
  margin: 0;
}

.correct {
  label {
    color: $dark_gray !important;
  }
}

.error {
  label {
    color: $red !important;
  }
}

.camp {
  width: 100%;
  padding: #{$padInputTop + px} #{$padInputLeft + px};
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid $primary;
  background-color: white;
  // display: flex;
  height: 50px;
  justify-content: center;
  flex-direction: column;
  position: relative;
  label {
    padding: 2px 5px;
    position: relative;
    z-index: 1;
    top: 3px;
    left: -5px;
    transition: 0.4s all;
    width: 100%;
    cursor: text;
    color: $dark_gray;
    font-weight: 600;
    &:not(.selectLabel) {
      font-size: 0.9em;
    }
  }

  .selectLabel {
    top: -20px;
    background-color: white;
    color: $primary!important;
    font-size: 0.85em;
  }

  input,
  textarea {
    display: block;
    position: absolute;
    background-color: transparent;
    font-weight: 600;
    width: calc(100% - #{($padInputLeft * 2)}px);
    font-size: 0.9em;
    margin-top: -14px;
    color: $black;
    border: none;
    outline: none;
  }
}

textarea {
  height: 55px;
  resize: none;
  margin-top: 0;
  color: $black;
  font-weight: 600;
  .labelTextarea {
    top: 50% !important;
  }
}
</style>
