///////////////////DEFINING ACTION TYPES//////////////////
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

/////////////////END OF ACTION TYPES//////////////////////////

export const incrementCount = () => {
  debugger;
  return {
    type: INCREMENT,
  };
};

export const decrementCount = () => {
  debugger;
  return {
    type: DECREMENT,
  };
};
