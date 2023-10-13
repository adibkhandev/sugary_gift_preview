<template>
    <div class="greeting-page">
        <div class="circle">
            <div class="graphic"><img src="~/assets/images/hand.png" alt=""/></div>
            <h1 class="main">Thank him</h1>
            <h1 class="sub-1">for this </h1>
            <h1 class="sub-2">gratitude</h1>
            <div class="small-circle"></div>
        </div>
        <div class="rights">
           Send him a digital thank you note
           for receiving the gift
        </div>
        <div class="cta confirm">
            Send Thank You Note
            <div class="arrow">
                 <img src="~assets/images/arrow.png" alt="">
            </div>
        </div>
        <div class="sub-btn confirm">
             No Need fot That
            <div class="arrow">
                 <img src="~assets/images/cross.png" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.greeting-page{
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    .circle{
        position: relative;
       width: 80vw;
       height: 80vw;
       margin-top: 5vh;
       display: flex;
       flex-direction:column;
       justify-content: center;
       align-items: center;
       background-color: rgba(41, 41, 41, 1);
       border-radius:100%;
       .small-circle{
           position: absolute;
           bottom: 10%;
           right: 5%;
           border-radius:100%;
             width:15%;
             height:15%;
             background: linear-gradient(180deg, #FFA800 0%, rgba(255, 92, 0, 0.08) 100%);
       }
       .graphic{
        margin-bottom: 0.5em;
          img{
            height: 2em;
          }
       }
       .main , .sub-1 , .sub-2{
        text-align: center;
        font-family: Playfair Display;
        font-style: italic;
        line-height: normal;
        font-size: 1.9em;
       }
       .main{
        color: #FFF;
        font-weight:800;
        margin-top: 0.26em;
       }
       .sub-1 , .sub-2{
        color: #BBB;
        font-weight: 400;

       }
       .sub-2{
        margin-bottom: 1em;
       }
    }
    .cta{
       background-color: rgba(72, 110, 131, 1);
    }
    .sub-btn{
        margin-top: 1em;
        background-color: rgba(41, 41, 41, 1)
    }
}
</style>