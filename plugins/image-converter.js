export default defineNuxtPlugin(() => {
  return {
    provide: {
      convertedImageUrl: (path, height, width) => {
        if (path == null)
          return null;
        var runtimeConfig = useRuntimeConfig();
        if (height == null && width == null)
          return runtimeConfig.public.cloudfrontUrl + path;

        if (width == null) width = height;
        if (height == null) height = width;

        const imagekitUrl = "https://sugary.gumlet.io/";
        const param = `?w=${width}&h=${height}`;
        return imagekitUrl + path + param;
      }
    }
  }
});