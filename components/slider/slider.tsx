import { useState, useEffect } from "react";
import { Container, Inner, Button } from "./styles";

export const Slider = ({
  children,
  rightButton,
  leftButton,
  maxWidth = "100%",
  width = "fit-content",
  jump = 20,
}) => {
  const [scroll, setScroll] = useState({
    maxScroll: 0,
    available: 0,
  });

  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const inner = document.getElementById("inner");
    const maxScroll = (inner.offsetWidth + 20) * inner.childNodes.length - 20;
    let available = document.getElementById("slider").offsetWidth;

    if (maxWidth !== "100%")
      available = parseInt(maxWidth.replace("%", "").replace("px", ""));

    setScroll({ maxScroll, available });
  }, [children]);

  const handleRight = () => () => {
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
      <Inner right={translate} id="inner" width={width}>
        {children}
      </Inner>
      {scroll.maxScroll > scroll.available && (
        <Button onClick={handleRight()}>{rightButton}</Button>
      )}
    </Container>
  );
};
