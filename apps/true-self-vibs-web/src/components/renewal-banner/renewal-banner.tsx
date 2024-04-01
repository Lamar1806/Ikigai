import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface RenewalBannerProps {}

const StyledRenewalBanner = styled.div`
  color: pink;
`;

export function RenewalBanner(props: RenewalBannerProps) {
  return (
    <StyledRenewalBanner>
      <h1>Welcome to RenewalBanner!</h1>
    </StyledRenewalBanner>
  );
}

export default RenewalBanner;
