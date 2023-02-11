

import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';

export default configureStore({
    reducer: {
        dataTable: dataReducer
    }
})