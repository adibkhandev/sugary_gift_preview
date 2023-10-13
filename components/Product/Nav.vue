<template>
        <Header/>
		<div class="navigation">
			<div class="links">
				<h1 @click="props.shiftActive(0)" :class="{active:props.activeNav==0}">Your Card</h1>
				<h1 @click="props.shiftActive(1)" :class="{active:props.activeNav==1}">Your Gift</h1>
				<h1 @click="props.shiftActive(2)" :class="{active:props.activeNav==2}">Delivery</h1>
				<h1 @click="props.shiftActive(3)" :class="{active:props.activeNav==3}">Thanks</h1>
			</div>
			
		</div>
</template>
<script setup>
   const props = defineProps(['data','shiftActive','activeNav'])
   console.log(props)
</script>
<style lang="scss" scoped>
.active{
            animation-name: brighten;
            animation-timing-function: linear;
            animation-duration: 1s;
            animation-fill-mode: forwards;
      &::after{
            position: absolute;
            content:'';
             vertical-align: -100%;
            bottom: -1em;
            left:20%;
            height: 1px;
            background-color: white;
            animation-name: widthNav;
            animation-timing-function: ease-in;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
        }
}

.navigation{
    margin: 1rem 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .links{
        width: 90%;
        max-width: 28rem;
        display: flex;
        justify-content: space-between;
        font-family: Cairo;
        color: rgba(255, 255, 255, 0.50);
        font-size: 0.8rem;
        font-weight: 400;
        h1{
         position: relative;
         cursor: pointer;
       
      }
    }
    .follower{
        width: 100%;
        .container{
            height: 1.4em;
            width: 22%;
            display: flex;
            justify-content: center;
            align-items: center;
            .line{
                width: 25%;
                height: 1px;
                border-radius: 10em;
                background-color: rgba(255, 255, 255, 1);
            }
        }
    }
}
</style>