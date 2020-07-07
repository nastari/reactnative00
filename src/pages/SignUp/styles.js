import styled from 'styled-components/native';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['white', 'white', 'rgb(195,195,242)'],
})`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
`;

export const Tex = styled(Text)`
  font-size: ${(props) => (props.size ? props.size : 16)};
  font-weight: ${(props) => (props.weight ? props.weight : 'bold')};
`;
