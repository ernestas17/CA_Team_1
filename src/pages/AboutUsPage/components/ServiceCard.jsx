import { StyledWrapper } from "./ServiceCard.style";

const ServiceCard = ({ icon, headline, about }) => {
  return (
    <StyledWrapper>
      <div className="iconInCircleContainer">
        <div className="circle">
          <i class={icon}></i>
        </div>
      </div>
      <h6>{headline}</h6>
      <p>{about}</p>
    </StyledWrapper>
  );
};

export default ServiceCard;
