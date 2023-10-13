<script setup>
import axios from "axios";
let { $tokenize, $toast } = useNuxtApp();
let activeNavAuth = ref(0);
let loading = ref(false);
// let firstname = ref(null);
// let username = ref(null);
let props = defineProps(["authenticator"]);
let loginData = reactive({
  UserName: null,
  Password: null,
});
let login = () => {
  loading.value = true;
  console.log("clicked");
  let url = useRuntimeConfig().public.baseUrl + "Account/Login";
  if (loginData.UserName && loginData.Password) {
    axios
      .post(url, loginData)
      .then((response) => {
        console.log(response.data, "login data");
        $tokenize(response.data.Token, response.data.RefreshToken);
        loading.value = false;
        props.authenticator();
      })
      .catch((err) => {
        console.log(err);
        loading.value = false;
        $toast("Incorrect Credentials");
      });
  } else {
    loading.value = false;
    $toast("Please fill all fields");
  }
};
let register = () => {
  console.log("clicked");
  loading.value = true;
  let url = useRuntimeConfig().public.baseUrl + "Account/Signup";
  if (
    signupData.FirstName &&
    signupData.LastName &&
    signupData.Email &&
    signupData.Password
  ) {
    axios
      .post(url, signupData)
      .then((response) => {
        console.log(response.data, "signup data");
        $tokenize(response.data.Token, response.data.RefreshToken);
        loading.value = false;
        props.authenticator();
      })
      .catch((err) => {
        console.log(err);
        loading.value = false;
        $toast("Incorrect Credentials");
      });
  } else {
    loading.value = false;
    $toast("Please fill all fields");
  }
};
watch([signupData, loginData], () => {
  console.log(signupData, loginData);
});

watch(activeNavAuth, () => {
  console.log(activeNavAuth.value, "auth navigation");
});
</script>
<template>
  <div class="auth-container">
    <div class="intro">
      <div class="text">
        <img src="~/assets/images/finger.png" alt="" class="print" />
        <div class="heading">TO OPEN YOUR GIFT</div>
        <div id="first" class="subheading">confirm your</div>
        <div class="subheading">identity</div>
      </div>
      <div class="hero-image">
        <img src="~/assets/images/auth-logo.png" alt="" />
      </div>
    </div>
    <div class="auth">
      <div class="nav">
        <h1
          :class="{ active: activeNavAuth == 0 }"
          @click="() => (activeNavAuth = 0)"
        >
          Authentication
        </h1>
        <h1
          :class="{ active: activeNavAuth >= 100 }"
          @click="() => (activeNavAuth = 100)"
        >
          Email Login
        </h1>
        <div :class="{ activeHover: activeNavAuth >= 100 }" class="hover"></div>
      </div>
      <div class="options-container">
        <div
          v-if="loading"
          class="loading h-60 flex justify-center items-center"
        >
          <MiniLoader></MiniLoader>
        </div>
        <div
          v-else
          :style="{ marginLeft: '-' + activeNavAuth + '%' }"
          class="options"
        >
          <div class="buttons">
            <AuthFacebookSignInButton :authenticator="props.authenticator" />
            <AuthGoogleSignInButton />
            <AuthAppleSignInButton />
          </div>
          <div class="login w-screen">
            <div class="inputs">
              <input
                v-model="loginData.UserName"
                placeholder="Your Email Address"
                type="text"
                class="log"
              />
              <input
                v-model="loginData.Password"
                placeholder="Your Password"
                type="password"
                class="log"
              />
            </div>
            <div class="btns">
              <button @click="() => (activeNavAuth = 210)" class="sub">
                Don't have an account?
              </button>
              <button class="cta" @click="() => login()">Sign In</button>
            </div>
          </div>
          <div class="signup">
            <div class="inputs">
              <div class="names">
                <input
                  v-model="signupData.FirstName"
                  id="firstname"
                  placeholder="First Name"
                  type="text"
                  class="log"
                />
                <input
                  v-model="signupData.LastName"
                  id="lastname"
                  placeholder="Last Name"
                  type="text"
                  class="log"
                />
              </div>
              <input
                v-model="signupData.Email"
                placeholder="Your Email"
                type="text"
                class="log"
              />
              <input
                v-model="signupData.Password"
                placeholder="New Password"
                type="text"
                class="log"
              />
            </div>
            <div class="btns">
              <button class="sub" @click="() => (activeNavAuth = 100)">
                Already a member??
              </button>
              <button
                class="cta"
                @click="() => register('/Account/Signup', signupData)"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.emailActive {
  margin-left: -90%;
}
.active {
  color: #fff !important;
  border-color: rgba(71, 78, 91, 1) !important;
  transition: all ease-in 0.4s;
  font-weight: 700 !important;
}
.activeHover {
  left: 50% !important;
  transition: all ease-in 0.4s;
}
.auth-container {
  width: 100%;
  font-size: 1rem;
  padding: 1em 2em 0em 2em;

  @media (width<470px) {
    font-size: 0.9rem;
  }
  @media (width<410px) {
    font-size: clamp(0.6rem, 3.5vw, 0.86rem);
  }
  @media (width>580px) {
    font-size: clamp(0.8rem, 3.2vw, 2rem);
  }
  @media (width>850px) {
    font-size: 1.4rem;
    padding: 2em 5em;
  }
  @media (width>850px) {
    padding: 0 8vw;
    margin-top: 2em;
  }
  .intro {
    font-size: inherit;
    width: 100%;
    height: 50%;
    margin-bottom: 3.4em;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .text {
      width: 50%;
      font-size: 1em;
      .heading {
        font-family: Cairo;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.9);
        font-size: 1em;
        margin-bottom: 0.6em;
        margin-top: 1.2em;
      }
      .subheading {
        font-family: Playfair Display;
        font-style: italic;
        font-weight: 800;
        font-size: 3em;
        line-height: 1.1;
        color: rgba(255, 255, 255, 0.9);
      }
      #first {
        font-size: 2em;
        white-space: nowrap;
      }
    }
    .hero-image {
      height: 5em;
      margin-bottom: 1.1em;
      margin-right: 0.4em;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        width: 100%;
        @media (width>855px) {
          width: 70% !important;
          max-width: 12em;
        }
      }
    }
  }
  .auth {
    @media (width>600px) {
      margin-top: 3em;
    }
    .nav {
      position: relative;
      margin-top: 4vh;
      display: flex;
      justify-content: space-around;
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 100em;
      border: solid 1px rgba(255, 255, 255, 0.05);
      h1 {
        font-family: Cairo;
        font-weight: 600;
        padding: 1em 0;
        width: 60%;
        border-radius: inherit;
        text-align: center;
        margin: 0px 2px;
        cursor: crosshair;
        color: rgba(255, 255, 255, 0.35);
      }
      .hover {
        position: absolute;
        z-index: -1;
        left: 0;
        width: 50%;
        height: 100%;
        border-radius: inherit;
        background: rgba(0, 0, 0, 0.2);
        transition: all ease-in 0.4s;
      }
    }
    .options-container {
      width: 100%;
      overflow: hidden;
      .options {
        transition: all ease-in 0.4s;
        margin-top: 2em;
        width: 300%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-left: -200%;

        @media (width>600px) {
          margin-top: 0.8em;
        }
        .buttons,
        .login,
        .signup {
          width: 100%;
        }
        .buttons {
          display: flex;
          justify-content: space-around;
          align-items: center;
          transition: all ease-in 0.5s;
          width: 100%;
          height: 10em;
          .facebook,
          .google,
          .apple {
            height: 6em;
            width: 6em;
            border-radius: 100%;
            background-color: rgba(255, 255, 255, 0.07);
            border: solid 1px rgba(255, 255, 255, 0.05);
            display: flex;
            justify-content: center;
            align-items: center;

            @media (width<500px) {
              font-size: 0.9rem;
            }
            @media (width<400px) {
              font-size: clamp(0.6rem, 3.5vw, 0.86rem);
            }
            img {
              height: 10% !important;
            }
          }
        }
        .login,
        .signup {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2em;
          .inputs {
            width: 100%;
            input {
              width: 96%;
              margin-left: 2%;
              height: 4.2em;
              margin-bottom: 1.1em;
              padding: 2em;
              color: #ffffff;
              font-size: 0.8em;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
                rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
              font-family: Cairo;
              font-weight: 700;
              border-radius: 100px;
              border: 1px solid rgba(255, 255, 255, 0.05);
              background: rgba(0, 0, 0, 0.1);
              &::placeholder {
                color: #9999a1;
                font-weight: 600;
              }
            }
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
              transition: background-color 5000s ease-in-out 0s;
            }
          }
          .btns {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            margin-top: 1em;

            .cta {
              font-size: 0.8em;
              padding: 1.4em 3em;
              font-weight: bold;
              text-transform: uppercase;
              background-color: #5eae6b;
              color: rgba(0, 0, 0, 0.4);
              border-radius: 10em;
            }
            .sub {
              font-size: 0.8em;
              margin-right: 3.6em;
              text-decoration-line: underline;
              color: rgba(255, 184, 0, 0.4);
              font-family: "Inclusive Sans", sans-serif;
            }
          }
        }

        .signup {
          margin-left: 10%;
          margin-bottom: 4em;
          .inputs {
            .names {
              display: flex;
              #firstname {
                margin-right: 1.2em;
              }
            }
          }
        }
      }
    }
  }
}
</style>