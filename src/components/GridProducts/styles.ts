import styled from 'styled-components';

export const Grid = styled.section`
  width: 938px;
  height: 601px;
  gap: 0px;
  opacity: 0px;
  margin: 116px auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
`;

export const CardSkeleton = styled.div`
  display: flex;
  width: 217.56px;
  height: 285px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #c3c4c8;
`;
