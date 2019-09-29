export const addFeature = feature => {
    return {
        type: 'ADD_FEATURE',
        payload: feature
    }
}

export const removeFeature = feature => ({
    type: 'REMOVE_FEATURE',
    payload: feature
})

