import styled from "styled-components";
import TagMagyar from "../../components/TagMagyar";

const VideoWrapper = styled.div`
  justify-content: center;
  display: flex;

  & > ${TagMagyar} {
    margin-top: 100rem;
    font-size: 35rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  @media (max-width: 800px) {
    ${TagMagyar} {
      font-size: 15px;
      padding-top: 10rem;
      padding-bottom: 10rem;
    }
  }
`;

export default VideoWrapper;
