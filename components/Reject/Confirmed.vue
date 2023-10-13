<template>
<div class="reject-page page-load-fade">
    <Header/>
    <img class="hero-image" src="~assets/images/heart.png" alt="">
    <h1 class="heading">Gift Rejected</h1>
    <h1 class="paragraph rights">You have successfully confirmed that you don’t want to receive the gift, We apologize for bothering you regarding all the actions & notifications.</h1>
    <button @click="async()=> await navigateTo('https://get.sugary.me/',{external:true})" class="confirm app">
        Get the App
        <div class="arrow">
            <img src="~assets/images/arrow.png" alt="">
        </div>
     </button>
  
</div>
</template>
<script setup>
const router = useRouter();
</script>
<style lang="scss" scoped>
.page-load-fade{
    animation-duration: 1.4s;
}
 .reject-page{
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .hero-image{
            margin-top: 4em;
        }
        .heading{
            color: #FFF;
            text-align: center;
            font-family: Cairo;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            position: relative;
            &::after{
                position: absolute;
                content: '';
                bottom: -0.48em;
                left:-15%;
                width: 130%;
                height: 1px;
                background-color: rgba(54, 54, 54, 1);
            }
        }
        .paragraph{
            width: 75%;
            max-width:480px;
        }
        .app{
            height: 3.44em;
        }
 }
</style>