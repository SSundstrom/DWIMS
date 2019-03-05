import * as React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Logo from './Logo';
import ContentStyles from './styles/ContentStyles';

const Background = styled.div`
  position: relative;
  background-color: ${({ isLeader, isHost }) => {
    if (isLeader) {
      return '#f3bd34';
    }
    if (isHost) {
      return '#3466f3';
    }
    return '#c42ae6';
  }};
  height: auto;
  min-height: 100%;
  .navbar {
    padding: 20px;
    text-align: center;
    font-weight: bold;
  }
`;

const Layout = ({ isLeader, isHost, children }) => (
  <Background isLeader={isLeader} isHost={isHost}>
    <div className="navbar">
      <Logo />
    </div>
    <ContentStyles>{children}</ContentStyles>
  </Background>
);
Layout.propTypes = {
  isLeader: PropTypes.bool.isRequired,
  isHost: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
Layout.defaultProps = {
  children: null,
};
export default Layout;
