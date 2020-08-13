export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "BQCojOhA67etPDcMyvKIznF7uqLC1qeVSGKq3UgFakC4YFEDdX…rF2Dj7msDf4Clf39IbhcKoy2ONZ39kTTX1X86-FUqyswOfDSC",
}

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      }
    default:
      return state;
  }

}

export default reducer;