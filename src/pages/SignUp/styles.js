import styled from 'styled-components/native';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled(LinearGradient).attrs({
  colors: ['white', 'white', 'rgb(195,195,242)'],
})`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
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
