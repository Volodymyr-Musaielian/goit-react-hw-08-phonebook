export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getIsRefreshingUser = state => state.auth.isRefreshingUser;

export const getUserRefreshed = state => state.auth.userRefreshed;

// const authSelectors = {
//   getIsLoggedIn,
//   getUserName,
//   getIsRefreshingUser,
//   getUserRefreshed,
// };

// export default authSelectors;
