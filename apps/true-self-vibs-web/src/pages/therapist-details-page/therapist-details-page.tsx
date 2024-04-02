import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import HeroForQuarterScreen from '../../components/renewal-banner/HeroForQuarterScreen';
import Blossoms from '../../assets/images/Blossoms of Renewal- A Path to Healing.png';
import { therapistsData } from '../../api/mocks/therapist-data';
import { renderParagraphs } from '../../utils/renderParagraphs';

/* eslint-disable-next-line */
export interface TherapistDetailsPageProps {}

const InnerContainer = styled.div``;
const Image = styled.img`
  width: 200px;
  height: 200px;
`;
const Licenses = styled.p``;
const Name = styled.p``;
const Specialties = styled.p``;
const Bio = styled.p``;

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
        {renderParagraphs(therapist?.bio.long || '')}
      </InnerContainer>
    </StyledTherapistDetailsPage>
  );
}

export default TherapistDetailsPage;
