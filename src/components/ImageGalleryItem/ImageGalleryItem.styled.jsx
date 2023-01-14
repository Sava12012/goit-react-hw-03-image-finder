import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  width: 300px;
  height: 200px;

  border-radius: 14px;
  box-shadow: var(--main-shadow);

  overflow: hidden;
  cursor: zoom-in;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
