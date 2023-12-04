import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components';
import ErrorMessage from '../../components/ErrorMenssage';
import api from '../../services/api';
import RegisterImg from './../../assets/register-Image.svg';
import {
    Container,
    ContainerItens,
    RegisterImage,
    Label,
    Input,
    SingInLink
} from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigátorio'),
    email: Yup.string()
        .email('insira um e-mail válido')
        .required('o e-mail é obrigátorio'),
    password: Yup.string()
        .required('A senha é obrigatória!')
        .min(6, 'A senha deve conter no minimo 6 caracteres'),
    confirmPassword: Yup.string()
        .required('A senha é obrigatória!')
        .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
});

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async clientData => {
        try {
            const { status } = await api.post(
                'users',
                {
                    name: clientData.name,
                    email: clientData.email,
                    password: clientData.password
                },
                { validateStatus: () => true }
            );
            if (status === 201 || status === 200) {
                toast.success('Cadastro criado com sucesso!');
            } else if (status === 409) {
                toast.error('E-mail já cadastrado, faça login para continuar');
            } else {
                throw new Error();
            }
        } catch (err) {
            toast.error('falha no sistema, tente novamente!');
        }
    };

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt="Register-image" />
            <ContainerItens>
                <img src={Logo} alt="logo-code-burguer" />

                <h1>Cadastre-se</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label error={errors.name?.message}>Nome</Label>
                    <Input
                        type="text"
                        {...register('name')}
                        error={errors.name?.message}
                    />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message}>Senha</Label>
                    <Input
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.confirmPassword?.message}>
                        Confirmar Senha
                    </Label>
                    <Input
                        type="password"
                        {...register('confirmPassword')}
                        error={errors.confirmPassword?.message}
                    />
                    <ErrorMessage>
                        {errors.confirmPassword?.message}
                    </ErrorMessage>

                    <Button
                        type="submit"
                        style={{ marginTop: 25, marginBottom: 25 }}
                    >
                        Sing Up
                    </Button>
                </form>

                <SingInLink>
                    Já possui conta ?{' '}
                    <Link style={{ color: 'white' }} to="login">
                        Sing In
                    </Link>
                </SingInLink>
            </ContainerItens>
        </Container>
    );
}
export default Register;
