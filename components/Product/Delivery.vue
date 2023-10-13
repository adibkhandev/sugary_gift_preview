<template>
<div class="delivery-container">
     <div class="location-btns">
        <button class="local">
            Bangladesh
        </button>
        <button class="international">
            International
        </button>
     </div>
     <div class="input-box">
        <div class="location-input">
            <div class="guidance-container">
                <img src="~assets/images/profile.png" alt="" class="guidance">
            </div>
            <input type="text" placeholder="Your Name" class="fields">
        </div>
        <div id="number" class="location-input">
            <div class="guidance-container">
                <img src="~assets/images/call.svg" alt="" class="guidance">
                 <h1 class="prefix">+880</h1>
                 <h1 class="divide">|</h1>
            </div>
            <input type="text" class="fields">
        </div>
        <div id="adress" class="location-input">
            <img src="~assets/images/adress.svg" alt="" class="guidance">
            <input type="text" placeholder="Gift Delivery Adress" class="fields">
        </div>
        <div class="estimation">
            <div class="guidance-img-cont">
                <img src="~assets/images/tracking.png" alt="" class="start">
            </div>
            <div class="texts">
                <h1 class="title">Estimated Delivery will be</h1>
                <h1 class="time">9 Jul - 27 Aug</h1>
            </div>
             <div class="guidance-img-cont">
               <img src="~assets/images/question.png" alt="" class="end">
             </div>
        </div>
     </div>
     <h1 class="rights">
        As we respect your privacy, Your delivery address 
         won’t be shared with the sender
     </h1>
     <button class="confirm">
        Confirm My Gift
        <div class="arrow">
            <img src="~assets/images/arrow.png" alt="">
        </div>
     </button>
</div>
</template>
<style lang="scss">
.delivery-container{
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
     margin-bottom: 4rem;
    .location-btns{
        color:rgba(255, 255, 255, 1);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .local , .international{
            padding: 1.5em 4em;
            font-size: 0.72rem;
            margin: 3.8em 0;
        }
        .local{
            background: rgba(61, 78, 103, 0.75);
            border-radius: 20em 0 0 20em;
        }
        .international{
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 0 20em 20em 0;
        }
    }
    .input-box{
        width: 86%;
        background-color: rgba(41, 41, 41, 1);
     
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 1.4em;
        .location-input{
            width:90%;
            height: 3.2em;
            margin-bottom:0.9em;
            position: relative;
            .guidance-container{
                position: absolute;
                top:0;
                left:1em;
                height:100%;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    height: 30%;
                }
                h1{
                    color:rgba(255, 255, 255, 1);
                    margin-left: 0.8em;
                    font-weight: 200;
                    font-size: clamp(0.8rem,2.4vw,0.9rem);
                }
                .divide{
                    margin-left: 1em;
                    opacity: 0.7;
                    font-size: 1rem;
                }
            }
            input{
                font-size: clamp(0.7rem,2.4vw,0.9rem);
                color: rgba(255, 255, 255, 0.4);
                border-radius: 12px;
                width: 100%;
                height: 100%;
                padding-left:3rem;
                font-weight: 600;
                background: rgba(255, 255, 255, 0.05);
                border: solid rgba(255, 255, 255, 0.05) 1px;
                &::placeholder{
                    font-weight: 700;
                    color: rgba(255, 255, 255, 1);
                    font-size: clamp(0.7rem,2.4vw,0.9rem);
                }
            }
        }
        #number{

            input{
                padding-left: 7.4rem;
            }
        }
        #adress{
            position: relative;
            height:7em;

            input{
            
              padding-bottom: 4rem;

            }
            img{
                position: absolute;
                top: 1rem;
                left:1rem;
            }
        }
        .estimation{
            width:90%;
            background-color:rgba(37, 37, 37, 1);
            font-size:0.8rem;
            height:4em;
            margin-bottom: 1.5em;
            border-radius: 120px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .guidance-img-cont{
                padding: 0 2em;
            }
            .texts{
                display: flex;
            }
            .title , .time{
                font-size:clamp(0.6em,2.3vw,1.2em);
                white-space: nowrap;
            }
            .title{
                font-weight: 600;
                color:rgba(255, 255, 255, 0.7);
                margin-right: 1.4em;
            }
            .time{
                font-weight: 700;
                color: rgba(255, 255, 255, 1);

            }
        }
        
    }
   
        
}
</style>