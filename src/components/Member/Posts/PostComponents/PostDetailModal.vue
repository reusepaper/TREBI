<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="post-column">
            <slot name="image-slider">imageSlider</slot>
          </div>

          <div class="post-column">
            <slot name="post-header">heaer</slot>
            <slot name="post-content">content</slot>
            <slot name="post-commentList">commentList</slot>
            <slot name="post-meta">meta</slot>
            <slot name="post-Input">input</slot>
          </div>

          <button class="closeBtn" @click="$emit('close')">X</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 300vh;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 928px;
  height: 578px;
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: grid;
  grid-template-columns: 578px 1fr;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}
.post-column {
  display: grid;
  grid-template-rows: 1fr 3fr 3fr 2fr 1fr;
  grid-auto-rows: 978px;
}
.closeBtn {
  position: absolute;
  right: -30px;
  top: -30px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 30px;
  border: none;
  transition: 0.2s linear;
  color: rgba(0, 0, 0, 0.7);
}
.closeBtn:focus {
  outline: none;
}
.closeBtn:hover {
  color: rgba(0, 0, 0, 0.3);
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
