import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import CheckOutForm from '../../components/check-out-form/check-out-form';
import {
  membershipOptions,
  MembershipOption,
} from '../../api/mocks/membership-options';
import { useEffect } from 'react';

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
  useEffect(() => {
    // Log the environment variable
    console.log('API URL:', process.env.NX_SERVER_URL);
  }, []);
  return (
    <StyledCheckOutMembership>
      <h1>Welcome to CheckOutMembership {id}</h1>

      {/* <CheckOutForm /> */}
    </StyledCheckOutMembership>
  );
}

export default CheckOutMembership;
