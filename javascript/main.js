"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      mails: Array(10),
      index: 10,
    };
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        this.mails = response.data.response;
        // console.log(response.data.response);
        // console.log(this.mails);
      });
  },
}).mount("#app");
