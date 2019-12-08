import React from 'react';
import styled from 'styled-components';
import BodyWrapper from '../components/BodyWrapper';
import { authUser } from '../actions';

const Wrapper = styled.div`
  width: 600px;
  max-width: 97%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TermsPage = () => (
  <BodyWrapper>
    <Wrapper>
      <h3>s.dont.ltd Terms of Service</h3>
      <p>
        By accessing the website at <a href="https://s.dont.ltd">https://s.dont.ltd</a>, you are agreeing
        to be bound by these terms of service, all applicable laws and regulations, and agree that
        you are responsible for compliance with any applicable local laws. If you do not agree with
        any of these terms, you are prohibited from using or accessing this site. The materials
        contained in this website are protected by applicable copyright and trademark law.
      </p>
      <p>
        In no event shall s.dont.ltd or its suppliers be liable for any damages (including, without
        limitation, damages for loss of data or profit, or due to business interruption) arising out
        of the use or inability to use the materials on {"s.dont.ltd's"} website, even if s.dont.ltd or a s.dont.ltd
        authorized representative has been notified orally or in writing of the possibility of such
        damage. Because some jurisdictions do not allow limitations on implied warranties, or
        limitations of liability for consequential or incidental damages, these limitations may not
        apply to you.
      </p>
      <p>
        The materials appearing on s.dont.ltd website could include technical, typographical, or
        photographic errors. s.dont.ltd does not warrant that any of the materials on its website are
        accurate, complete or current. s.dont.ltd may make changes to the materials contained on its
        website at any time without notice. However s.dont.ltd does not make any commitment to update the
        materials.
      </p>
      <p>
        s.dont.ltd has not reviewed all of the sites linked to its website and is not responsible for the
        contents of any such linked site. The inclusion of any link does not imply endorsement by
        s.dont.ltd of the site. Use of any such linked website is at the {"user's"} own risk.
      </p>
      <p>
        s.dont.ltd may revise these terms of service for its website at any time without notice. By using
        this website you are agreeing to be bound by the then current version of these terms of
        service.
      </p>
    </Wrapper>
  </BodyWrapper>
);

TermsPage.getInitialProps = ({ req, reduxStore }) => {
  const token = req && req.cookies && req.cookies.token;
  if (token && reduxStore) reduxStore.dispatch(authUser(token));
  return {};
};

export default TermsPage;
