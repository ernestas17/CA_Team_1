import { StyledCardWrapper } from "./Card.style";

const Card = ({ icon, headline }) => {
  return (
    <>
      <StyledCardWrapper>
        {icon}
        <h4>{headline}</h4>
      </StyledCardWrapper>
    </>
  );
};

export default Card;
