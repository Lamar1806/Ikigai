import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import CheckOutForm from '../../components/check-out-form/check-out-form';
import {
  membershipOptions,
  MembershipOption,
} from '../../api/mocks/membership-options';

/* eslint-disable-next-line */
export interface CheckOutMembershipProps {}

const StyledCheckOutMembership = styled.div`
  color: pink;
`;

export function CheckOutMembership(props: CheckOutMembershipProps) {
  // @ts-ignore
  const { id } = useParams();
  const selectedMembership = membershipOptions.find(
    (membership) => membership.id === id
  );
  const test = process.env.REACT_APP_projectId;
  console.log('test', test);
  return (
    <StyledCheckOutMembership>
      <h1>Welcome to CheckOutMembership {id}</h1>
      {test}
      {/* <CheckOutForm /> */}
    </StyledCheckOutMembership>
  );
}

export default CheckOutMembership;