import React from 'react';

interface Post {
  id: number;
  title: string;
}

interface CronicListProps {
  posts: Post[] | undefined; // Make sure to allow for undefined
}

export default function CronicList({
  posts,
}: CronicListProps): React.ReactElement {
  // Check if 'posts' is undefined or null before mapping over it
  if (!posts) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
