import { useState } from "react";

import { Container, SelectContainer } from "./styles";

export const Select = ({ options, icon, onChange, ...props }) => {
  const [selected, setSelected] = useState(options[0]);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    onChange(value);
    setSelected(value);
  };

  return (
    <Container>
      <SelectContainer
        value={selected}
        onChange={handleSelectChange}
        {...props}
      >
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </SelectContainer>
      {icon}
    </Container>
  );
};
