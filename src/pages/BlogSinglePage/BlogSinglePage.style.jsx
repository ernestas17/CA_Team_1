import styled from 'styled-components';

const device = {
  mobile: `(max-width: 628px)`,

  tablet: `(max-width: 1280px)`,
};

export const StyledBlogSingle = styled.div`
  height: auto;
  width: 100%;
  margin-top: 80px;

  @media ${device.mobile} {
    margin-top: 30px;
  }
  .wrapper {
    max-width: 1280px;
    margin: 0 auto;

    width: 100%;
    height: 100%;
    .top {
      margin-left: 220px;
      @media ${device.tablet} {
        margin: 0 100px;
      }
      @media ${device.mobile} {
        margin: 0 50px;
      }
    }
    .posteddate {
      width: 100%;

      p {
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
        color: #939191;
      }
    }
    .title {
      margin-top: 16px;
      width: 100%;

      h3 {
        width: 896px;
        font-size: 48px;
        font-weight: 700;
        line-height: 67.2px;
        color: #1e1b1b;
        letter-spacing: -1.5px;
        @media ${device.tablet} {
          width: 100%;
        }
        @media ${device.mobile} {
          font-size: 28px;
          line-height: 32px;
        }
      }
    }
    .text {
      margin-top: 16px;

      width: 65%;
      @media ${device.mobile} {
        width: 100%;
      }
    }
    .image {
      margin-top: 64px;
      width: 100%;
      height: 512px;
      @media ${device.mobile} {
        height: 312px;
      }
    }
    .content {
      margin-top: 64px;
      margin-left: 220px;
      margin-bottom: 128px;
      height: 100%;

      width: 71%;

      @media ${device.tablet} {
        margin-left: 0px;
        width: 100%;
      }
      @media ${device.mobile} {
      }

      h4 {
        color: #1e1b1b;
        font-size: 40px;
        line-height: 56px;
        font-weight: 700;
        letter-spacing: -1.5px;
        margin-bottom: 20px;
        @media ${device.tablet} {
          margin-left: 100px;
          width: 80%;
        }
        @media ${device.mobile} {
          margin-left: 50px;
        }
      }
      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        color: #232536;
        opacity: 60%;

        @media ${device.tablet} {
          margin-left: 100px;
          width: 80%;
        }
        @media ${device.mobile} {
          margin-left: 50px;
        }
      }
      p:nth-child(4) {
        margin-top: 80px;
        margin-bottom: 16px;
        color: #1e1b1b;
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
        letter-spacing: -1.5px;
        opacity: 100%;
      }

      .quote {
        height: auto;
        margin-top: 32px;
        margin-bottom: 32px;
        display: flex;
        .stick {
          height: 112px;
          width: 7px;
          margin-right: 34px;

          background-color: #1e1b1b;
        }
        p {
          display: flex;
          align-items: center;
        }

        @media ${device.tablet} {
          width: 90%;
          p {
            margin: 0;
          }
          .stick {
            margin-left: 100px;
          }
        }
        @media ${device.mobile} {
          .stick {
            margin-left: 50px;
            height: auto;
          }
        }
      }
      .imageBottom {
        margin-top: 56px;
        width: 100%;
        height: 598px;
        .imageBot {
          width: 100%;
          height: 100%;
        }
        @media ${device.mobile} {
          height: 312px;
        }
      }
    }
  }
`;
