import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    padding: 0 var(--spacing-5);
    @media (min-width: var(--breakpoint-desktopUp)) {
        padding: 0 var(--spacing-7);
    }
`;
