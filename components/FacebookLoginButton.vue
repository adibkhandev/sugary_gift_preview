<template>
  <Button @click="loginWithFacebook"> Facebook </Button>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "1522221248165024",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v15.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
  methods: {
    async loginWithFacebook() {
      // Check if the user is already logged in with Facebook
      FB.getLoginStatus((response) => {
        if (response.status === "connected") {
          this.getUserInfo();
        } else {
          FB.login(
            (response) => {
              if (response.authResponse) {
                this.getUserInfo();
              } else {
                console.log("Login unsuccessful or cancelled.");
              }
            },
            { scope: "email, public_profile, user_birthday, user_gender" }
          );
        }
      });
    },
    getUserInfo() {
      FB.api(
        "/me",
        { fields: "email, public_profile, user_birthday, user_gender" },
        (response) => {
          console.log("Facebook user info:", response);
          // Here, you can use the user information as needed.
        }
      );
    },
  },
};
</script>