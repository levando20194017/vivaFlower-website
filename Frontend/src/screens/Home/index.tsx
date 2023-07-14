import { useState, useEffect } from "react"
import { AxiosResponse } from 'axios';
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
interface User {
  id?: number,
  fullName: string,
  email: string,
  address: string,
  phoneNumber: string,
  gender: string
}
interface ResponseData {
  errCode: number;
  message: string;
  users: User[];
}

export const Home = () => {
  const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<User>({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    gender: ""
  })
  useEffect(() => {
    const fetchData = async () => {
      const response: AxiosResponse<ResponseData> = await getAllUsers('ALL');
      console.log(response);

      if (response && response.data.errCode === 0) {
        setUsers(response.data.users);
      }
    };

    fetchData();
  }, [user]);
  return (
    <div>
      <h2>Welcome to React 101!</h2>
      {users.map((user) => {
        return (
          <div className="mt-5 modal-user" key={user.id}>
            <div className="d-flex row">
              <div className="col-2">UserId</div>
              <div className="col-10">{user.id}</div>
            </div>
            <hr />
            <div className="d-flex row">
              <div className="col-2">Full Name</div>
              <div className="col-10">{user.fullName}</div>
            </div>
            <hr />
            <div className="d-flex row">
              <div className="col-2">Address</div>
              <div className="col-10">{user.address}</div>
            </div>
            <hr />
            <div className="d-flex row">
              <div className="col-2">Email</div>
              <div className="col-10">{user.email}</div>
            </div>
            <hr />
            <div className="d-flex row">
              <div className="col-2">Phone</div>
              <div className="col-10">{user.phoneNumber}</div>
            </div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}