<template lang="pug">
    div(
        @click="openSelect = !openSelect, timeOutOpen()"
        :class="field.value != '' && field.valid ? 'correct' : !field.valid ? 'error' : ''"
    ).camp
        label(  v-if="hasLabel" :for="field.id"
                :class="focus || field.value != '' ? 'selectLabel' : ''")
                | {{ field.label }}
        div.input-container
          input(  :id="field.id"
                  v-model="field.value"
                  readonly
                  :style="hasLabel ? {'margin-top' : '5px'} : ''"
                  )
          div.icon( :class="openSelect ? 'selectIcon' : ''")
              svg(xmlns='http://www.w3.org/2000/svg', width='14.43', height='8.825', viewBox='0 0 14.43 8.825')
                  path(data-name='Caminho 277', d='M.514,7.824a.487.487,0,0,0,.339-.159L6.714,1.217l5.861,6.448a.49.49,0,1,0,.725-.66L7.079.16C7.071.151,7.059.148,7.051.14A.072.072,0,0,0,7.042.128.488.488,0,0,0,6.985.092.542.542,0,0,0,6.9.038a.508.508,0,0,0-.143-.03C6.741.007,6.729,0,6.717,0H6.712C6.7,0,6.687.007,6.674.008a.514.514,0,0,0-.143.03A.474.474,0,0,0,6.44.095a.439.439,0,0,0-.054.033L6.378.139c-.008.008-.021.012-.029.021L.127,7.005a.49.49,0,0,0,.387.819Z', transform='translate(13.93 8.325) rotate(180)', fill='current')
        div( v-if="openSelect" ).select
            nav( @mouseover="clearTimeOut()" @mouseout="timeOutOpen()")
                ul
                    li( @click="field.value = option"  v-for="(option,index) in options" :key="index") {{ option }}
</template>
<script>
export default {
  props: {
    options: {
      required: true
    },
    field: {
      type: Object,
      required: true
    },
    hasLabel: {
      type: Boolean,
      required: false,
      default: () => true
    }
  },
  data() {
    return {
      focus: false,
      openSelect: false,
      closeSelect: false
    };
  },
  methods: {
    timeOutOpen() {
      this.closeSelect = setTimeout(() => (this.openSelect = false), 15000);
    },
    clearTimeOut() {
      clearTimeout(this.closeSelect);
    }
  }
};
</script>

<style lang="scss" scoped>
.camp {
  width: 100%;
  padding: #{$padInputTop + px} 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid $primary;
  background-color: white;
  height: 50px;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  .icon {
    position: absolute;
    right: 20px;
    top: 14px;
    transition: 0.4s all;
  }
  .selectIcon {
    transform: rotateZ(180deg);
  }

  label {
    position: relative;
    top: 0;
    transition: 0.4s all;
    width: 100%;
    background-color: white;
    padding: 2px 5px;
    left: -5px;
    cursor: pointer;
    
    font-weight: 600;
    &:not(.selectLabel) {
      font-size: 0.9em;
      color: $dark_gray;
    }
  }

  .selectLabel {
    top: -25px;
    font-size: 0.85em;
    color: $primary;
  }
.input-container{
  display: block;
  margin-top: -25px;
}
  input {
    position: absolute;
    background-color: transparent;
    width: calc(100% - #{($padInputLeft * 2)}px);
    font-size: 0.9em;
    color: $black;
    border: none;
    cursor: pointer;
    outline: none;
    font-weight: 600;
  }
}

.select {
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 3;
  background-color: white;
  width: calc(100% + 2px);
  margin-left: -1px;
  padding: 0;
  border: 1px solid $primary;
  border-top-color: white;
  border-radius: 0 0 5px 5px;
  color: #707070;
  nav {
    max-height: 100px;
    overflow-y: auto;
    ul {
      list-style: none;
      padding: 0;
      li {
        padding: 10px 20px;
        // box-shadow: 0 0 1px rgba( $black, 0.2)
        margin: 4px 0;
        width: calc(100% - 3px);
        cursor: pointer;
        transition: 0.4s all;
        font-size: 0.9em;
        &:hover {
          color: white;
          // box-shadow: 0 0 1px $primary
          background-color: $primary;
        }
      }
    }
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
