import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Roboto;
  background-color: #eef4f7;
  min-height: 100vh;
`

export const MainContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 0;
`

export const Heading = styled.h1`
  font-size: 25px;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #52bbf0;
  text-underline-offset: 7px;
  margin-bottom: 30px;
  color: #334155;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
