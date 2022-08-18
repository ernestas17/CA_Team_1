import { useState, useRef } from 'react';
import { Container, QuestionContainer, Anwser } from './CTA.style';

const CTA = ({ question, anwser }) => {
  const [opened, setOpened] = useState(false);
  const button = useRef();

  function click() {
    setOpened((prev) => !!!prev);
  }

  return (
    <Container>
      <QuestionContainer>
        <p>{question}</p>
        <div ref={button} onClick={click}>
          {opened ? <p>-</p> : <p>+</p>}
        </div>
      </QuestionContainer>
      {opened ? (
        <Anwser>
          <p>{anwser}</p>
        </Anwser>
      ) : (
        <p></p>
      )}
    </Container>
  );
};

export default CTA;
