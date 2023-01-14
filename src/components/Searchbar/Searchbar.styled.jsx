import styled from '@emotion/styled';

export const Header = styled.header`
  margin-bottom: 25px;
  padding: 16px;
  min-width: 100%;
  box-shadow: var(--main-shadow);
  background-color: var(--bg);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Input = styled.input`
  padding: 16px 24px;
  width: 300px;

  font-size: 14px;
  color: var(--secondary);

  border: none;
  border-radius: 8px;
  box-shadow: var(--inset-shadow);

  transition: all 250ms ease-in-out;

  :hover {
    outline: 4px solid var(--accent);
  }
  :focus {
    outline: 4px solid var(--accent);
  }
`;

export const ButtonSubmit = styled.button`
  padding: 14px 25px;

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
