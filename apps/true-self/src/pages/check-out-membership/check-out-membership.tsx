import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import PaymentForm from '../../components/payment-form/payment-form';
import {
  membershipOptions,
  MembershipOption,
} from '../../api/mocks/membership-options';
import { useEffect } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

/* eslint-disable-next-line */
export interface CheckOutMembershipProps {}

const StyledCheckOutMembership = styled.div`
  /* color: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1`
  margin-bottom: 16px;
`;

export function CheckOutMembership(props: CheckOutMembershipProps) {
  // @ts-ignore
  const { id } = useParams();
  const selectedMembership = membershipOptions.find(
    (membership) => membership.id === id
  );
  const name = selectedMembership?.name;
  const price = formatCurrency(selectedMembership?.price || '');

  useEffect(() => {
    // Log the environment variable
    console.log('API URL:', process.env.NX_SERVER_URL);
  }, []);
  return (
    <StyledCheckOutMembership>
      <Header>
        {name} {price}
      </Header>
      <PaymentForm />
    </StyledCheckOutMembership>
  );
}

export default CheckOutMembership;
