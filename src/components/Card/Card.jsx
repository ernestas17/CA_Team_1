import { Link } from "react-router-dom";

import { StyledCardWrapper } from "./Card.style";

const Card = ({ icon, headline, url }) => {
  return (
    <>
      <Link to={`/services/${url}`} style={{ textDecoration: "none" }}>
        <StyledCardWrapper>
          {icon}
          <h4>{headline}</h4>
        </StyledCardWrapper>
      </Link>
    </>
  );
};

export default Card;
