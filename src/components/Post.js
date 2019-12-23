import React from "react";
import { useSubscription } from "@apollo/react-hooks";
import { addedPost, test } from "../graphql/postSchema";

const tests = [];

function Post() {
  const { data, error, loading } = useSubscription(test);

  if (loading) return null;
  if (error) return <p>Error :(</p>;

  const _test = data.test || "0";

  if (_test) {
    tests.push(_test);
    console.log(_test);
    return (
      <div>
        <p>New test: </p>
        <h2>{_test.id}</h2>
        <h2>{_test.author}</h2>
        <h2>{_test.comment}</h2>
      </div>
    );
  }
}

export default Post;
