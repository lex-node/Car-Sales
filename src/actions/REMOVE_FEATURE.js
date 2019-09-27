export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = (removedFeature) => {
    return {
        type: REMOVE_FEATURE,
        payload: removedFeature
    }
};

