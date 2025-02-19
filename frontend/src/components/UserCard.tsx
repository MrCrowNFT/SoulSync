import { FunctionComponent } from "react";
import React, { useState, ChangeEvent } from "react";
import { Camera } from "lucide-react";
import { div } from "framer-motion/client";

type UserProfile = {
  username: string;
  description: string; //subject to change
  photo: string;
};

const UserCard: FunctionComponent<UserProfile> = (user) => {
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
    <div>
      {/*Image Section */}
      <div>
        {editMode ? (
          <div>
            <img
              src={previewImage || user.photo}
              alt="user profile img"
              className=""
            />
            <label>
              <Camera />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        ) : (
          <img src={user.photo} alt="user profile img" className="" />
        )}
      </div>

      {/*Info Section */}
      <form onSubmit={handleEditSubmit} className="">
        <div className="">
          {editMode ? (
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className=""
            />
          ) : (
            <h2 className="">{user.username}</h2>
          )}
        </div>
        <div className="">
          {editMode ? (
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className=""
            />
          ) : (
            <p className="">{user.description}</p>
          )}
        </div>

        <div className="">
          {editMode ? (
            <button type="submit" className="">
              Save
            </button>
          ) : (
            <button type="button" onClick={handleEditMode} className="">
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default UserCard;
