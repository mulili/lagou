const getRedirectPath = ({ type, avatar }) => {
/*
  根据用户类型确定用户跳转路由 ：/boss or /genius
  并且根据用户是否有头像，确定是否需要跳转到信息完善页面  /boss/info or /genius/info
*/
  let redirectTo = (type === 'genius') ? '/genius' : '/boss';
  if (!avatar) redirectTo += '/info';
  return redirectTo;
};
export default getRedirectPath;
