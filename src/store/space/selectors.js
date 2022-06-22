export const selectSpace = (reduxState) => reduxState.space.spaceList;

export const selectSpaceDetails = (id) => (reduxState) => {
  const allspaces = reduxState.space.spaceList;
  const onespace = allspaces.find((space) => space.id === id);
  console.log(onespace);
};
