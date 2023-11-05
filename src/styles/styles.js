import styled from "styled-components";

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
`
export const Hide = styled.div`
  overflow: hidden;
`
export const Image = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 80%;
    height: 80vh;
    object-fit: cover;
    object-position: top center;
  }
`

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 12px;
`