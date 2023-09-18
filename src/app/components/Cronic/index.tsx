import React, { useState } from 'react';
import { Post } from '@prisma/client';

const CronicList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
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
};

export default CronicList;
