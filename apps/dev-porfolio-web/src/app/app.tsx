import styled from '@emotion/styled';
import me from '../assets/me2.png';
import { AboutDalmar, ContactLinks } from '../components/about-me/about-me';
import {
  GraphicDesignSkills,
  SoftwareEngineerSkills,
} from '../components/software-engineering-skills/software-engineering-skills';
import { HeadingWithSubtextAbove } from '../components/heading-with-subtext-above/heading-with-subtext-above';
import { ProjectListItem } from '../components/portfolio-list-item/portfolio-list-item';
import { projects } from './projects-data';

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
  font-size: 48;
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
      <H1
        textAlign={'center'}
        withOpacity
        style={{ marginTop: 60, marginBottom: 30 }}
      >
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
      {projects.map((project, index) => (
        <ProjectListItem
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          liveUrl={project.liveUrl}
          detailUrl={project.detailUrl}
        />
      ))}
      <br />
      <H2 textAlign={'left'} withOpacity>
        Dalmar Brooks
      </H2>
      <ContactLinks />
    </StyledApp>
  );
}

export default App;
