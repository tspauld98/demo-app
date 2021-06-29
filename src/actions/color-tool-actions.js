export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';

export const ADD_COLOR_ACTION = 'ADD_COLOR';
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

}

export const deleteColor = (colorId) => {
  return (dispatch) => {

    dispatch(createDeleteColorRequestAction());

    return fetch("http://localhost:3060/colors/" + encodeURIComponent(colorId), {
      method: 'DELETE'
    }).then(() => dispatch(refreshColors()));
  };
};

export const createAddColorAction = value => ({type: ADD_COLOR_ACTION, value});
export const createDeleteColorRequestAction = value => ({type: DELETE_COLOR_REQUEST_ACTION, value});
