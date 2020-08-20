import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color .2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }

  @media (max-width: 599px) {
    img {
      margin-bottom: 50px;
    }

    flex-direction: column;
    align-items: flex-start;
  }
`

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;
    list-style: none;

    li {

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }

  @media (max-width: 599px) {
    margin-top: 30px;

    header {
      img {
        width: 100px;
        height: 100px;
      }

      div {
        strong {
          font-size: 24px;
        }

        p {
          font-size: 14px;
        }
      }
    }

    ul {
      justify-content: space-between;

      li {
        & + li {
          margin-left: 0;
        }

        strong {
          font-size: 24px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }
`

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
    }
  }

  @media (max-width: 599px) {
    margin-top: 50px;
  }
`;
