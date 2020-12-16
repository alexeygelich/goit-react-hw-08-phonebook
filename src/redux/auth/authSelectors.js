const getEmail = (state) => state.auth.user.email;

const isAuth = (state) => state.auth.token;

export default { getEmail, isAuth };
