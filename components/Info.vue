<template>
<div 
@click="zoom" 
class="info-container"
>
  <div class="info">{{ props.data.DigitalCard.CardText }}</div>
</div>
</template>
<style lang="scss" scoped>
.info-container {
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 0.2em;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
        border-radius: 15px;
        background-image: url("~/assets/images/card-back.png");
        background-size: cover;
        overflow: hidden;s
        // transform: scale(1.1,1.2);
        // z-index: 2;
        .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1em;
        font-family: "Nanum Pen Script", cursive;
        color: black;
        padding: 0 2em;
        }
        }
</style>