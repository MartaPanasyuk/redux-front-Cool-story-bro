export const selectSpaces = (reduxState) => reduxState.space.list;

export const selectSpaceDetails = (reduxState) => reduxState.space.details;

/*export const selectSpaceDetails = (id) => (reduxState) => {
  const allspaces = reduxState.space.spaceList;
  const oneSpacewithStories = allspaces.find((space) => space.id === id);
  //console.log("what is onespace ", oneSpacewithStories);
  return oneSpacewithStories;
};

*/
