import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';

interface BodyTextProps extends TextProps {
  children: React.ReactNode;
}

export const BodyText: React.FC<BodyTextProps> = ({children, ...props}) => {
  return (
    <Text {...props} style={[ styles.defaultText, styles.bodyText, props.style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "Lato"
  },
  bodyText: {
    fontSize: 12,
    // fontFamily: ""
  },
});
