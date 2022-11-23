export const data = JSON.parse("{\"key\":\"v-953546a4\",\"path\":\"/test.html\",\"title\":\"testing\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"sadasd\",\"slug\":\"sadasd\",\"link\":\"#sadasd\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"test.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
