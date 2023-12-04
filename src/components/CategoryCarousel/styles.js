import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow {
        background: #9758a6;
        color: #efefef;
        filter: drop-shadow(0px 4px 4px rgba(0, 9, 0.25));
        border: none;
    }

    .rec.rec-arrow:hover {
        border: 2px solid #9758a6;
        background-color: #efefef;
        color: #9758a6;
    }
    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }
`;

export const CategoryImg = styled.img``;

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 200px;
    border-radius: 10px;
`;

export const Button = styled(Link)`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #9758a6;
    text-decoration: none;

    height: 50px;
    border: none;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`;