import { StyledCard } from "./TeamMemberCard.style";

const TeamMemberCard = ({ name, about, image }) => {
  return (
    <StyledCard>
      <div
        className="teamImage"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="content">
        <h6>{name}</h6>
        <p>{about}</p>
      </div>
    </StyledCard>
  );
};

export default TeamMemberCard;
