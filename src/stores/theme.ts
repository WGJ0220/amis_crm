import { defineStore } from 'pinia';

export const useTheme = defineStore('theme', {
    state: () => {
        return {
          theme: 'light',
          lang: 'en',
          antdToken: {},
        }
    },
});
