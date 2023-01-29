import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {BodyText} from './Text';

interface ButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  label?: string;
  labelStyle: TextStyle;
}

export const ButtonOutlined: React.FC<ButtonProps> = ({
  children,
  label,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.75}
      style={[styles.buttonOutlined, props.style]}>
      {label ? (
        <BodyText style={[styles.buttonOutlinedlabel, props.labelStyle]}>
          {label}
        </BodyText>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonOutlined: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginHorizontal: 12,
    padding: 12,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ffffff',
    backgroundColor: 'lightblue',
  },
  buttonOutlinedlabel: {
    // fontWeight: 'bold',
    fontSize: 16
  },
});
