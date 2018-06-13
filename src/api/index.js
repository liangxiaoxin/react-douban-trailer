import fetch from '../utils/fetch'
export const getUserInfo = () => fetch({
  url: '/intro/list',
  method: 'get',
});
export const getMovieList = () => fetch({
  url: '/list',
  method: 'get',
});
export const getTop250 = (params) => fetch({
  url: '/top250',
  method: 'get',
  params
});