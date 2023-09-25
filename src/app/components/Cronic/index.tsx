import React, { useEffect, useState } from 'react';
import { Post } from '@prisma/client';
import prisma from '../../../../lib/prisma';

const CronicList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        if (prisma == null) {
          console.log('Null');
          return;
        }
        const fetchedPosts = await prisma.post.findMany();
        console.log(fetchedPosts);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, []);

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
