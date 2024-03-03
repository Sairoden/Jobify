// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import styled from "styled-components";
import { toast } from "react-toastify";

// COMPONENTS
import { FormRow, Loader, SubmitButton } from "../components";

// CONTEXTS
import { useDashboardContext } from "../contexts";

// HOOKS
import { useUpdateUser } from "../hooks";

function Profile() {
  const { user, userPending } = useDashboardContext();
  const { updateUser, isPending: updateUserPending } = useUpdateUser();

  const { register, handleSubmit } = useForm();

  if (userPending) return <Loader />;

  const { name, lastName, email, location } = user;

  const handleUpdateUser = data => {
    if (data.avatar[0] && data.avatar[0].size > 500000)
      toast.error("Image size too large");

    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);
    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    formData.append("location", data.location);
    formData.append("email", data.email);

    updateUser(formData);
  };

  return (
    <StyledProfile>
      <form
        method="post"
        className="form"
        encType="multipart/form-data"
        onSubmit={handleSubmit(handleUpdateUser)}
      >
        <h4 className="form-title">Profile</h4>

        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file (max 0.5 MB)
            </label>

            <input
              type="file"
              className="form-input"
              accept="image/*"
              {...register("avatar")}
              disabled={updateUserPending}
            />
          </div>

          {/* FILE INPUT */}
          <FormRow
            type="text"
            labelText="First Name"
            defaultValue={name}
            register={register}
            id="name"
            disabled={updateUserPending}
          />

          <FormRow
            type="text"
            labelText="Last Name"
            defaultValue={lastName}
            register={register}
            id="lastName"
            disabled={updateUserPending}
          />

          <FormRow
            type="text"
            labelText="Location"
            defaultValue={location}
            register={register}
            id="location"
            disabled={updateUserPending}
          />

          <FormRow
            type="email"
            labelText="Email"
            defaultValue={email}
            register={register}
            id="email"
            disabled={updateUserPending}
          />

          <SubmitButton formBtn isPending={updateUserPending} />
        </div>
      </form>
    </StyledProfile>
  );
}

const StyledProfile = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;

  .form-title {
    margin-bottom: 2rem;
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-row {
    margin-bottom: 0;
  }

  .form-center {
    display: grid;
    row-gap: 1rem;
  }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }

  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Profile;
