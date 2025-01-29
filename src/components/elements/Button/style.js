import styled from 'styled-components';

export const ButtonB = styled.button`
    width: 8.375rem;
    height: 3.1875rem;
    border-radius: 5px;
    background-color: ${(props) => (props.type === 'disabled' ? 'var(--gray-200)' : 'var(--primary-base)')};
    color: ${(props) => (props.type === 'disabled' ? 'var(--gray-500)' : 'var(--black)')};
    font-size: 1.5rem;
    font-weight: 900;
`;
