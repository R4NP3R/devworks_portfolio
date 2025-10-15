import { motion } from "framer-motion";
import styled from "styled-components";
import {Link} from 'react-scroll'

interface Props {
  $isActive?: boolean
}

export const NavigationMenu = styled(motion.nav)`
  position: fixed;
  right: 40px;
  top: 12px;
  padding: 8px;

  @media (max-width: 480px) {
    display: none;
  }
`

export const NavigationMenuList = styled.menu`
`

export const NavigationMenuListItem = styled.li`
  position: relative;
  width: 120px;
  height: 30px;
`

export const ListItemLink = styled(Link)<Props>`
  z-index: 5;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  color: ${props => props.$isActive ? '#fff' : '#2D5462'};
  transition: 1s;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  padding: 4px;
  padding-left: 8px;
  border-radius: 8px;
  cursor: pointer;
`

export const ListItemLinkBackground = styled(motion.div)<Props>`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background-color: #2D5462;
  padding: 8px;
  border-radius: 8px;
`