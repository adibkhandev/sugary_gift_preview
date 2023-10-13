export default defineNuxtPlugin(() => {
  return {
    provide: {
      checkRefreshToken: async () => {
        var refreshToken = localStorage.getItem('refreshToken');
        var accessToken = localStorage.getItem('token');
        if (!refreshToken || !accessToken)
          return null;
        var tokens = JSON.stringify({
          AccessToken: localStorage.getItem('token'),
          RefreshToken: refreshToken,
        });
        var response = await fetch(
          useRuntimeConfig().public.baseUrl + "Account/RefreshToken",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: tokens,
          }
        );
        if (response.status === 200) {
          var responseJson = await response.json();
          if (responseJson.Success) {
            useNuxtApp().$tokenize(responseJson.Token, responseJson.RefreshToken);
            useRuntimeConfig().public.token = responseJson.Token;
            useRuntimeConfig().public.user = responseJson.User;
            return responseJson;
          }
          return null;
        }
        return null;
      }
    }
  }
});