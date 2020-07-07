import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Container, TextInput} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Input = ({style, icon, ...rest}, ref) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color={'rgb(35, 35, 35, 0.6)'} />}
      <TextInput {...rest} ref={ref} />
    </Container>
  );
};

export default forwardRef(Input);

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};
