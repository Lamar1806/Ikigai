import styled from '@emotion/styled';
import {
  membershipOptions,
  MembershipOption,
} from '../../api/mocks/membership-options';
import { MembershipCard } from '../../components/membership-card/membership-card';
/* eslint-disable-next-line */
export interface MembershipsPageProps {}

const StyledMembershipsPage = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

const InnerContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex;
  }
`;

export function MembershipsPage(props: MembershipsPageProps) {
  return (
    <StyledMembershipsPage>
      <InnerContainer>
        {membershipOptions.map((option: MembershipOption) => (
          <MembershipCard key={option.id} membership={option} />
        ))}
      </InnerContainer>
    </StyledMembershipsPage>
  );
}

export default MembershipsPage;
