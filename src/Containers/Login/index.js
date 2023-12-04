import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components';
import ErrorMessage from '../../components/ErrorMenssage';
import { useUser } from '../../hooks/UserContext';
import api from '../../services/api';
import LoginImg from './../../assets/login-image.svg';
import {
    Container,
    ContainerItens,
    LoginImage,
    Label,
    Input,
    SingInLink
} from './styles';

function Login() {
    const history = useHistory();
    const { putUserData, userData } = useUser();
    console.log(userData);

    const schema = Yup.object().shape({
        email: Yup.string()
            .email('insira um e-mail válido')
            .required('o e-mail é obrigátorio'),
        password: Yup.string()
            .required('A senha é obrigatória!')
            .min(6, 'A senha deve conter no minimo 6 caracteres')
    });
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem-vindo(a)!',
                error: 'Verifique seu e-mail e senha'
            }
        );
        putUserData(data);
        setTimeout(() => {
            if (data.admin) {
                history.push('/pedidos');
            } else {
                history.push('/');
            }
        }, 1000);
    };

    return (
        <Container>
            <LoginImage src={LoginImg} alt="Login-image" />
            <ContainerItens>
                <img src={Logo} alt="logo-code-burguer" />

                <h1>login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    <Button
                        type="submit"
                        style={{ marginTop: 75, marginBottom: 25 }}
                    >
                        Sing In
                    </Button>
                </form>

                <SingInLink>
                    Não possui conta ?{' '}
                    <Link style={{ color: 'white' }} to="/cadastro">
                        Sing Up
                    </Link>
                </SingInLink>
            </ContainerItens>
        </Container>
    );
}
export default Login;
