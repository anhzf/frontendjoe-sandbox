import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';

const skeletonColor = '#e0daeb';
const borderRadius = '3px';

const Card = styled.div`
  border-radius: .5rem;
  background: #f2edf7;
  color: #fff;
  width: 200px;
  padding: 1.5rem;
`;

const glimmer = keyframes`
  0% {
    transform: rotate(10deg) translate(-200%, -50%);
  }
  100% {
    transform: rotate(10deg) translate(200%, -50%);
  }
`;

const skeletonShimmer = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 200px;
  background: ${rgba('#190932', .05)};
  animation: ${glimmer} 1.25s infinite linear;
`;

const Skeleton = styled.div`
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width || '120px'};
  height: ${({ height }) => height || '12px'};
  margin: ${({ margin }) => margin || 0};
  border-radius: ${borderRadius};
  background: ${skeletonColor};

  &::before {
    ${skeletonShimmer};
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  border-radius: ${borderRadius};
  background: url(${({ src }) => src}), #a36aff;
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  margin: ${({ margin }) => margin || 0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: .2rem;
`;

const Title = styled.h3`
  margin: ${({ margin }) => margin || 0};
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #444;
`;

const Subtitle = styled.span`
  margin: ${({ margin }) => margin || 0};
  font-size: .8rem;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #777;
`;

export default class SkeletonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      loading: true,
    }
  }

  componentDidMount() {
    fetch('https://picsum.photos/50/50')
      .then(res => {
        this.setState({
          loading: false,
          imgUrl: res.url,
        })
      });
  }

  render() {
    return (
      <Card>
        {this.state.loading ?
          (<Row>
            <Skeleton
              width="40px"
              height="40px"
            ></Skeleton>
            <Content margin="0 0 0 1rem">
              <Skeleton width="130px"></Skeleton>
              <Skeleton width="80px"></Skeleton>
            </Content>
          </Row>)
          : (<Row>
            <Image src={this.state.imgUrl}></Image>
            <Content margin="0 0 0 1rem">
              <Title>Anh.dev</Title>
              <Subtitle>Newbie Developer</Subtitle>
            </Content>
          </Row>)
        }
      </Card>
    )
  }
}