import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import HeroForQuarterScreen from '../../components/hero-quarter-screen/HeroForQuarterScreen';
import Blossoms from '../../assets/images/Blossoms of Renewal- A Path to Healing.png';
import { therapistsData } from '../../api/mocks/therapist-data';
import { renderParagraphs } from '../../utils/renderParagraphs';
import React from 'react';

/* eslint-disable-next-line */
export interface TherapistDetailsPageProps {}

const InnerContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  @media (min-width: 1200px) {
    padding: 0 200px;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 4px;
`;
const Licenses = styled.p`
  margin-bottom: 8px;
`;
const Name = styled.p`
  margin-bottom: 8px;
`;
const Specialties = styled.p`
  margin-bottom: 16px;
`;
const Bio = styled.div``;
const BookNowBTN = styled.button`
  background-color: black;
  padding: 16px;
  width: 150px;
  color: white;
  /* font-size: 1.2rem; */
  &:hover {
    cursor: pointer;
  }
`;

const StyledTherapistDetailsPage = styled.div`
  /* color: pink; */
`;

export function TherapistDetailsPage(props: TherapistDetailsPageProps) {
  // @ts-ignore
  const { id } = useParams();
  const therapist = therapistsData.find(
    (therapist) => therapist.id === Number(id)
  );
  console.log('id: ', id);
  console.log('therapist: ', therapist);

  return (
    <StyledTherapistDetailsPage>
      <HeroForQuarterScreen backgroundImage={Blossoms} />
      <InnerContainer>
        <Image src={therapist?.imageUrl} />
        <Licenses>{therapist?.licenses.join(', ')}</Licenses>
        <Name>{therapist?.name}</Name>
        <Specialties>{therapist?.specialties.join(', ')}</Specialties>
        <Bio>{renderParagraphs(therapist?.bio.long || '')}</Bio>
        {/* Will use calendarly for this. */}
        <BookNowBTN>Book</BookNowBTN>
      </InnerContainer>
    </StyledTherapistDetailsPage>
  );
}

export default TherapistDetailsPage;
