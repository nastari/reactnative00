import React from 'react';
import {Image} from 'react-native';
import Input from '../../components/Input';
import Buttonn from '../../components/Button';
import {Container, Tex} from './styles';
import logo from '../../assets/images/logo2.png';

const SignIn = ({navigation}) => {
  return (
    <Container>
      <Image source={logo} style={{height: 85, width: 320}} />

      <Input
        style={{marginTop: 25}}
        icon="mail-outline"
        placeholder="Digite seu email"
      />

      <Input
        style={{marginTop: 12}}
        icon="lock-outline"
        placeholder="Digite sua senha"
      />

      <Buttonn style={{marginTop: 12}}>ACESSAR</Buttonn>

      <Tex
        style={{marginTop: 30}}
        size={20}
        weight={700}
        onPress={() => navigation.navigate('Cadastrar')}>
        Não tenho cadastro
      </Tex>

      <Tex style={{marginTop: 30}} weight={300}>
        Esqueci minha senha
      </Tex>
    </Container>
  );
};

export default SignIn;
