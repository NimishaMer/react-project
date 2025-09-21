import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const validateForm = () => {
    let newErrors = {};


    if (formData.name.trim() === "") {
      newErrors.name = "Name is required!";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters!";
    }


    if (formData.email.trim() === "") {
      newErrors.email = "Email is required!";
    } else {
      const validateEmail = (email) => {
        if (!email.includes("@")) return false;
        const parts = email.split("@");
        if (parts.length !== 2) return false;
        if (!parts[0]) return false;
        if (!parts[1].includes(".")) return false;
        const domainParts = parts[1].split(".");
        if (domainParts.some(part => part.trim() === "")) return false;
        return true;
      }
      if (!validateEmail(formData.email)) {
        newErrors.email = "Enter a valid email!";
      }

    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required!";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters!";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required!";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (editIndex === -1) {
      setRecords([...records, formData]);
    } else {
      const updated = [...records];
      updated[editIndex] = formData;
      setRecords(updated);
      setEditIndex(-1);
    }

    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  const handleDelete = (index) => {
    const updated = [...records];
    updated.splice(index, 1);
    setRecords(updated);
  };

  const handleEdit = (index) => {
    setFormData(records[index]);
    setEditIndex(index);
  };

  return (
    <div className="app">
      <div className="contact-container">
        <div className="contact-box">
          <h2>Localbox Miner:-</h2>
          <p>We’re open for any suggestion or just to have a chat.</p>
          <p><b>ADDRESS:</b> 198 West 21th Street, Suite 721, New York NY 10016</p>
          <p><b>EMAIL:</b> mernnimishas@gmail.com</p>
          <p><b>PHONE:</b> +1235 2355 98</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="error">{errors.subject}</p>}

            <textarea
              placeholder="Create a message here"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit">
              {editIndex === -1 ? "Send Message" : "Update Message"}
            </button>
          </form>
          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Portfolio</a>
          </div>
        </div>
        <div className="contact-image">
          <img
            src="https://img.freepik.com/free-photo/young-male-programmer-computer-lab_1098-18707.jpg"
            alt="contact"
          />
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>SUBJECT</th>
              <th>MESSAGE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {records.map((i, index) => (
              <tr key={index}>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.subject}</td>
                <td>{i.message}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(index)}>EDIT</button>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
