import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Therapist } from '../../api/mocks/therapist-data';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 60px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  margin-bottom: 16px;
`;

const Bio = styled.p`
  color: #666;
`;

const Specialties = styled.p`
  display: flex;
  margin-bottom: 20px;
`;

const Licenses = styled.p`
  color: #333;
  margin-bottom: 16px;
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

interface Props {
  therapist: Therapist;
}

const TherapistCard: React.FC<Props> = ({ therapist }) => {
  return (
    <LinkStyled to={`/therapists/${therapist.id}`}>
      <CardContainer>
        <Image src={therapist.imageUrl} alt={`Profile of ${therapist.name}`} />
        <Details>
          <Name>{therapist.name}</Name>
          <Licenses>Licenses: {therapist.licenses.join(', ')}</Licenses>
          <Specialties>
            Specialties: {therapist.specialties.join(', ')}
          </Specialties>
          <Bio>Bio: {therapist.bio.short}</Bio>
        </Details>
      </CardContainer>
    </LinkStyled>
  );
};

export default TherapistCard;
