import styled from '@emotion/styled';
import me from '../assets/me.png';
import { AboutDalmar, ContactLinks } from '../components/about-me/about-me';
import {
  GraphicDesignSkills,
  SoftwareEngineerSkills,
} from '../components/software-engineering-skills/software-engineering-skills';
import { HeadingWithSubtextAbove } from '../components/heading-with-subtext-above/heading-with-subtext-above';
import { ProjectListItem } from '../components/portfolio-list-item/portfolio-list-item';
import rxbenefits from '../assets/rxbenefits.png';
import powerProLeasing from '../assets/PowerProLeasing.png';

interface H1Props {
  withOpacity?: boolean;
  textAlign: 'center' | 'left' | 'right';
}

const StyledApp = styled.div`
  padding: 12px;
`;

const ImageOfMe = styled.img`
  width: 100%;
  max-width: 600px;
`;

const opacity = 0.3;

export const H1 = styled.h1<H1Props>`
  font-size: 50px;
  color: rgb(0, 0, 0);
  text-align: ${(props) => props.textAlign};
  opacity: ${(props) => (props.withOpacity ? opacity : 1)};
  margin: 5px 0px;
`;

const H2 = styled.h1<H1Props>`
  font-size: 24px;
  color: rgb(0, 0, 0);
  text-align: ${(props) => props.textAlign};
  opacity: ${(props) => (props.withOpacity ? opacity : 1)};
  margin: 5px 0px;
`;

export function App() {
  return (
    <StyledApp>
      <H1 textAlign={'center'} withOpacity>
        About
      </H1>
      <ImageOfMe src={me} alt="me" />
      <section>
        <H1 textAlign={'left'} style={{ marginTop: 60, marginBottom: 30 }}>
          Echo Anime
        </H1>
        <AboutDalmar />
      </section>
      <H1 textAlign={'center'} withOpacity style={{ marginTop: 50 }}>
        About
      </H1>
      <HeadingWithSubtextAbove
        heading="Here Are Some of My Skills"
        subHeading="My Skills"
        textAlign="left"
      />
      <GraphicDesignSkills />
      <SoftwareEngineerSkills />
      <HeadingWithSubtextAbove heading="Portfolio" subHeading="Projects" />
      <ProjectListItem
        title={'RxBenefits'}
        description={
          'The summary focuses on revitalizing a stalled pharmaceutical sales analytics project at RX Benefits. By leading a four-engineer team, innovative solutions like a groundbreaking algorithmic hashmap were implemented, significantly improving project efficiency and feature delivery. Strategic decisions, such as separating frontend and backend development, alongside introducing a dynamic table component, were key. Collaboration with QA and navigating corporate challenges were essential in surpassing initial goals and significantly boosting team morale and project outcomes, showcasing leadership and problem-solving skills in a high-stakes environment.'
        }
        imageUrl={rxbenefits}
        liveUrl={'https://www.rxbenefits.com/'}
        detailUrl={''}
      />
      <ProjectListItem
        title={'Power Pro Leasing'}
        description={
          'During the tenure as a Senior Software Engineer at Power Pro Leasing, notable achievements included revitalizing the client-side React application for enhanced user scalability, introducing revenue-generating custom themes, and implementing virtual tours for a unique apartment viewing experience. Innovations such as dynamic coloring for apartments and automating check-ins improved operational efficiency. Collaboration with the project architect and team led to significant learning and the development of reliable automated testing. This period was marked by excellent teamwork and positive feedback from clients, underscoring a successful contribution to the company.'
        }
        imageUrl={powerProLeasing}
        liveUrl={'https://powerproleasing.com/'}
        detailUrl={''}
      />
      <br />
      <H2 textAlign={'left'} withOpacity>
        Dalmar Brooks
      </H2>
      <ContactLinks />
    </StyledApp>
  );
}

export default App;
