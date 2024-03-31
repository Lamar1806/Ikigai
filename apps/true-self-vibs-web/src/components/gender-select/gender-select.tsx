import React, { useState } from 'react';
import styled from '@emotion/styled';
import { GENDERS, GenderIdentity } from '../../api/mocks/genders'; // Adjust the import path as necessary

// Adjusted styled components for better alignment
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; // Space between items
  padding: 20px;
`;

const CheckboxContainer = styled.div`
  width: calc(50% - 10px); // Assuming gap is 20px, adjust for your actual gap
  display: flex;
  align-items: center; // Align checkbox and label text in each row
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 16px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

interface GenderSelectProps {
  onGenderSelect: (gender: GenderIdentity[]) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({ onGenderSelect }) => {
  const [selectedGenders, setSelectedGenders] = useState<GenderIdentity[]>([]);

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as GenderIdentity;
    if (event.target.checked) {
      const updatedSelectedGenders = [...selectedGenders, value];
      setSelectedGenders(updatedSelectedGenders);
      onGenderSelect(updatedSelectedGenders);
    } else {
      const updatedSelectedGenders = selectedGenders.filter(
        (gender) => gender !== value
      );
      setSelectedGenders(updatedSelectedGenders);
      onGenderSelect(updatedSelectedGenders);
    }
  };

  return (
    <Container>
      {Object.entries(GENDERS).map(([key, value]) => (
        <CheckboxContainer key={key}>
          <Checkbox
            type="checkbox"
            value={key}
            onChange={handleGenderChange}
            checked={selectedGenders.includes(key as GenderIdentity)}
          />
          <Label>{value}</Label>
        </CheckboxContainer>
      ))}
    </Container>
  );
};

export default GenderSelect;
