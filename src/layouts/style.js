import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    padding: 0 var(--spacing-4);
    @media (min-width: var(--breakpoint-desktopUp)) {
        padding: 0 var(--spacing-7);
    }
`;
