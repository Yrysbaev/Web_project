import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    search: null,
    category: null,
    type: null,
    page: null,
    minPrice: null,
    maxPrice: null,
    infrastructure: null,
    perPage: 12
}

const areasSlice = createSlice({
    name: 'sport-areas',
    initialState: initialState,
    reducers: {
        changeSearch(state, action) {
            if (action.payload) {
                state.search = action.payload
            } else {
                state.search = null
            }
        },
        changePage(state, action) {
            if (action.payload) {
                state.page = action.payload
            } else {
                state.search = null
            }
        },
        changeCategory(state, action) {
            if (action.payload) {
                state.category = action.payload
            } else {
                state.category = null
            }
        },
        changeType(state, action) {
            if (action.payload) {
                state.type = action.payload
            } else {
                state.type = null
            }
        },
        changeMinPrice(state, action) {
            if (action.payload) {
                state.minPrice = action.payload
            } else {
                state.minPrice = null
            }
        },
        changeMaxPrice(state, action) {
            if (action.payload) {
                state.maxPrice = action.payload
            } else {
                state.maxPrice = null
            }
        },
        changeInfrastructure(state, action) {
            if (action.payload) {
                state.infrastructure = action.payload
            } else {
                state.infrastructure = null
            }
        },
        changePerPage(state, action) {
            if (action.payload) {
                state.perPage = action.payload
            } else {
                state.perPage = 12
            }
        }
    }
})

export default areasSlice.reducer
export const {
    changeSearch,
    changePage,
    changeType,
    changeInfrastructure,
    changeCategory,
    changeMinPrice,
    changeMaxPrice,
    changePerPage
} = areasSlice.actions