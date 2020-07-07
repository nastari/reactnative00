import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
} from './styles';
import logo from '../../assets/images/logo2.png';

const SignIn = ({navigation}) => {
  return (
    <Container>
      <Image source={logo} style={{height: 85, width: 320}} />

      <Form>
        <FormInput
          style={{marginTop: 25}}
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu email"
        />

        <FormInput
          style={{marginTop: 12}}
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
        />
      </Form>

      <SubmitButton>ACESSAR</SubmitButton>

      <SignUpLink onPress={() => navigation.navigate('Cadastrar')}>
        <SignUpLinkText size={20} weight={700}>
          Não tenho cadastro
        </SignUpLinkText>
      </SignUpLink>

      <SignUpLink onPress={() => {}}>
        <SignUpLinkText weight={300}>Esqueci minha senha</SignUpLinkText>
      </SignUpLink>
    </Container>
  );
};

export default SignIn;
