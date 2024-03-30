import React, { useState } from 'react';
import { GenderIdentity } from '../../hooks/useQuestionnaire';

interface GenderSelectProps {
  onGenderSelect: (gender: GenderIdentity | string) => void; // Callback prop for when gender is selected/entered
}

const GenderSelect: React.FC<GenderSelectProps> = ({ onGenderSelect }) => {
  const [selectedGender, setSelectedGender] = useState<GenderIdentity>('');
  const [selfDescribedGender, setSelfDescribedGender] = useState('');

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gender: GenderIdentity = event.target.value as GenderIdentity;
    setSelectedGender(gender);
    if (gender !== 'Self-Describe') {
      onGenderSelect(gender);
    }
  };

  const handleSelfDescribeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const gender = event.target.value;
    setSelfDescribedGender(gender);
    onGenderSelect(gender);
  };

  return (
    <div>
      <select value={selectedGender} onChange={handleGenderChange}>
        <option value="">Select your gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-Binary">Non-Binary</option>
        <option value="Transgender">Transgender</option>
        <option value="Trans Female">Trans Female</option>
        <option value="Trans Male">Trans Male</option>
        <option value="Intersex">Intersex</option>
        <option value="Genderqueer">Genderqueer</option>
        <option value="Genderfluid">Genderfluid</option>
        <option value="Agender">Agender</option>
        <option value="Bigender">Bigender</option>
        <option value="Pangender">Pangender</option>
        <option value="Gender Variant">Gender Variant</option>
        <option value="Two-Spirit">Two-Spirit</option>
        <option value="Neutrois">Neutrois</option>
        <option value="Questioning">Questioning</option>
        <option value="Prefer not to say">Prefer not to say</option>
        <option value="Self-Describe">Self-Describe</option>
      </select>
      {selectedGender === 'Self-Describe' && (
        <input
          type="text"
          value={selfDescribedGender}
          onChange={handleSelfDescribeChange}
          placeholder="Please describe"
        />
      )}
    </div>
  );
};

export default GenderSelect;
