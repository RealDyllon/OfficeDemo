import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {BodyText} from './Text';
import { PRIMARY_COLOR } from "../constants/branding";

interface ButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  label?: string;
  labelStyle?: TextStyle;
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
    marginHorizontal: 18,
    padding: 14,
    // borderWidth: 2,
    // borderRadius: 5,
    borderColor: '#ffffff',
    backgroundColor: PRIMARY_COLOR,
  },
  buttonOutlinedlabel: {
    fontSize: 17,
  },
});
