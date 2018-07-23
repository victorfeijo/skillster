import { AsyncStorage } from 'react-native';
import { createAction } from 'redux-actions';

import * as c from '../constants';

export const saveNewTrain = (train) => {
  return async (dispatch, getState) => {
    try {
      dispatch(createAction(c.SAVE_NEW_TRAIN)());

      const persistedTrains = JSON.parse(await AsyncStorage.getItem('@trains'));
      const trainsToSave = [...persistedTrains, train];

      await AsyncStorage.setItem('@trains', JSON.stringify(trainsToSave));

      dispatch(createAction(c.SAVE_NEW_TRAIN_DONE)(train));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTrains = () => (
  async (dispatch, getState) => {
    dispatch(createAction(c.GET_TRAINS)());

    const persistedTrains = JSON.parse(await AsyncStorage.getItem('@trains'));

    dispatch(createAction(c.GET_TRAINS_DONE)(persistedTrains));
  }
);
