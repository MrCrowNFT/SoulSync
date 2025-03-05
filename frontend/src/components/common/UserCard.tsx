import { FunctionComponent } from "react";
import React, { useState, ChangeEvent } from "react";
import { Camera } from "lucide-react";
import { UserCardProps } from "../../types/User.ts";

const UserCard: FunctionComponent<UserCardProps> = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username);
  const [newDescription, setNewDescription] = useState(user.description);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleEditMode = () => {
    console.log("Entering edit mode");
    setEditMode(!editMode);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    //array-like object containing the files selected by the user,
    // the "?" safely accesses files even if it's null/undefined and gets the first file "[0]"
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      //when finish reading file, set it as preview img
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      //converts it to a base64 URL , when complete, it triggers the onloadend event
      reader.readAsDataURL(file);
    }
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving changes");
    //Here will be the API call

    setEditMode(false);
    setPreviewImage(null);
  };

  return (
    <div className="flex items-center mt-5 bg-white dark:bg-gray-800 rounded-lg ml-10 mr-10 mb-10 p-4  transition-colors duration-300">
      {/* Image Section */}
      <div className="w-1/4 flex-shrink-0 ml-10">
        {editMode ? (
          <div className="relative">
            <img
              src={previewImage || user.photo}
              alt="user profile img"
              className="w-full h-full rounded-full object-cover"
            />
            <label className="absolute bottom-0 right-0 bg-gray-200 dark:bg-gray-700 p-2 rounded-full cursor-pointer transition-colors duration-300">
              <Camera size={16} className="text-gray-800 dark:text-gray-200" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        ) : (
          <img
            src={user.photo}
            alt="user profile img"
            className="w-full h-full rounded-full object-cover"
          />
        )}
      </div>

      {/* Info Section */}
      <div className=" mr-10">
        {editMode ? (
          <form onSubmit={handleEditSubmit}>
            <div className="mb-2">
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
              />
            </div>
            <div className="mb-4">
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 dark:bg-blue-600 font-mono text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="mb-2">
              <h2 className="text-xl font-bold font-mono text-gray-900 dark:text-gray-100">
                {user.username}
              </h2>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 dark:text-gray-300 font-mono">
                {user.description}
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={handleEditMode}
                className="bg-blue-500 dark:bg-blue-600 font-mono text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserCard;
