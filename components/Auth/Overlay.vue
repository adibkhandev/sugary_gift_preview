<template>
	<Transition>
		<div class="auth-overlay-container">
			<div 
				@click="props.offSwitch" 
				class="blurred">
            </div>
			<div class="overlay">
				<Auth 
				:authenticator="props.authenticator"
				/>
			</div>
		</div>
	</Transition>
</template>
<script setup>
	const props = defineProps(['offSwitch','authStarted','authenticator'])

	
</script>
<style lang="scss" scoped>
	.auth-overlay-container{
        width: 100vw;
        position: absolute;
		top: 0;
		display: flex;
		flex-direction: column;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
		.overlay{
			background: #FFFFFF;
			border-radius: 10vw 10vw 0 0;
			transition: all 1s ease-in;
			height: 100vh;
			overflow-x: hidden;
			overflow-y: auto;
		}
	}
	.blurred{
		height:fit-content ;
		width: 100vw;
		@media (width>600px) {
			height: 20vh;
		}
		@media (width>800px) {
			height: 10vh;
		}
		@media (height<1100px) {
			height: 10vh;
		}
	}
	.v-enter-active , .v-leave-active{
		transition: margin 0.8s ease-in-out;
	}
	.v-enter-from , .v-leave-to{
		margin-top: 100vh ;
	}
	.v-enter-to , .v-leave-from {
		margin-top: 0;
	}
</style>