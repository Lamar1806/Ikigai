import React, { useState } from 'react';
import styled from '@emotion/styled';
import { GENDERS, GenderIdentity } from '../../api/mocks/genders'; // Adjust the import path as necessary

// Adjusted styled components for better alignment
const Container = styled.div`
  display: flex;
  flex-direction: column; // Changed to column for mobile-first approach
  gap: 20px; // Space between items
  padding: 20px;
  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center; // Align checkbox and label text in each row
  width: 100%; // Take full width on mobile

  @media (min-width: 1200px) {
    // Adjust breakpoint as needed
    width: calc(50% - 10px); // For larger screens, adjust for actual gap
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 16px;
  width: 200px;
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
            id={key}
            type="checkbox"
            value={key}
            onChange={handleGenderChange}
            checked={selectedGenders.includes(key as GenderIdentity)}
          />
          <Label htmlFor={key}>{value}</Label>
        </CheckboxContainer>
      ))}
    </Container>
  );
};

export default GenderSelect;
