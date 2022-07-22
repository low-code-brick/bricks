export default {
  // title
  // description: '',
  locales: [['zh-CN', '中文']],
  mode: 'doc',
  resolve: {
    includes: ['docs', 'xxx']
  },
  alias: {},
  // dynamicImport: {
  //   loading: '@/Loading',
  // },
  // import()
  dynamicImportSyntax: {},
  // 路由静态
  // exportStatic: { htmlSuffix: true },
  hash: true,
  ignoreMomentLocale: true,
  extraBabelIncludes: ['/packages'],
  polyfill: false,
};
