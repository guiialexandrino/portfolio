<template>
  <header>
    <div class="nav">
      <div class="logo-header"></div>
      <div>NAV AQUI2</div>
    </div>
  </header>
  <div class="logo-container">
    <div class="logo-info">
      <div class="avatar">
        <div class="avatar-btn-change">
          <Button
            :disabled="avatarIsChanging"
            :circle="true"
            @click="handleChangeAvatar"
          >
            <ph-arrows-clockwise :size="20" weight="bold" />
          </Button>
        </div>
        <img
          ref="avatarRef"
          class="avatar-img rotation"
          :src="getImage(avatar)"
        />
      </div>
      <div class="color-logo"></div>
      <div class="background-logo"></div>
      <div class="span-frontend">
        <h1>FRONTEND</h1>
      </div>
      <div class="span-developer">
        <h1>DEVELOPER</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const avatar = ref('avatar2.png');
const avatarIsChanging = ref(false);
const avatarRef = ref(null);

function handleChangeAvatar() {
  avatarIsChanging.value = true;
  avatarRef.value.classList.remove('rotation');
  avatarRef.value.classList.add('animateHorizontalRotation');
  setTimeout(() => {
    if (avatar.value.includes('2')) {
      avatar.value = 'avatar.png';
    } else {
      avatar.value = 'avatar2.png';
    }
  }, 300);
  setTimeout(() => {
    avatarRef.value.classList.remove('animateHorizontalRotation');
    avatarIsChanging.value = false;
  }, 1500);
}

function getImage(img) {
  return new URL(`../../../assets/images/${img}`, import.meta.url);
}
</script>

<style scoped lang="less" src="./Header.less" />
