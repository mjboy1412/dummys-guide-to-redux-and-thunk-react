import {combineReducers} from 'redux';
import {items, itemsHasError, itemIsloading} from './items';

export default combineReducers({
    items,
    itemIsloading,
    itemsHasError
})
;
