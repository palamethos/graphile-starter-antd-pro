import { Settings as LayoutSettings } from '@ant-design/pro-layout';

// TODO: refactor out
type DefaultConstSettings = {
  selectFilterFirstNumber: number;
  selectFilterFirstMaxNumber: number;
  listFilterFirstNumber: number;
  tableFilterFirstNumber: number;
  debounceInput: number;
  debounceEditor: number;
};

export const ConstSettings: DefaultConstSettings = {
  selectFilterFirstNumber: 25,
  selectFilterFirstMaxNumber: 250,
  listFilterFirstNumber: 10,
  tableFilterFirstNumber: 10,
  debounceInput: 500,
  debounceEditor: 1000
};

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // Dawn
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: false,
  colorWeak: false,
  title: 'GS-ANTD-PRO',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', // TODO: replace
  iconfontUrl: '',
};

export default Settings;
