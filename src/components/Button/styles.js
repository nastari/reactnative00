import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  /* display: flex; */
  flex-direction: row;
  background: rgb(20, 20, 20);
  height: 46px;
  padding: 0px 15px;
  border-radius: 5px;
  width: 100%;
  justify-content: center;
`;

export const Text = styled.Text`
  align-self: center;
  color: white;
  font-size: 21px;
  font-weight: bold;
`;
