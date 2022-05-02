import * as service from './../services/home-screen-services';

export const GET_HOME_SCREEN_DATA = 'FETCH_TREADING_REVIEW_RECENT';

export const getHomePageData = async (dispatch, data) => {
    const homeScreenData = await service.getHomePageData(data);
    const loadingState = false
    dispatch({
        type: 'UPDATE_LOADING_STATE', loadingState
    })
    dispatch({
        type: GET_HOME_SCREEN_DATA, homeScreenData
    });
}