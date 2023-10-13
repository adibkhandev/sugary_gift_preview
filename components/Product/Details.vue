<template>
    <div class="product">
				<div class="box">
					<div class="product-image">
                        <div class="border-cover"></div>
						<img :src="$convertedImageUrl(props.data.MaterialCoverPhoto)" alt=""/>
					</div>
					<div class="text">
						<h1 class="title">{{props.data.MaterialTitle}}</h1>
						<div class="detail">
							<div class="brand">
								<div class="pfp">
									<img src="~assets/images/starbucks.jpeg" alt="">
								</div>
								<div class="name">
									{{props.data.MaterialStoreName}}
								</div>
								<img src="~assets/images/tick.svg" alt="" class="tick">
							</div>
							<div class="number">
								<h1>
								x{{props.data.Quantity}}
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div class="custom-data">
					<div class="heading">
						<h1>
						  Customizations
						</h1>
					</div>
					<h1 class="sub-heading">
						<img src="~assets/images/line.svg" alt="">
						Type your Text or Word:
					</h1>
					<div class="input-container">
						<img src="~assets/images/input.svg" alt="">
						<input type="text" placeholder="Type Here ...">
					</div>
				</div>
				<div class="btns">
					<button v-if="props.data.CanSwap" class="swap">
						<img src="~assets/images/swap.svg" alt="">
						Swap
					</button>
					<button :class="{full:!props.data.CanSwap}" class="confirm ">
						Confirm Gift
						<img src="~assets/images/arrow.png" alt="">
					</button>
				</div>
			</div>
</template>
<script setup>
    const props = defineProps(['data'])
</script>
<style lang="scss" scoped>
$width:100vw;
.product{
width:100vw !important;
padding: 0 10vw;
margin-top: 1.6em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.box , .heading , .subheading , .input , .btns{
    width: 80vw;
    padding: 0;
} 
.box{
width: 100%;
background-color: #292929;
border-radius: 1.4em;
.product-image{
    border-radius: inherit;
    width: 100%;
    aspect-ratio: 3/2;
    overflow: hidden;
    position: relative;
   .border-cover{
     position: absolute;
     top: 0;
     left:0;
     width: 100%;
     height:100%;
     z-index: 3;
     border-radius: inherit;
     border: solid rgba(255, 255, 255, 0.3) 4px;
   }
;
    @media (width>490px) {
        font-size: clamp(1.1em,3.5vw,1.8em);
    }
    img{
        transform: scale(1.1);
        height: 110%;
        width:auto;
    }
}
.text{
    width: 100%;
    height: 4.8em;
    font-family: Cairo;
    
    color: rgba(232, 232, 232, 1);
    padding: 0 1.1em 0 1.1em;
    font-size: 1rem;
    .title{
        margin-left: 0.1em;
        margin-top: 0.6em;
        font-size: 1.08em;
        font-weight: 700;
    }
    .detail{
        margin-top: 0.75em;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .brand{
            display: flex;
            align-items: center;
            font-size: 0.8em;
            .pfp{
                width: 1.8em;
                height: 1.8em;
                margin-right: 0.6em;
                border-radius: 10em;
                overflow: hidden;
            }
            .name{
                margin-right: 0.3em;
                font-weight: bold;
            }
            .tick{
                height: 1em;
            }
        }
        .number{
            background-color: rgba(72, 72, 72, 0.7);
            color: rgba(255, 255, 255, 0.3);
            font-weight: 800;
            width: 2.2em;
            height: 2.2em;
            border-radius: 18em;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.6rem;

        }
    }
}
}
.custom-data{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    font-family: Cairo;
    font-weight: 700;
.heading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.8em;
    margin-top: 0.8em;
    font-size: 1rem;
    color: rgba(66, 66, 66, 1);
    border-bottom: 0.8px solid rgba(54, 54, 54, 1);
}
.sub-heading{
    height: 4em;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.86em;
    img{
        margin-right: 1em;
    }

}
.input-container{
    position: relative;
    img{
        position: absolute;
        z-index: 2;
        top: 40%;
        left: min(2em,3.8vw);
    }
    input{
        background-color: rgba(41, 41, 41, 1);
        width: 100%;
        height: 4.4em;
        border-radius: 8px;
        padding-left: 3em ;
        font-weight: 600;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.35);
        &::placeholder{
            color:rgba(255, 255, 255, 0.35);
        }
    }
}
}
.btns{
display: flex;
justify-content: space-around;
margin-top: 2em;
margin-bottom: 5em;
.full{
    width: 96.5% !important;
}
.swap , .confirm{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10em;
    color: rgba(255, 255, 255, 1);
    font-weight: 800;
}
.swap{
    width: 30%;
    font-size:0.7rem ;
    height: 3.4em;
    border:solid 0.08px rgba(53, 53, 53, 1);
    img{
    margin-right: 0.6em;
    width: 1.2em;
    }
}
.confirm{
    background-color: rgba(33, 127, 157, 1)
    ;
    width: 60%;
    font-size: 0.8rem;
    position: relative;
   font-size:clamp(0.6rem,2vw,1rem);
    height: 3.8em;
    min-height: 3rem;
    font-weight: 700;
    img{
        position: absolute;
        top: 40%;
        right:2.4em;
        width: 0.7rem;
    }
}
}
</style>