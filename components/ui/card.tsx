// components/ui/card.tsx

import React from 'react';
import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';

type CardProps = ViewProps & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, style, ...props }: CardProps) {
  return (
    <View
      style={[
        {
          backgroundColor: 'white',
          borderRadius: 16,
          padding: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export function CardContent({ children, style, ...props }: CardProps) {
  return (
    <View
      style={[
        {
          padding: 16,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
