import styled from '@emotion/styled';

export const ButtonLoadMore = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 25px;

  font-weight: 500;
  font-size: 18px;
  color: var(--accent);

  background-color: transparent;
  border: 1px solid var(--accent);
  border-radius: 8px;

  cursor: pointer;
  box-shadow: var(--main-shadow);

  transition: all 300ms ease-in-out;

  :hover {
    color: var(--button);
    background-color: var(--accent);
    outline: 4px solid var(--accent);
  }

  :focus {
    color: var(--button);
    background-color: var(--accent);
    outline: 4px solid var(--accent);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;
