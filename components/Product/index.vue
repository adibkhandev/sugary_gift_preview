<template>
	<div class="product-page">
		<ProductNav :activeNav="activeNav" :shiftActive="shiftActive" :data="props.data"/>
		<div class="content">
         <div :style="{marginLeft:'-' + activeNav*100 +'vw'}" class="pages">
           <div @click="()=>cardOpened = !cardOpened" class="card-container">
             <Card :envelope="false" :data="props.data" :opened="cardOpened" :envelopeOpened="true"/>
           </div>
           <ProductDetails :data="props.data" />	
           <ProductDelivery/>
           <ProductGreeting/>
         </div>
        </div> 
    </div>
</template>
<script setup>
	const props = defineProps(['data'])
	const {$convertedImageUrl} = useNuxtApp()
	const activeNav = ref(1)
    const cardOpened = ref(false)
    const shiftActive = (num) =>{
       activeNav.value = num
    }

    //touch functionality
    let touchstartX = 0
    let touchendX = 0

    const checkDirection = () => {
     if (touchendX < touchstartX){
        if(touchstartX-touchendX>80){
           if(activeNav.value<3){
             console.log(touchendX,'end',touchstartX,'start')
             activeNav.value += 1
           } 
        }
        
     } 
     if (touchendX > touchstartX){
         if(activeNav.value>0){
            if(touchendX-touchstartX>80){
                activeNav.value -= 1
            }
         } 
     }
      
    }

    document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
    })

    document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection()
    })

watch(activeNav,()=>{
    console.log(activeNav,'nav state')
})


	console.log(props.data,'daasdsadadtaa')
</script>
<style lang="scss" >
// body{
//     background-color: #1B1B1B;
// }
	.product-page{
		contain:paint;
		overflow: hidden;
		background-color: #1B1B1B;
		width: 100vw;
		overflow-x: hidden;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: Cairo;
		.header , .navigation{
		    width: 96%;
		}
        .content{
            width: 100vw;
            .pages{
                width: 400vw;
                display: flex;
                align-items: flex-start;
                margin-left: 00vw;
                transition: all ease-in 0.6s;
                .container{
                    width: 100vw;
                    height: 100vh;
                    background-color: red;
                }
                .card-container{
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    .card{
                        position: relative;
                        transform: scale(1.9);
                        margin-top:7.6em;
                        border-radius: 3px;
                        .cover , .info-container{
                            border-radius: inherit;
                        }
                    }
                }
                
           
            }
        }
	}
</style>