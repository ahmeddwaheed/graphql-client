import { gql } from "apollo-boost";

const addedPost = gql`
  subscription postAdded {
    postAdded {
      author
      comment
    }
  }
`;

const queryPosts = gql`
  query posts {
    posts {
      author
      comment
    }
  }
`;

const test = gql`
  subscription test {
    test {
      author
      comment
      id
    }
  }
`;

export { addedPost, queryPosts, test };
