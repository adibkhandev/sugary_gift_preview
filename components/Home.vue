<template>
	<div 
	  v-if="props.data && !authenticated"
	  class="body">
		<div 
		  v-if="animationState!=3"
		  class="topping"
		  :class="{scaleUp:animationState==2}"
		   >
			<div 
			 @click="start"  
			 class="vertical-ribbon-container"
			 :class="{verticalFall:animationState==2}"
			 >
				<div class="ribbon"></div>
			</div>
			<div 
			  class="horizontal-ribbon-container"
              :class="{horizontalGo:animationState==2}"
              @animationend="()=>animationState=3"
			  >
				<div class="ribbon"></div>
			</div>
			<div  @click="start" class="card-container">
				<div
				 class="card"
				 :class="{leave:animationState==1}"
				 @animationend="()=>animationState=2"
				 v-if="animationState<2"
				 v-motion
				 :initial="{
				 	opacity: 0,
				 	y:50,
				 }"
				 :enter="{
				 	opacity:1,
				 	y:0,
				 	transition: {
				      y: {
				        duration: 1000,
				      },
				      opacity: {
				        delay: 200,
				        duration:1000,
				      },
				    },
				 }"
				 :delay="200"
				>
				  <div class="info-containers">
				  	<h1 class="header">
				  		A gift for
				  	</h1>
				  	<h1 class="subheading">
				  		{{props.data.ReceiverName}}
				  	</h1>
				  </div>
				  <div class="info-containers">
				  	<h1 class="header">
				  		From
				  	</h1>
				  	<h1 class="subheading">
				  	    {{props.data.SenderFirstName + " " +props.data.SenderLastName}}
				    </h1>
				  </div>
                </div>
			</div>
		</div>
		<div 
		  class="wraps"
		  v-if="animationState!=3"
		  >
			<div :class="{openUpLeft:animationState==2}" class="wrap" id="wrap-left"></div>
			<div :class="{openUpRight:animationState==2}" class="wrap" id="wrap-right"></div>
	    </div>
	    <Letter 
	      v-if="animationState>=3"
	      :data="props.data"
          :animationState="animationState"
          :startAuth="startAuth"
          :authStarted="authStarted"
		  :authenticate="authenticate"
	      >
	    </Letter>	
	    <div 
        v-if="authenticate" 
	    class="accept-button-container h-full w-full flex flex-column justify-center items-end">
	    	<div 
	    	   v-if="props.data.CanSwap" 
	    	   class="decide-btns mb-8 w-5/6"
	    	   
	    	   >
	    		<button class="swap-reject">
	    		  <div class="image">
		    	   <img src="~assets/images/cross.png" alt=""/>
	    		  </div>
	    			Reject Gift 
	    		</button>
	    		<button 
	    		  class="swap-accept"
                  @click="()=>authStarted=true"
	    		  >
	    			Accept your Gift 
	    		  <div class="image">
		    	   <img src="~assets/images/arrow.png" alt=""/>
	    		  </div>
	    		</button>
	    	</div>
	    	<button	
	    	  class="unswap-button rounded-full mb-8 w-5/6"
	    	  @click="()=>authStarted=true"
	    	  v-else
	    	  >
	    		Accept your Gift 
	    		<div class="image">
		    	   <img src="~assets/images/arrow.png" alt=""/>
	    		</div>
	    	</button>
	    </div>
	    <AuthOverlay
	     v-show="authStarted"
         :offSwitch="offSwitch"
         :authStarted="authStarted"
		 :authenticator="authenticator"
	     >
	    	
	    </AuthOverlay>
	</div>
	<Product 
	  v-else 
      :data="props.data"
	  />
</template>
<script setup>
	const {$searchToken} = useNuxtApp();
	let authenticated = ref(false)
	let authenticator = () => {
		let token = localStorage.getItem('token')
		if(token){
			authenticated.value = true
			console.log('state changed from home')
		}
		else{
			console.log('not found in local store')
		}
	}
	const {leave} = useMotion()
	const animationState=ref(3)
	const cardGone = ref(false)
	const authenticate = ref(false)
	const authStarted = ref(false)
	const props = defineProps(['data'])
	console.log(props.data)
	const offSwitch = () => {
		authStarted.value = false
	}
	const startAuth = () => {
		authenticate.value = true
	}
	const start =()=>{
		cardGone.value = true
		animationState.value = 1
	}

	onBeforeMount(()=>{
		authenticator()
        
	})
	watch([animationState,authenticated],()=>{
		console.log(animationState,'state',authenticated,'auth')
		console.log('switched to dev')
	})
</script>
<style lang="scss" scoped>

	.verticalFall , .horizontalGo , .scaleUp , .openUpRight , .openUpLeft , .leave {
		animation-timing-function: ease-in;
		animation-fill-mode: forwards;
	}
	.verticalFall{
       animation-name: falldown;
       animation-duration: 1.6s;
		
	}
	.horizontalGo{
       animation-name: goRight;
       animation-duration: 1.6s;
		animation-delay: 0.8s;
	}
	.scaleUp{
       animation-name: scaleUp;
       animation-duration: 1.6s;
		animation-delay: 0.2s;
	}
	.openUpRight{
       animation-name: openUpRight;
       animation-duration: 1s;
		animation-delay: 0.6s;
	}
	.openUpLeft{
       animation-name: openUpLeft;
       animation-duration: 1s;
		animation-delay: 0.6s;
	}
	.leave{
		animation-name: card-leave;
		animation-duration: 0.6s;
	}
	.body{
		width:100vw;
        height: 100vh;
        overflow: hidden;
        contain:paint;
        position: relative;
	}
	.clicker{
		position: absolute;
		top:0;
		height: 100%;
		width: 100%;
		z-index: 2;
	}
	.topping{
		width:100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        z-index: 100;
        .vertical-ribbon-container , .horizontal-ribbon-container , .card-container{
        	width:100vw;
            height: 100vh;
            position: absolute;
            top:0;
            display: flex;
            justify-content: center;
        }
        .vertical-ribbon-container{
            z-index: 1;
        	.ribbon{
        		height: 100%;
        		width: 3.5em;
                background: linear-gradient(315deg, #f9c5d1 0%, #9795ef 34%);
        	}
        }
        .horizontal-ribbon-container{
        	flex-direction:column;        	
        	z-index: 0;
        	.ribbon{
        		width: 100%;
        		height: 3.5em;
        		background: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
        	}
        }
        .card-container{
              align-items:center;
              z-index: 2;
              .card{
              	display: flex;
              	flex-direction: column;
              	justify-content: center;
              	align-items: flex-start;
              	font-family: 'Jost', sans-serif;
              	border-radius: 16px;
              	height: 8.5em;
              	width: 12em;
              	background-color: rgb(255, 253, 250);
              	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
              	.info-containers{
              		display: flex;
              		flex-direction: column;
              		margin-left: 1.8em;
              		padding: 0.4em 0;
              		.header{
              			font-weight:100;
              			font-size:0.8em;
              		}
              		.subheading{
              			color:rgb(166, 108, 255);
              			font-weight:500;
              			font-size: 1.16em;
              		}
              	}
              }
        }
	}
	.wraps{
		position: absolute;
		top: 0;
		left:-10%;
		z-index: -2;
        display: flex;
        .wrap{
        	width: 60vw;
        	height: 100vh;
        }
        #wrap-left{
        	margin: 0 0.5px;
        	background: linear-gradient(to bottom right,rgba(225, 204,251,0.7),95%,rgb( 225, 242, 251));
        }
         #wrap-right{
        	margin: 0 0.5px;
        	background: linear-gradient(to bottom right,rgb(225, 204, 236),35%,rgb(225, 242, 251));
        }
	}
	.accept-button-container{
		.unswap-button{
			background-color: #6D895D;
			height: 3.8em;
			width: max(26vw,28em);
			position: relative;
			font-family: Cairo;
			font-weight: 800;
			color: white;
			font-size: 0.8rem;
			@media (width<1000px) {
				font-size: 0.7rem;
			}
			.image{
               position: absolute;
               top: 0;
               right: 20px;
			   height: 100%;
			   display: flex;
			   align-items: center;
			   img{
			   	height: 12px;
			   }
			}
		}
		.decide-btns{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 3.8em;
			width: max(26vw,28em);
			font-family: Cairo;
			font-weight: 800;
			color: white;
			font-size: 0.8rem;
			position: relative;
			.swap-accept{
			background-color: #6D895D;
			width: 75%;
			height: 100%;
			border-radius: 0 10em 10em 0;
			.image{
               position: absolute;
               top: 0;
               right: 20px;
			   height: 100%;
			   display: flex;
			   align-items: center;
			   img{
			   	height: 12px;
			   }
			}
			}
			.swap-reject{
				width: 45%;
				height: 100%;
				background-color: rgba(64, 64, 64, 1);
				border-radius: 10em 0 0 10em;
				position: relative;
				.image{
					position: absolute;
					height: 100%;
					top: 0;
					left: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				
			}
			.swap-reject , .swap-accept{
				display: flex;
				justify-content: center;
				align-items: center;

			}
		}
	}
</style>