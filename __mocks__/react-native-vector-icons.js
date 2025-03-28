// __mocks__/react-native-vector-icons.js
import React from 'react';

const MockIcon = ({ name, size, color, testID }) => (
  <mock-icon 
    data-testid={testID}
    name={name}
    size={size}
    color={color}
  />
);

export const MaterialIcons = MockIcon;
export default MockIcon;