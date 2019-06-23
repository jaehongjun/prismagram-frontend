import ProfilePresenter from "./ProfilePresenter";
import { GET_USER } from "./ProfileQueries";
import { LOG_OUT } from "../../Routes/Auth/AuthQueries";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import React from "react";

export default withRouter(({ match: { params: { username } } }) => {
  console.log(typeof username);
  const { data, loading } = useQuery(GET_USER, {
    variables: {
      username
    }
  });
  return <ProfilePresenter logOut={LOG_OUT} loading={loading} data={data} />;
});
