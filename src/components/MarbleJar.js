import React from 'react';
import { Dimensions } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { height, width } = Dimensions.get('window');

const SvgComponent = props => (
    <Svg viewBox="0 0 11.788 15.948" height={height} width={width} {...props}>
        <Path
            d="M9.361 2.226V2.08h.347a.695.695 0 0 0 .693-.693V.693c0-.427-.189-.677-.7-.675L6.016.075 2.08 0a.69.69 0 0 0-.693.693v.694c0 .38.312.693.693.693h.347v.146C2.427 3.575 0 2.86 0 5.346v7.695a2.906 2.906 0 0 0 2.906 2.907h5.975a2.906 2.906 0 0 0 2.907-2.907V5.347c0-2.487-2.427-1.772-2.427-3.12z"
            fill="#dae7ef"
        />
    </Svg>
);

export default SvgComponent;
