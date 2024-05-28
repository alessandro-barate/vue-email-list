"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      mails: Array(10),
      index: 10,
      urlMails: "https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },
  created() {
    axios.get(this.urlMails).then((response) => {
      console.log(response.data);
      this.mails = response.data;
      // console.log(response.data.response);
      console.log(this.mails);
    });
  },
}).mount("#app");
