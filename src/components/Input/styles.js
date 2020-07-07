import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 2px 15px;
  height: 46px;
  background: #d5def4;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0)',
})`
  flex: 1;
  font-size: 18px;
  margin-left: 10px;
  color: black;
`;
