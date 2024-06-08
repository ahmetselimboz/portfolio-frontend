<!-- src/components/LanguageSwitcher.vue -->
<template>
  <div class="language-switcher">
    <label class="switch">
      <input type="checkbox" v-model="isTurkish" :checked="isTurkish" @change="toggleLanguage">
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';
import store from '@/store';
import SecureLS from "secure-ls";
const SecureLocalStorage = new SecureLS({ isCompression: false });

const { locale } = useI18n();
const isTurkish = ref(locale.value === 'tr');

const toggleLanguage = () => {
  locale.value = isTurkish.value ? 'tr' : 'en';
  //console.log(isTurkish.value);
  store.dispatch('updateLang', isTurkish.value);
};

onMounted(() => {
  const storedLang = SecureLocalStorage.get('lang');
  if (storedLang) {

    store.dispatch('updateLang', storedLang);
    isTurkish.value = storedLang == true ? 'tr' : 'en';
    locale.value = isTurkish.value ? 'tr' : 'en';
  }
  // Listen for potential changes in store.lang (optional)
  store.watch(
    state => state.lang,
    (newVal, oldVal) => {
     // isTurkish.value = newVal === "tr";
      //console.log(`Language changed from ${oldVal} to ${newVal}`);
    },
    { immediate: true } // Trigger for initial state on mount
  );
});
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;

}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #470089;
  font-weight: bold;
  font-family: "roboto";
}

/* input:checked + .slider {
    background-color: #2196F3;
  } */

input:checked+.slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;

}

.slider.round:before {
  border-radius: 50%;
  content: attr(data-lang);
}

/* Metin ekleme */
.slider.round::before {
  content: "En";
}

input:checked+.slider.round::before {
  content: "Tr";
}
</style>