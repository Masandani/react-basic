import React, { useState, useEffect, useCallback } from 'react';
import './Blog.css';
import Button from '../Button/Button';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCounts, setPagecounts] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const loadPosts = async () => {
    setLoading(true);
    const responsePosts = await fetch(
      'https://run.mocky.io/v3/d9e85046-18e6-45f5-8068-ae4222f02aec',
    );
    const postsApi = await responsePosts.json();
    await setPosts(postsApi);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);
  
  const calculatePageCount = () => {
    if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }
    return parseInt(posts.length / 3);
  };

  const handleClickOnPages = useCallback((pageNumber) => {
    setActivePageNumber(pageNumber);
  }, []);

  useEffect(() => {
    setPagecounts(calculatePageCount());
  }, [posts]);

  return (
    <div className="blog">
      {loading && <div>loading</div>}
      {posts.lenght === 0 && <div>No Post</div>}
      {posts.length > 0 && (
        <ul>
          {posts.slice(3 * activePageNumber, 3 * (activePageNumber + 1)).map((post) => (
            <li className="blogItem" key={`post-${post.id}`}>
              <h3 className="list">{post.title}</h3>
              <p className="list">{post.content}</p>
            </li>
          ))}
        </ul>
      )}
      ;
      <div>

        <ul className="pagination">
          {new Array(pageCounts).fill(0).map((item, index) => ( 
            <li className={activePageNumber === index + 1 ? 'active' : ''}>
              <Button handleClick={() => handleClickOnPages(index + 1)}>{index + 1}</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
