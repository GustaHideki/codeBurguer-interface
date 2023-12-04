import styled from 'styled-components';

import Background from './../../assets/background.svg';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(${Background});

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerItens = styled.div`
    border-radius: 0 10px 10px 0;
    background: #373737;
    height: 70%;
    padding: 25px 75px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        color: #fff;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        margin-top: 10px;
    }
    form {
        display: flex;
        flex-direction: column;
    }
`;

export const RegisterImage = styled.img`
    height: 70%;
`;

export const Label = styled.p`
    color: #fff;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: ${props => (props.error ? `12px` : `28px`)};
    margin-bottom: 5px;
    padding-left: 10px;
`;

export const Input = styled.input`
    border-radius: 5px;
    background: #fff;
    box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
    width: 391.42px;
    height: 38.32px;
    padding-left: 10px;
    border: ${props => (props.error ? `2px solid #CC1717` : `none`)};
`;

export const SingInLink = styled.p`
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    a {
        text-decoration: underline;
        cursor: pointer;
    }
`;
