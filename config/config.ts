// https://d.umijs.org/
export default {
  // title
  // description: '',
  locales: [['zh-CN', '中文']],
  mode: 'doc',
  alias: {},
  // dynamicImport: {
  //   loading: '@/Loading',
  // },
  resolve: {
    excludes: ['src/core'],
  },
  dynamicImportSyntax: {},
  // 路由静态
  // exportStatic: { htmlSuffix: true },
  hash: true,
  ignoreMomentLocale: true,
  extraBabelIncludes: ['/packages'],
  polyfill: false,
};
