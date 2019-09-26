<template lang="pug">
    div.y-button-container
        button.y-button(
        :disabled="disabled"
        :class="[\
            `y-button-${type}`,\
            {\
            'y-button-disabled': disabled\
            }\
        ]"
        @click.prevent="clickButton"
        @mouseover="$emit('hoverButton')"
        @mouseleave="$emit('leaveButton')")
            //- com icone
            div.y-button-icon(
            :class='[\
                `y-button-icon-position-${iconPosition}` ,\
            ]'
            v-if="icon && !isLoading")
                i( :style="!text ? { padding: 0 } : ''" :class="icon" )
                span( v-if="text") {{ text }}

            //- sem icone
            slot( name="text" v-if="!icon")
                span {{ text }}
            slot( name="loader" v-if="isLoading" )
                div.loader

</template>
<script>
export default {
  name: "YButton",
  props: {
    text: {
      type: String,
      default: () => ""
    },

    disabled: {
      type: Boolean,
      default: () => false
    },
    icon: {
      type: String,
      default: () => ""
    },
    iconPosition: {
      type: String,
      required: false,
      default: () => "left",
      validator(x) {
        return ["left", "top", "right"].indexOf(x) !== -1;
      }
    },
    type: {
      type: String,
      default: () => "primary",
      validator(x) {
        return ["primary", "second", "ghost"].indexOf(x) !== -1;
      }
    },
    isLoading: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    clickButton() {
      if (!this.disabled) {
        this.$emit("clickButton");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$btnRadius: 30px;
.y-button-container {
  display: flex;
  width: 100%;
}

.y-button {
  width: 100%;
  max-width: 200px;
  padding: 8px;
  display: flex;
  cursor: pointer;
  border-radius: $btnRadius;
  font-size: 1em;
  margin: 0 auto;
  outline: none;
  span {
    margin: auto;
  }
}

// /* y-Button Styling */

// /* Primary */
.y-button-primary {
  border: 2px solid transparent;
  color: white;
  background-color: $primary;
  transition: 0.4s all;
  font-weight: 600;
  &:hover {
    transform: scale(0.95);
  }
}

.y-button-primary.y-button-disabled {
  background-color: $gray;
  &:hover {
    transform: scale(1);
  }
}

// /* Second */
.y-button-second {
  padding: 0;
  border: none;
  background-color: transparent;
  color: $primary;
  transition: 0.4s all;
  font-weight: 600;
  &:hover {
    color: $second;
    transform: scale(1.02);
  }
}

.y-button-second.y-button-disabled {
  color: $gray;
  &:hover {
    transform: scale(1);
  }
}

// // /* Ghost */
.y-button-ghost {
  border: 2px solid $primary;
  color: $primary;
  background-color: transparent;
  transition: 0.4s all;
  font-weight: bold;
  &:hover {
    background: $primary;
    color: white;
  }
}

.y-button-ghost.y-button-disabled {
  border-color: $gray;
  color: $gray;
  &:hover {
    color: $gray;
    background-color: transparent;
  }
}

// // /* Default Loader */
.loader {
  border: 3px solid transparent;
  border-top: 3px solid $gray;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// // /* y-Button with Icon */

.y-button-icon {
  display: flex;
  justify-self: flex-start;
  align-items: center;
  padding: 5px 25px;
  & > i {
    font-size: 30px;
    &:before {
      position: relative;
      top: 2px;
    }
  }

  span {
    margin-left: 15px;
    font-size: 1em;
  }
}

// /* Icon Position */
.y-button-icon-position-top {
  flex-direction: column;
  & > i {
    padding-bottom: 5px;
  }
}

.y-button-icon-position-right {
  flex-direction: row-reverse;
  & > i {
    padding-left: 5px;
  }
}

.y-button-icon-position-left {
  & > i {
    padding-right: 5px;
  }
}
</style>
