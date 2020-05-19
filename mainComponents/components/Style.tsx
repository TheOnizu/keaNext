import styled from "styled-components";
import { motion } from "framer-motion"

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  position: relative;
  width: 100vw;
`

export const Linc = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export const Pill = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: #000;
  border-radius: 50%;
`