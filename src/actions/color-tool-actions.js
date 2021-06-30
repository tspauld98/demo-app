export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';

export const ADD_COLOR_REQUEST_ACTION = 'ADD_COLOR';
export const DELETE_COLOR_REQUEST_ACTION = 'DELETE_COLOR';

export const createRefreshColorsRequestAction = () => ({ type: REFRESH_COLORS_REQUEST_ACTION });
export const createRefreshColorsDoneAction = value => ({ type: REFRESH_COLORS_DONE_ACTION, value });

export const refreshColors = () => {

  return (dispatch) => {

    dispatch(createRefreshColorsRequestAction());

    return fetch("http://localhost:3060/colors")
      .then(res => res.json())
      .then(colors => dispatch(createRefreshColorsDoneAction(colors)));

  };

};

export const addColor = (color) => {

  return (dispatch) => {

    dispatch(createAddColorRequestAction());

    return fetch("http://localhost:3060/colors", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(color)
    }).then(() => dispatch(refreshColors()));
  };
};

export const deleteColor = (colorId) => {
  return (dispatch) => {

    dispatch(createDeleteColorRequestAction());

    return fetch("http://localhost:3060/colors/" + encodeURIComponent(colorId), {
      method: 'DELETE'
    }).then(() => dispatch(refreshColors()));
  };
};

export const createAddColorRequestAction = value => ({type: ADD_COLOR_REQUEST_ACTION});
export const createDeleteColorRequestAction = value => ({type: DELETE_COLOR_REQUEST_ACTION});
