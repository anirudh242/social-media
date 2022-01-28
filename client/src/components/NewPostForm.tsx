const NewPostForm: React.FC = () => {
  return (
    <div className="border-none rounded-lg w-fit m-auto border-gray-400 grid h-56 items-center">
      <form className="w-96 content-center p2">
        <div className="floating-input mb-5 relative">
          <input
            type="text"
            placeholder="title"
            name="title"
            id="title"
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
            className="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
            placeholder="Description"
            autoComplete="off"
          />
          <label
            htmlFor="description"
            className="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
          >
            Description
          </label>
        </div>
        <h2>Enter your markdown content below: </h2>
        <div className="floating-input mb-5 relative">
          <textarea
            name="content"
            id="content"
            className="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
          />
        </div>

        <button type="submit" className="btn w-full ">
          Create post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
