import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";

function App() {
  let [task, setTask] = useState({});
  let [taskList, setTaskList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [index, setIndex] = useState(-1);
  let [person, setPerson] = useState(["Manager", "Team Leader", "Employee"]);
  let [member, setMember] = useState([]);

  // page load hone par
  useEffect(() => {
    setTimeout(() => {
      getLocalStoragedata();
    }, 1000);
  }, []);

  // localStorage se data fetch
  let getLocalStoragedata = () => {
    let data = JSON.parse(localStorage.getItem("taskData"));
    if (data != null) {
      setTaskList(data);
      setLoading(true);
    } else {
      setTaskList([]);
    }
  };

  // input change handle
  let getInputData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newmember = [...member];

    if (name === "member") {
      if (newmember.includes(value)) {
        let pos = newmember.findIndex((v) => v === value);
        if (pos !== -1) {
          newmember.splice(pos, 1);
        }
      } else {
        newmember.push(value);
      }
      setMember(newmember);
      value = newmember;
    }

    setTask({ ...task, [name]: value });
  };

  // submit form
  let submitData = (e) => {
    e.preventDefault();
    let newList = [...taskList];

    if (index !== -1) {
      newList[index] = task;
      toast.success("Record updated successfully", {
        position: "bottom-right",
      });
    } else {
      task.id = Math.round(Math.random() * 100000);
      newList.push(task);
      toast.success("Record added successfully", {
        position: "bottom-right",
      });
    }

    setTaskList(newList);
    localStorage.setItem("taskData", JSON.stringify(newList));
    setTask({});
    setLoading(true);
    setIndex(-1);
    setMember([]);
  };

  // delete record
  let removeData = (id) => {
    let newList = [...taskList];
    let pos = newList.findIndex((v) => v.id === id);
    if (pos !== -1) {
      newList.splice(pos, 1);
      localStorage.setItem("taskData", JSON.stringify(newList));
      setTaskList(newList);
      toast.success("Record deleted successfully", {
        position: "bottom-right",
      });
    }
  };

  // update record
  let updateData = (id) => {
    let list = [...taskList];
    let pos = list.findIndex((v) => v.id === id);
    if (pos !== -1) {
      setTask(list[pos]);
      setMember(list[pos].member);
      setIndex(pos);
    } else {
      setIndex(-1);
    }
  };

  //  React Icons Star Render
  const renderStars = (count) => {
    let stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <FaStar
          key={i}
          style={{
            color: "#FFD700",
            fontSize: "22px",
            marginRight: "3px",
          }}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <h1 align="center">Review Card </h1>
      <form method="post" onSubmit={submitData}>
        <table border={1} align="center">
          <tbody>
            <tr>
              <td>Enter Your Name: </td>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={getInputData}
                  value={task.name ? task.name : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Enter Your Email: </td>
              <td>
                <input
                  type="email"
                  name="value"
                  onChange={getInputData}
                  value={task.value ? task.value : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Image URL:</td>
              <td>
                <input
                  type="text"
                  name="img"
                  onChange={getInputData}
                  value={task.img ? task.img : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <textarea
                  name="description"
                  onChange={getInputData}
                  value={task.description ? task.description : ""}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>Rating:</td>
              <td>
                <select
                  name="rating"
                  value={task.rating ? task.rating : ""}
                  onChange={getInputData}
                >
                  <option value="">--Select Rating--</option>
                  <option value="1">⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Select Priority:</td>
              <td>
                <input
                  type="radio"
                  name="priority"
                  value="urgent"
                  onChange={getInputData}
                  checked={task.priority === "urgent"}
                />
                Urgent
                <input
                  type="radio"
                  name="priority"
                  value="overdue"
                  onChange={getInputData}
                  checked={task.priority === "overdue"}
                />
                Overdue
              </td>
            </tr>

            <tr>
              <td>Completed by Person:</td>
              <td>
                <select
                  name="person"
                  value={task.person || ""}
                  onChange={getInputData}
                >
                  <option value="">---select person---</option>
                  {person.map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                {index !== -1 ? (
                  <input type="submit" value="Update" />
                ) : (
                  <input type="submit" value="Add" />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <br />
      <br />


      <div className="card-container">
        {!loading ? (
          <p>Loading...</p>
        ) : taskList.length === 0 ? (
          <p>No Records Found</p>
        ) : (
          taskList.map((v) => (
            <div className="review-card" key={v.id}>
              <img src={v.img} alt={v.name} className="profile-img" />


              <div className="stars">{renderStars(v.rating)}</div>

              <p className="review-text">{v.description}</p>
              <h3>{v.value}</h3>
              <h3>{v.name}</h3>
              <span className="role">{v.person}</span>

              <p className="priority">Priority: {v.priority}</p>
              <p className="members">
                Members: {v.member ? v.member.toString() : ""}
              </p>

              <div className="card-actions">
                <button onClick={() => removeData(v.id)}>Delete</button>
                <button onClick={() => updateData(v.id)}>Update</button>
              </div>
            </div>
          ))
        )}
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
