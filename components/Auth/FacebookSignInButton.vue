<template>
  <button class="facebook" @click="logInWithFacebook">
    <img class="facebook-logo" src="~/assets/images/facebook.png" alt="" />
  </button>
</template>

<script>
// export default {
//   name: "facebookLogin",
//   mounted() {
//     if (process.client) {
//       this.initFacebookSdk();
//     }
//   },
//   props:['authenticator'],
//   methods: {
//     async logInWithFacebook() {
//       var ctx = this;
//       FB.getLoginStatus(function (response) {
//         if (response.status === "connected") {
//           ctx.handleLogin(response);
//         } else {
//           FB.login(
//             function (response) {
//               ctx.handleLogin(response);
//             },
//             { scope: "email,public_profile,user_birthday,user_gender" }
//           );
//         }
//       });
//     },
//     handleLogin(response) {
//       if (response.status === "connected") {
//         console.log("Logged in. Token : " + response.authResponse.accessToken);
//         this.$socialToken(response.authResponse.accessToken,'facebook');
//         if(response.authResponse.accessToken){
//           setTimeOut(this.authenticator(),4000)
//         }
//       }
//     },
//     initFacebookSdk() {
//       var fbRootDiv = document.createElement("div");
//       fbRootDiv.id = "fb-root";
//       document.body.appendChild(fbRootDiv);

//       window.fbAsyncInit = function () {};

//       (function (d, s, id) {
//         var js,
//           fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s);
//         js.id = id;
//         js.src = "https://connect.facebook.net/en_US/sdk.js";
//         fjs.parentNode.insertBefore(js, fjs);
//       })(document, "script", "facebook-jssdk");

//       FB.init({
//         appId: "1522221248165024",
//         cookie: true,
//         xfbml: true,
//         version: "v17.0",
//       });
//       // FB.AppEvents.logPageView();
//     },
//   },
// };
</script>
<style scoped>
.facebook-logo {
  height: 45% !important;
}
/* .button {
  color: white;
  min-width: 150px;
  background-color: #000000a1;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
} */
/* .facebook{
 height: 5rem;
width: 5rem;
border-radius: 100%;
background-color: rgba(246, 246, 246, 1);
display: flex;
justify-content: center;
align-items: center;
margin-left: 2em;
              } */
</style>