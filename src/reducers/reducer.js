const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        {id: 1, name: 'V-6 engine', price: 1500},
        {id: 2, name: 'Racing detail package', price: 1500},
        {id: 3, name: 'Premium sound system', price: 500},
        {id: 4, name: 'Rear spoiler', price: 250}
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FEATURE':
            if (!(state.car.features.includes(action.payload))) {
                let newAdditionalPrice = state.additionalPrice + action.payload.price;
                let newCar = {...state.car, features: [...state.car.features, action.payload]};
                return {...state, additionalPrice: newAdditionalPrice, car: newCar};
            } else {
                return {...state}
            }
        case 'REMOVE_FEATURE':
            let newFeatures = state.car.features.filter(feature => {
                return !(feature.id === action.payload.id)
            });
            let newRemovedAdditionalPrice = state.additionalPrice - action.payload.price;
            let newRemovedFeatureCar = {...state.car, features: newFeatures};
            return {...state, additionalPrice: newRemovedAdditionalPrice, car: newRemovedFeatureCar};
        default:
            return state;
    }
}

export default reducer;
