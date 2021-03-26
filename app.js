const app = Vue.createApp({
  //template:'<h1>Hello {{firstName}}</h1>',
  data() {
    return {
      firstName:'Edward',
      lastName:'Snowden',
      email:'snowden@gmail.com',
      gender:'male',
      picture:'https://randomuser.me/api/portraits/men/10.jpg', 
    }
  }
})

app.mount('#app')