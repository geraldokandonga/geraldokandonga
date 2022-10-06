import styled from "styled-components";

export const BlogsContainer = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 80px;
  margin-top: 100px;
  z-index: 100;
`;

export const BlogContainer = styled.article`
  display: block;
  padding: 12px 8px;
`;

export const BlogTitle = styled.h2`
  color: #1a202c;
  font-size: 31px;
  font-weight: 700;
  line-height: 1.6;

  & a:hover {
    color: #4a5568;
  }
`;

export const BlogBody = styled.div``;

export const BlogDate = styled.div`
  font-size: 16px;
  color: #4a5568;
  font-weight: 500;
`;

export const BlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;
