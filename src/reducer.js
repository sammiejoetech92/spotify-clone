export const initialState = {
    user: null, 
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing...
    token: 'BQB9qH1VItE1CynI7_vEjbA7ZKKgBBj8oqCCnm6m3DBNZR_nehaUzn8nRu7Gpx-KCJdMVAWHvPtv87ILuL9WUYSNcc637CKvenaLuAnCbHI0CECqw5sSyVPef-jSV5enuu0wF0OrTM9nauL9tqRJ2nIOWDEOC_olqLo',
}

const reducer = (state, action) => {
console.log(action);



    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

            case 'SET_TOKEN':
                return {
                    ...state, 
                    token: action.token
                }

            default:
                return state;
    }
}

export default reducer;