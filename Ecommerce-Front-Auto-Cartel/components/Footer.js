import Link from "next/link";
import styled from "styled-components";
import Center from "../components/Center";

const FooterWrapper = styled.footer`
  background-color: #222;
  color: #aaa;
  padding: 20px 0;
  width: 100%;
  text-align: center;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const FooterLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: #fff;
  }
`;

const ContactUs = styled(Link)`
  color: #aaa;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: #fff;
  }
`;
const FooterText = styled.p`
  font-size: 12px;
  margin-top: 10px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Center>
        <FooterNav>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/products">All Products</FooterLink>
          <FooterLink href="https://chatcartel.autocartel.shop">
            Message Us
          </FooterLink>
          <FooterLink href="/cart">Cart</FooterLink>
          <ContactUs href="/contact">Contact Us</ContactUs>
        </FooterNav>
        <FooterText>
          © {new Date().getFullYear()} Auto-Cartel. All rights reserved.
        </FooterText>
      </Center>
    </FooterWrapper>
  );
}
