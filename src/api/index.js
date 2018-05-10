import fetch from '../utils/fetch'
export const getUserInfo = () => fetch({
  url: '/intro/list',
  method: 'get',
});