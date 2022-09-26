// https://umijs.org/config/
// import { config } from 'dotenv'; // ? import "dotenv/config" v9.0.0 ?
import { defineConfig } from '@umijs/max';
import { join } from 'path';
import defaultSettings, { defaultThemeSettings } from './defaultSettings';
// import proxy from './proxy';
import routes from './routes';
// import webpackPlugin from './plugin.config';

// config({ path: `${__dirname}../../../.env` });

const { REACT_APP_ENV, GRAPHQL_URL } = process.env; // GA_KEY

export default defineConfig({
  hash: true,
  antd: {},
  // dva: {
  //   hmr: true,
  // },
  // history: {
  //   type: 'browser', // 'hash'
  // },
  access: {},
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    name: 'GS-ANTD-PRO',
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // enable: true, // default false
    // default zh-CN
    default: 'en-US',
    antd: true,
    // title: false, // ? default/true - but gives error
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false, // ? default/true - but gives error
  },
  // dynamicImport: {
  //   loading: '@/components/CSSSpin/index', // '@ant-design/pro-layout/es/PageLoading'
  // },
  // targets: {
  //   ie: 11,
  // },
  // disableRedirectHoist: true,
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'root-entry-name': 'variable',
    'primary-color': defaultSettings.colorPrimary,
    // 'secondary-color': defaultThemeSettings.secondaryColor, // custom, not useable at moment
  },
  define: {
    GRAPHQL_URL: GRAPHQL_URL, // || 'http://localhost:3000/graphql',
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  // esbuild: {},
  // title: false,
  ignoreMomentLocale: true,
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  // manifest: {
  //   basePath: '/',
  // },
  mfsu: false,
  // Fast Refresh hot update
  fastRefresh: true,
  // webpack5: {},
  // lessLoader: {
  //   // golbalVars: {
  //   //'root-entry-name':'default'
  //   //}
  //   modifyVars: {
  //     'root-entry-name': 'default'
  //   }
  // },
  // chainWebpack: webpackPlugin,
  // plugins: [
  //   '@umijs/plugins/dist/initial-state',
  //   '@umijs/plugins/dist/model',
  // ],
  model: {},
  initialState: {
    loading: 'src/components/CSSSpin/index',
  },
  request: {},
  //================ pro 插件配置 =================
  presets: ['umi-presets-pro'],
});
