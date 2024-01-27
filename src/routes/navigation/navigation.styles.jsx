import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 0;
  display: flex; /* Enable flex properties */
  align-items: center; /* Center items vertically */
`;

export const NavLinks = styled.div`
  flex: 1; /* Take remaining space */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// Example usage in a component
// import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './styles';

// const MyComponent = () => {
//   return (
//     <NavigationContainer>
//       <LogoContainer to="/">Logo</LogoContainer>
//       <NavLinks>
//         <NavLink to="/home">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         {/* Add more NavLink components as needed */}
//       </NavLinks>
//     </NavigationContainer>
//   );
// };
