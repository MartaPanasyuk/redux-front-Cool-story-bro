export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user.profile;

export const selectMeSpace = (reduxState) => reduxState.user.profile.space;

export const selectFavoriteStory = (reduxState) => reduxState.user.favorite;

export const selecT = (reduxState) => reduxState.space.list;
