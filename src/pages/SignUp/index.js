import React from 'react';
import {Image} from 'react-native';
import Input from '../../components/Input';
import Buttonn from '../../components/Button';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
} from './styles';
import logo from '../../assets/images/logo2.png';

const SignUp = ({navigation}) => {
  return (
    <Container>
      <Image source={logo} style={{height: 85, width: 320}} />

      <Form>
        <FormInput
          style={{marginTop: 25}}
          icon="person-outline"
          autoCapitalize="none"
          placeholder="Nome completo"
        />
        <FormInput
          style={{marginTop: 10}}
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu email"
        />

        <FormInput
          style={{marginTop: 10}}
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
        />
      </Form>

      <SubmitButton>CADASTRAR</SubmitButton>

      <SignUpLink onPress={() => navigation.navigate('Login')}>
        <SignUpLinkText size={20} weight={700}>
          Já tenho cadastro
        </SignUpLinkText>
      </SignUpLink>
    </Container>
  );
};

export default SignUp;
