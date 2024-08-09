// vite.config.js
import { defineConfig } from "file:///E:/1.TASKS/justmeats-hydrogen-v2/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///E:/1.TASKS/justmeats-hydrogen-v2/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { vitePlugin as remix } from "file:///E:/1.TASKS/justmeats-hydrogen-v2/node_modules/@remix-run/dev/dist/index.js";
import { hydrogen } from "file:///E:/1.TASKS/justmeats-hydrogen-v2/node_modules/@shopify/hydrogen/dist/vite/plugin.js";
import { oxygen } from "file:///E:/1.TASKS/justmeats-hydrogen-v2/node_modules/@shopify/mini-oxygen/dist/vite/plugin.js";
var vite_config_default = defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ],
  build: {
    // Allow a strict Content-Security-Policy
    // withtout inlining assets as base64:
    assetsInlineLimit: 0,
    sourcemap: true
  },
  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: module is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: [
        "phone",
        "parse5",
        "form-data",
        "react-slick",
        "react-markdown",
        "react-responsive",
        "isomorphic-fetch",
        "react-fast-marquee",
        "@material-tailwind/react",
        "@rechargeapps/storefront-client"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFwxLlRBU0tTXFxcXGp1c3RtZWF0cy1oeWRyb2dlbi12MlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcMS5UQVNLU1xcXFxqdXN0bWVhdHMtaHlkcm9nZW4tdjJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LzEuVEFTS1MvanVzdG1lYXRzLWh5ZHJvZ2VuLXYyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcclxuXHJcbmltcG9ydCB7IHZpdGVQbHVnaW4gYXMgcmVtaXggfSBmcm9tICdAcmVtaXgtcnVuL2RldidcclxuaW1wb3J0IHsgaHlkcm9nZW4gfSBmcm9tICdAc2hvcGlmeS9oeWRyb2dlbi92aXRlJ1xyXG5pbXBvcnQgeyBveHlnZW4gfSBmcm9tICdAc2hvcGlmeS9taW5pLW94eWdlbi92aXRlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBoeWRyb2dlbigpLFxyXG4gICAgb3h5Z2VuKCksXHJcbiAgICByZW1peCh7XHJcbiAgICAgIHByZXNldHM6IFtoeWRyb2dlbi5wcmVzZXQoKV0sXHJcbiAgICAgIGZ1dHVyZToge1xyXG4gICAgICAgIHYzX2ZldGNoZXJQZXJzaXN0OiB0cnVlLFxyXG4gICAgICAgIHYzX3JlbGF0aXZlU3BsYXRQYXRoOiB0cnVlLFxyXG4gICAgICAgIHYzX3Rocm93QWJvcnRSZWFzb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICAvLyBBbGxvdyBhIHN0cmljdCBDb250ZW50LVNlY3VyaXR5LVBvbGljeVxyXG4gICAgLy8gd2l0aHRvdXQgaW5saW5pbmcgYXNzZXRzIGFzIGJhc2U2NDpcclxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAwLFxyXG4gICAgc291cmNlbWFwOiB0cnVlLFxyXG4gIH0sXHJcbiAgc3NyOiB7XHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIEluY2x1ZGUgZGVwZW5kZW5jaWVzIGhlcmUgaWYgdGhleSB0aHJvdyBDSlM8PkVTTSBlcnJvcnMuXHJcbiAgICAgICAqIEZvciBleGFtcGxlLCBmb3IgdGhlIGZvbGxvd2luZyBlcnJvcjpcclxuICAgICAgICpcclxuICAgICAgICogPiBSZWZlcmVuY2VFcnJvcjogbW9kdWxlIGlzIG5vdCBkZWZpbmVkXHJcbiAgICAgICAqID4gICBhdCAvVXNlcnMvLi4uL25vZGVfbW9kdWxlcy9leGFtcGxlLWRlcC9pbmRleC5qczoxOjFcclxuICAgICAgICpcclxuICAgICAgICogSW5jbHVkZSAnZXhhbXBsZS1kZXAnIGluIHRoZSBhcnJheSBiZWxvdy5cclxuICAgICAgICogQHNlZSBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL2RlcC1vcHRpbWl6YXRpb24tb3B0aW9uc1xyXG4gICAgICAgKi9cclxuICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICdwaG9uZScsXHJcbiAgICAgICAgJ3BhcnNlNScsXHJcbiAgICAgICAgJ2Zvcm0tZGF0YScsXHJcbiAgICAgICAgJ3JlYWN0LXNsaWNrJyxcclxuICAgICAgICAncmVhY3QtbWFya2Rvd24nLFxyXG4gICAgICAgICdyZWFjdC1yZXNwb25zaXZlJyxcclxuICAgICAgICAnaXNvbW9ycGhpYy1mZXRjaCcsXHJcbiAgICAgICAgJ3JlYWN0LWZhc3QtbWFycXVlZScsXHJcbiAgICAgICAgJ0BtYXRlcmlhbC10YWlsd2luZC9yZWFjdCcsXHJcbiAgICAgICAgJ0ByZWNoYXJnZWFwcHMvc3RvcmVmcm9udC1jbGllbnQnLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdSLFNBQVMsb0JBQW9CO0FBQ3JULE9BQU8sbUJBQW1CO0FBRTFCLFNBQVMsY0FBYyxhQUFhO0FBQ3BDLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsY0FBYztBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixTQUFTLENBQUMsU0FBUyxPQUFPLENBQUM7QUFBQSxNQUMzQixRQUFRO0FBQUEsUUFDTixtQkFBbUI7QUFBQSxRQUNuQixzQkFBc0I7QUFBQSxRQUN0QixxQkFBcUI7QUFBQSxNQUN2QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQTtBQUFBLElBR0wsbUJBQW1CO0FBQUEsSUFDbkIsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV1osU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
