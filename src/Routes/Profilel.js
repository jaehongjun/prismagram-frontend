import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import Avatar from "../Components/Avatar";
import Loader from "../Components/Loader";
import { Helmet } from "rl-react-helmet";
const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;

const Wrapper = styled.div`
  min-height: 60vh;
`;
const Header = styled.header``;

const HeaderColumn = styled.div``;

export default withRouter(({ match: { params: { username } } }) => {
  console.log(typeof username);
  const { data, loading } = useQuery(GET_USER, {
    variables: {
      username
    }
  });

  if (loading)
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  else if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        avatar,
        username,
        fullName,
        isFollowing,
        isSelf,
        bio,
        followingCount,
        followersCount,
        postsCount,
        posts
      }
    } = data;

    return (
      <Wrapper>
        <Helmet>
          <title>{username} | Prismagram</title>
        </Helmet>
        <Header>
          <HeaderColumn>
            <Avatar size="lg" url={avatar} />
          </HeaderColumn>
        </Header>
      </Wrapper>
    );
  }
});
