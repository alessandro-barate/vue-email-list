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
    async mailGeneration() {
      this.mails = [];
      const mailPromises = [];
      for (let i = 0; i < 10; i++) {
        mailPromises.push(axios.get(this.urlMails));
      }

      const mailResponses = await Promise.all(mailPromises);
      this.mails = mailResponses.map((response) => response.data.response);
    },
  },
}).mount("#app");
