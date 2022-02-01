import { useMutation } from '@apollo/client';
import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { userInterface } from '../interface';
import { createPost } from '../mutations';
import { Link } from 'react-router-dom';

const NewPostForm: React.FC = () => {
  const limit = 280;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const [cookies] = useCookies(['token']);

  const nav = useNavigate();

  const [createPostMutation] = useMutation(createPost);

  let userToken: userInterface = jwtDecode(cookies.token);
  let userId = userToken.userId;

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    createPostMutation({
      variables: {
        title,
        content,
        description,
        userId,
      },
    });
    nav('/home');
    if (window.location.pathname === '/home') {
      window.location.reload();
    }
  };

  return (
    <div>
      <div className="border-none w-fit m-auto grid h-56 items-center">
        <form
          onSubmit={(e) => {
            submitForm(e);
          }}
          className="w-96 content-center p2"
        >
          <div className="floating-input mb-5 relative">
            <input
              type="text"
              placeholder="title"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              maxLength={40}
              className="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
              autoComplete="off"
            />{' '}
            <label
              htmlFor="title"
              className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
            >
              Title
            </label>
          </div>

          <div className="floating-input mb-5 relative">
            <input
              type="text"
              id="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
              placeholder="Description"
              autoComplete="off"
              maxLength={50}
            />
            <label
              htmlFor="description"
              className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
            >
              Description
            </label>
          </div>

          <h2>Enter your content below: </h2>
          <div className="floating-input mb-5 relative">
            <textarea
              name="content"
              id="content"
              value={content}
              className="mt-1 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm p-3 h-[240px] w-full"
              onChange={(e) => setContent(e.target.value)}
              maxLength={280}
            />
            <p className="text-left">
              <b>Words left:</b> {limit - content.length}
            </p>
          </div>

          <button type="submit" className="btn w-full ">
            Create post
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPostForm;
