import React from 'react';


const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }

    ]
};


export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'REMOVE_ITEM':
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(item => item.id !== action.payload)
                },
                additionalFeatures:
                    [
                        ...state.additionalFeatures,
                        ...initialState.additionalFeatures.map((feature) => {

                            if (feature.id === action.payload) {

                                return feature;
                            }

                        })
                    ].filter(item => item !== undefined),
                additionalPrice: state.additionalPrice - initialState.additionalFeatures.filter((feature) => {
                    return feature.id === action.payload
                })[0].price




            };
        case 'ADD_ITEM':

            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features,
                    ...initialState.additionalFeatures.filter((feature) => {
                        return feature.id === action.payload
                    })
                    ]

                },
                additionalFeatures: state.additionalFeatures.filter(
                    item => {

                        return item.id !== action.payload
                    }),
                additionalPrice: state.additionalPrice + initialState.additionalFeatures.filter((feature) => {
                    return feature.id === action.payload
                })[0].price

            };
        default:
            return state;

    }




}