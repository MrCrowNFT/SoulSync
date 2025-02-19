import { FunctionComponent } from "react";
import React, { useState, ChangeEvent } from "react";
import { Camera } from "lucide-react";
import { UserCardProps } from "../types/User.ts";

const UserCard: FunctionComponent<UserCardProps> = ({user}) => {
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username);
  const [newDescription, setNewDescription] = useState(user.description);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Here will be the API call

    setEditMode(!editMode);
    setPreviewImage(null);
  };

  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 max-w-3xl mx-auto">
      {/*Image Section */}
      <div className="w-1/4 flex-shrink-0">
        {editMode ? (
          <div className="relative">
            <img
              src={previewImage || user.photo}
              alt="user profile img"
              className="w-full h-full rounded-full object-cove"
            />
            <label className="absolute bottom-0 right-0 bg-gray-200 p-2 rounded-full cursor-pointer">
              <Camera size={16} />
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

      {/*Info Section */}
      <form onSubmit={handleEditSubmit} className="w-3/4 ml-4">
        <div className="mb-2">
          {editMode ? (
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          ) : (
            <h2 className="text-xl font-bold">{user.username}</h2>
          )}
        </div>
        <div className="mb-4">
          {editMode ? (
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          ) : (
            <p className="text-gray-700">{user.description}</p>
          )}
        </div>

        <div className="">
          {editMode ? (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              onClick={handleEditMode}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default UserCard;
