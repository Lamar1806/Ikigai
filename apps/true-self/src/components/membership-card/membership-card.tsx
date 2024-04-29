import React from 'react';
import styled from '@emotion/styled';
import { FaCheckCircle } from 'react-icons/fa'; // Importing FontAwesome check circle icon from React Icons
import { Link } from 'react-router-dom';
import { formatCentsToDollars } from '../../utils/formatCentsToDollars';

// Define the TypeScript type for the props
interface MembershipOption {
  id: string;
  name: string;
  price: number; // Monthly price in USD
  benefits: string[];
  description: string;
}

interface MembershipCardProps {
  membership: MembershipOption;
}

// Styled components with updated spacing and padding
const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 20px; /* Increased margin */
  width: 340px; /* Adjusted width for added padding */
`;

const CardTitle = styled.h2`
  color: #333;
  font-size: 1.5em;
  margin-bottom: 15px; /* Added space below the title */
  border-bottom: 1px solid grey;
  padding: 16px;
`;

const CardPrice = styled.p`
  color: #666;
  font-size: 1.2em;
  margin-bottom: 20px; /* Added space below the price */
`;

const BenefitsList = styled.ul`
  padding: 0;
  margin-bottom: 20px; /* Added space below the list */
`;

const Benefit = styled.li`
  color: #444;
  display: flex;
  align-items: center; /* Align icon with text */
  font-size: 1em;
  margin-bottom: 10px; /* Space between benefits */
`;

const Description = styled.p`
  color: #777;
  font-size: 0.9em;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const MembershipCard: React.FC<MembershipCardProps> = ({
  membership,
}) => {
  const price = formatCentsToDollars(membership.price);
  return (
    <LinkStyled to={`memberships/${membership.id}`}>
      <Card>
        <CardTitle>{membership.name} Membership</CardTitle>
        <CardPrice>${price} / month</CardPrice>
        <BenefitsList>
          {membership.benefits.map((benefit, index) => (
            <Benefit key={index}>
              <FaCheckCircle style={{ marginRight: '10px', color: 'green' }} />
              {benefit}
            </Benefit>
          ))}
        </BenefitsList>
        <Description>{membership.description}</Description>
      </Card>
    </LinkStyled>
  );
};
