import styled from 'styled-components/native';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['white', 'white', 'rgb(195,195,242)'],
})`
  flex: 1;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.View`
  align-self: stretch;
`;
export const FormInput = styled(Input)``;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const SignUpLinkText = styled(Text)`
  font-size: ${(props) => (props.size ? props.size : 16)};
  font-weight: ${(props) => (props.weight ? props.weight : 'bold')};
`;
