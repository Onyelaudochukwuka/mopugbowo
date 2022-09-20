import  React, { FC, useState } from 'react';

export interface ICommentsFormProps {
}

const CommentsForm: FC<ICommentsFormProps> = (props) => {
  let [error, setError] = useState(false);
  let [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleCommentSubmission = () => {
    
  }
  return (
    
      <div className="bg-primaryLight text-white shadow-lg rounded-lg p-8 pb-12 mb-8 w-3/4 mx-auto">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave A Reply</h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea
            className="p-4 outline-none placeholder-gray-600 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Comment"
            name="comment"
          />

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            className="py-2 px-4 outline-none placeholder-gray-600 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            className="py-2 px-4 outline-none placeholder-gray-600 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Email"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <input type="checkbox" id="storeData" value="true" />
            <label className=" cursor-pointer ml-2" htmlFor="storeData">Save my-email and name for the next time I comment.</label>
          </div>
        </div>
        {error && <p className="text-xs text-red-500">All fields are required.</p>}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:-translate-y-1 inline-block bg-light text-lg text-black font-bold rounded-full px-8 py-3 cursor-pointer"
            disabled={loading && true}
          >
            {
              !loading ?
                "Post Comment"
                : <div className="text-sm flex display-row"><svg
                  className="animate-spin w-6 h-6 fill-white" viewBox="0 0 26.349 26.35" >
                  <g>
                    <g>
                      <circle cx="13.792" cy="3.082" r="3.082" />
                      <circle cx="13.792" cy="24.501" r="1.849" />
                      <circle cx="6.219" cy="6.218" r="2.774" />
                      <circle cx="21.365" cy="21.363" r="1.541" />
                      <circle cx="3.082" cy="13.792" r="2.465" />
                      <circle cx="24.501" cy="13.791" r="1.232" />
                      <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05
			C6.902,18.996,5.537,18.988,4.694,19.84z"/>
                      <circle cx="21.364" cy="6.218" r="0.924" />
                    </g>
                  </g>
                </svg>
                  <span className="my-auto align-middle font-bold">Processing...</span></div>}
          </button>
          {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
        </div>
      </div>
  );
}
export default CommentsForm;