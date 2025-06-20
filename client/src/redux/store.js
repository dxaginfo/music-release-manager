import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import campaignReducer from './slices/campaignSlice';
import taskReducer from './slices/taskSlice';
import assetReducer from './slices/assetSlice';
import analyticsReducer from './slices/analyticsSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    campaigns: campaignReducer,
    tasks: taskReducer,
    assets: assetReducer,
    analytics: analyticsReducer,
    ui: uiReducer,
  },
});

export default store;