import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Header = styled.header`
  .menu {
    display: none;
  }
  
  width: 100%;
  height: 5rem;

  background-color: ${props => props.theme.body};
  box-shadow: 0 1px 4px ${props => `rgba(${props.theme.textRgba}, 0.2)`};
  color: ${props => props.theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  position: sticky;
  top: 0;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: baseline;
  }

  & li {
    margin: 0 1rem;
    color: white;
  }

  @media screen and (max-width: 768px) {
    .menu {
      display:block;
    }
    nav {
      display: none;
    }
  }
`

export const NavigationLink = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
    display: block;
`

export const variants = {
  show: {},
}