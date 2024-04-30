import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    gender: "Male",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is Required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is Required";
    }
    if (!formData.address) {
      newErrors.address = "Address is Required";
    }
    if (!formData.city) {
      newErrors.city = "City is Required";
    }
    if (!formData.state) {
      newErrors.state = "State is Required";
    }
    if (!formData.country) {
      newErrors.country = "Country is Required";
    }
    if (!formData.zipCode) {
      newErrors.zipCode = "ZipCode is Required";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is Required";
    }
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is Required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  console.log(errors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form Submitted");
    } else {
      console.log("Form Validation Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>
      <div>
        <label htmlFor="email">Email Address: </label>
        <br />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number: </label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <div className="error">{errors.phoneNumber}</div>
        )}
      </div>
      <div>
        <label htmlFor="address">Address: </label>
        <br />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <div className="error">{errors.address}</div>}
      </div>
      <div>
        <label htmlFor="city">City: </label>
        <br />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <div className="error">{errors.city}</div>}
      </div>
      <div>
        <label htmlFor="state">State: </label>
        <br />
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <div className="error">{errors.state}</div>}
      </div>
      <div>
        <label htmlFor="country">Country: </label>
        <br />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        {errors.country && <div className="error">{errors.country}</div>}
      </div>
      <div>
        <label htmlFor="zipCode">Zip Code: </label>
        <br />
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
        {errors.zipCode && <div className="error">{errors.zipCode}</div>}
      </div>
      <div>
        <p>
          Gender:
          <br />
          <span>
            <input
              type="radio"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <label htmlFor="gender">Male</label>
            <input
              type="radio"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <label htmlFor="gender">Female</label>
          </span>
          {errors.gender && <div className="error">{errors.gender}</div>}
        </p>
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth: </label>
        <br />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        {errors.dateOfBirth && (
          <div className="error">{errors.dateOfBirth}</div>
        )}
      </div>
      <div>
        <button type="submit">Submit Form</button>
      </div>
    </form>
  );
};
export default Form;
