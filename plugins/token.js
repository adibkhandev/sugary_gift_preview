import axios from 'axios'
export default defineNuxtPlugin(() => {
  return {
    provide: {
      socialToken:(token,provider) => {        
        let data = {
          "Provider":provider,
          "Token":token,
        }
        let headers = {
              "Content-Type": "application/json",
              'pragma': 'no-cache',
              'Cache-Control': 'no-cache',
        }
        axios.post(useRuntimeConfig().public.baseUrl + 'Account/SocialAuth/Login',data,headers)
         .then((response)=>{
              if(response.status==200){
               if(response.data){
                 console.log(response.data)
                 localStorage.setItem('token',response.data.Token)
                 localStorage.setItem('refreshToken',response.data.RefreshToken)
                 reloadNuxtApp()
             
                }
              }
              else{
                console.log('ready to launch signup')
              }
         })
         .catch((err)=>{
           console.log(err)
            axios.post(useRuntimeConfig().public.baseUrl + 'Account/SocialAuth/Signup',data,headers)
              .then((response)=>{
                console.log(response,'resppp')
              })
              .catch((err)=>{
                console.log(err)
              })
         })
       
  },
  tokenize:(Token,RefreshToken)=>{
    console.log('tokenizing')
        localStorage.setItem('token',Token)
        localStorage.setItem('refreshToken',RefreshToken)
  }


}}}
);