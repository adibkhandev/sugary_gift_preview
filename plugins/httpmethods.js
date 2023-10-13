export default defineNuxtPlugin(() => {
  var addTimeToPath = (path) => {
    if (path?.includes('?')) {
      path = path + '&';
    } else {
      path = path + '?';
    }
    path = path + 'time=' + new Date().getTime();
    return path;
  }

  return {
    provide: {
      post: async (path, body = null) => {
        const router = useRouter();
        var runtimeConfig = useRuntimeConfig();
        var token = localStorage.getItem('accessToken');
        var response;
        path = addTimeToPath(path);


        var bodyJson = null;
        if (body != null) bodyJson = JSON.stringify(body);

        response = await fetch(
          encodeURI(runtimeConfig.public.baseUrl + path),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token,
              'pragma': 'no-cache',
              'Cache-Control': 'no-cache',
            },
            body: bodyJson,
          }
        );
        if (response?.status === 401 && token != null) {
          localStorage.clear();
          router.replace("/login");
        }
        return response;
      },
      put: async (path, body = null) => {
        const router = useRouter();
        var runtimeConfig = useRuntimeConfig();
        var token = localStorage.getItem('accessToken');
        var response;
        path = addTimeToPath(path);

        var bodyJson = null;
        if (body != null) bodyJson = JSON.stringify(body);

        response = await fetch(
          encodeURI(runtimeConfig.public.baseUrl + path),
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token,
              'pragma': 'no-cache',
              'Cache-Control': 'no-cache',
            },
            body: bodyJson,
          }
        );
        if (response?.status === 401 && token != null) {
          localStorage.clear();
          router.replace("/login");
        }
        return response;
      },
      get: async (path) => {
        const router = useRouter();
        var runtimeConfig = useRuntimeConfig();
        var token = localStorage.getItem('accessToken');
        var response;
        path = addTimeToPath(path);

        response = await fetch(
          encodeURI(runtimeConfig.public.baseUrl + path),
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token,
              'pragma': 'no-cache',
              'Cache-Control': 'no-cache',
            },
          }
        );
        if (response?.status === 401 && token != null) {
          localStorage.clear();
          router.replace("/login");
        }
        return response;
      },
      delete: async (path) => {
        const router = useRouter();
        var runtimeConfig = useRuntimeConfig();
        var token = localStorage.getItem('accessToken');
        var response;
        path = addTimeToPath(path);

        response = await fetch(
          encodeURI(runtimeConfig.public.baseUrl + path),
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token,
              'pragma': 'no-cache',
              'Cache-Control': 'no-cache',
            },
          }
        );
        if (response.status === 401) {
          localStorage.clear();
          router.replace("/login");
        }
        return response;
      },
    }
  }
})