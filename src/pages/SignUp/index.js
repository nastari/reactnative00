import React from 'react';
import {Image} from 'react-native';
import Input from '../../components/Input';
import Buttonn from '../../components/Button';
import {Container, Tex} from './styles';
import logo from '../../assets/images/logo2.png';

const SignUp = ({navigation}) => {
  return (
    <Container>
      <Image source={logo} style={{height: 85, width: 320}} />

      <Input
        style={{marginTop: 25}}
        icon="person-outline"
        placeholder="Nome completo"
      />

      <Input
        style={{marginTop: 12}}
        icon="mail-outline"
        placeholder="Digite seu email"
      />

      <Input
        style={{marginTop: 12}}
        icon="lock-outline"
        placeholder="Digite sua senha"
      />

      <Buttonn style={{marginTop: 12}}>CADASTRAR</Buttonn>

      <Tex
        style={{marginTop: 30}}
        size={20}
        weight={700}
        onPress={() => navigation.navigate('Login')}>
        Já tenho cadastro
      </Tex>
    </Container>
  );
};

export default SignUp;
