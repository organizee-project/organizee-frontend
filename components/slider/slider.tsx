import { useState, useEffect } from "react";
import { Container, Inner, Button } from "./styles";

export const Slider = ({
  children,
  rightButton,
  leftButton,
  maxWidth = "100%",
  jump = 20,
}) => {
  const [scroll, setScroll] = useState({
    maxScroll: 0,
    available: 0,
  });

  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const maxScroll = document.getElementById("inner").offsetWidth;
    let available = document.getElementById("slider").offsetWidth;

    if (maxWidth !== "100%")
      available = parseInt(maxWidth.replace("%", "").replace("px", ""));

    setScroll({ maxScroll, available });
  }, []);

  const handleRight = () => () => {
    console.log(scroll.available);
    console.log(scroll.maxScroll);
    setScroll({ ...scroll, available: scroll.available + 20 });
    setTranslate(translate - jump);
  };

  const handleLeft = () => () => {
    setScroll({ ...scroll, available: scroll.available - 20 });
    setTranslate(translate + jump);
  };

  return (
    <Container maxWidth={maxWidth} id="slider">
      {translate != 0 && (
        <Button onClick={handleLeft()} left={true}>
          {leftButton}
        </Button>
      )}
      <Inner right={translate} id="inner">
        {children}
      </Inner>
      {scroll.maxScroll > scroll.available && (
        <Button onClick={handleRight()}>{rightButton}</Button>
      )}
    </Container>
  );
};
