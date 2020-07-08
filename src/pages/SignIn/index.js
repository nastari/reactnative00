import React, {useRef} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Gradient,
  Form,
  FormInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
} from './styles';
import logo from '../../assets/images/logo2.png';

const SignIn = ({navigation}) => {
  const passwordRef = useRef();

  function handleSubmit() {}
  return (
    <Container>
      <Gradient>
        <Image source={logo} style={{height: 85, width: 320}} />

        <Form>
          <FormInput
            style={{marginTop: 25}}
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            style={{marginTop: 10}}
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit()}
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
      </Gradient>
    </Container>
  );
};

export default SignIn;
