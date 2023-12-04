import styled from 'styled-components';

export const Container = styled.div`
    height: 72px;
    background-color: #ffffff;
    box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const ContainerLeft = styled.div`
    display: flex;
    gap: 30px;
`;

export const PageLink = styled.a`
    color: ${props => (props.isActive ? '#9758a6' : ' #555')};
    font-size: 16px;
    font-style: normal;
    font-weight: ${props => (props.isActive ? 'bold' : '400')};
    line-height: normal;

    text-decoration: none;
    cursor: pointer;
`;

export const ContainerText = styled.div`
    p {
        color: #555;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
`;

export const Line = styled.div`
    height: 40px;
    border-right: 1px solid #bababa;
`;

export const PageLinkExit = styled.a`
    color: #9758a6;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
    &:active {
        opacity: 0.9;
    }
`;
