<!-- src/components/LanguageSwitcher.vue -->
<template>

    <select v-model="currentLocale" @change="changeLocale">
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
    </select>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { locale } = useI18n();
const currentLocale = ref(locale.value);

const changeLocale = (event) => {
    locale.value = event.target.value;
};
</script>

<style>
.nav-mode {
    margin-right: 40px;
    display: flex;
    align-items: center;
}

#sun {
    display: block;
    font-size: 25px;
    color: var(--black);
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

#sun:hover {
    color: var(--gray);
}
</style>