import React from 'react';
import { View } from 'react-native';

import { Original, Small } from './styles';

export default function LazyImage({
    smallSource,
    source,
    aspectRatio,
}) {
    return (
        <Small
            source={smallSource}
            ratio={aspectRatio}
            resizeMode="contain"
            blurRadius={2}>

            <Original
                source={source}
                ratio={aspectRatio}
                resizeMode="contain"
            />
        </Small>
    );
}