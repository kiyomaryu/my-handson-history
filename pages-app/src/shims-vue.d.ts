/* eslint-disable */
declare module '*.vue' {
  import { CompatVue } from '@vue/runtime-dom'
  const VueL: CompatVue
  export default Vue

  export * from '@vue/runtime-dom'
  const { configureCompat } = Vue
  export { configureCompat }
}
