"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      mails: [],
      urlMails: "https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },
  methods: {
    mailGeneration() {
      for (let i = 0; i < 10; i++) {
        this.mails.push(axios.get(this.urlMails));

        console.log(response);
      }
      console.log(this.mails);
    },
  },
}).mount("#app");
