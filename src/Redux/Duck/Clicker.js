const CLICKED = "clicked";
const NOTCLICKED = "notclicked";

export const clicked = () => ({
  type: CLICKED,
});

export const notclicked = () => ({
  type: NOTCLICKED,
});

const initialState = {
  click: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICKED:
      return { ...state, click: true };
    case NOTCLICKED:
      return { ...state, click: false };
    default:
      return state;
  }
};
