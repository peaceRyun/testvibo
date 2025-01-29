import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('public/aboutDemo.png');
`;

export const FlexCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const H2 = styled.h2`
    font-size: var(--display-large-size);
    font-weight: var(--display-large-weight);
    text-align: center;
    line-height: var(--pc-l-line-height);
    width: 100%;
`;

export const P = styled.p`
    font-size: var(--title-xlarge-size);
    font-weight: var(--title-xlarge-weight);
    text-align: center;
    color: #c9c9c9;
    margin-bottom: 50px;
`;

export const Span = styled.span`
    color: var(--primary-base);
`;

export const SpanA = styled.span`
    font-size: var(--title-medium-size);
    font-weight: var(--title-medium-weight);
`;

export const SpanB = styled.span`
    font-size: 25px;
`;
