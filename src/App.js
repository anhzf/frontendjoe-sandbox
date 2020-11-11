import React from 'react';
import styled from 'styled-components';
import SkeletonCard from './components/SkeletonCard';

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #6F2ADF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <PageContainer>
      <SkeletonCard></SkeletonCard>
    </PageContainer>
  );
}

export default App;
