<template>
  <div class="loader-page">
    <div class="loader-container">
      <div class="flex flex-col flex-1 items-center justify-end">
        <div class="waitText">wait Please!</div>
        <div class="infoText">we are looking<br />for your gift</div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center">
        <div class="loader mt-16"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="51"
          viewBox="0 0 45 51"
          fill="none"
        >
          <path
            d="M29.6591 27.303C32.2159 30.6515 32.7273 35.0302 31.7045 39.409C29.6591 44.0454 25.8239 47.3939 20.9659 48.4242C17.642 49.4545 13.5511 49.1969 10.2273 47.3939C6.90341 45.5909 4.60228 42.4999 4.34659 38.6363C4.34659 35.0302 6.90341 31.4242 10.483 30.6515C12.2727 30.1363 13.8068 30.909 14.8295 32.4545C15.5966 33.9999 15.5966 35.5454 15.0852 37.3484C14.8295 39.1515 15.0852 40.4393 15.5966 42.2424C16.3636 43.7878 18.1534 44.5606 19.4318 44.0454C20.9659 43.0151 21.9886 41.4696 21.4773 39.409C20.9659 35.5454 19.1761 31.9393 16.3636 29.3636C13.5511 26.7878 9.97159 24.9848 6.39205 24.2121C4.34659 23.9545 2.8125 22.9242 1.27841 21.6363C0.767049 20.3484 0.255685 19.0605 0.511367 17.5151C0.767049 15.9696 1.78978 14.6818 3.06819 13.6515C4.85796 12.8787 6.39205 12.3636 8.18182 11.8484C11.5057 10.5605 15.0852 9.01509 17.8977 6.69691C18.6648 6.43933 19.1761 5.92418 19.9432 5.40903C21.2216 4.37873 22.5 3.34843 23.7784 2.83327C24.8011 2.31812 25.8239 2.06055 26.5909 2.06055C28.3807 2.06055 30.1705 2.83327 31.1932 4.37873C32.2159 5.92418 32.2159 7.72721 31.7045 9.53024C30.9375 11.0757 29.6591 12.106 28.3807 13.1363C24.5455 15.1969 20.1989 15.9696 16.3636 17.5151C15.8523 17.7727 15.5966 18.0302 15.5966 18.2878C15.5966 18.5454 16.108 18.803 16.3636 19.0605C17.642 19.5757 18.9205 19.8333 19.9432 20.3484C23.7784 21.6363 27.358 23.9545 29.6591 27.303Z"
            fill="white"
            fill-opacity="0.9"
          />
          <path
            d="M38.6077 28.8485C41.8555 28.8485 44.4884 26.1961 44.4884 22.9242C44.4884 19.6524 41.8555 17 38.6077 17C35.3599 17 32.7271 19.6524 32.7271 22.9242C32.7271 26.1961 35.3599 28.8485 38.6077 28.8485Z"
            fill="url(#paint0_linear_1174_92)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1174_92"
              x1="39.7851"
              y1="28.0915"
              x2="37.2346"
              y2="16.5223"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF8900" />
              <stop offset="0.3229" stop-color="#FFA217" />
              <stop offset="1" stop-color="#FFE050" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>
<style scoped>
.loader-page {
  background: black;
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
}
.loader-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
  max-width: 500px;
}

.waitText {
  color: #fff;
  text-align: center;
  font-family: Playfair Display;
  font-size: 37px;
  font-style: italic;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 30px;
}
.infoText {
  color: #bbb;
  text-align: center;
  font-family: Playfair Display;
  font-size: 2em;
  font-style: italic;
  font-weight: 400;
}

.loader {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-bottom: 30px;
  position: relative;
  color: #fff;
  opacity: 0.4;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: -34px -12px, -10px 0, 10px 0, 34px 0;
  }
  33% {
    box-shadow: -34px 0px, -10px -12px, 10px 0, 34px 0;
  }
  66% {
    box-shadow: -34px 0px, -10px 0, 10px -12px, 34px 0;
  }
  100% {
    box-shadow: -34px 0, -10px 0, 10px 0, 34px -12px;
  }
}
</style>