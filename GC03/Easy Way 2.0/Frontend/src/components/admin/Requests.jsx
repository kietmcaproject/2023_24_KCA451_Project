import style from "./requests.module.scss";
import Sidebar from "../admin_sidebar/Sidebar";
import Navbar from "../admin_navbar/Navbar";
import { baseUrl } from "../shared/baseUrl";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { Divider } from "../divider/Divider";

export const Requests = () => {
  const [data, setdata] = useState();

  const getRequestsData = async () => {
    const res = await fetch(baseUrl + "/api/admin/requests");

    if (res.status === 200) {
      const data = await res.json();
      setTimeout(() => setdata(data), 1000);
    }
  };
  useEffect(() => {
    getRequestsData();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Divider>Working Requests</Divider>
        <div className={style.table_cont}>
          <table>
            <thead className={style.tabHead}>
              <tr>
                <th>SN.</th>
                <th>Date</th>
                <th>User Name</th>
                <th>Worker Name</th>
                <th>User Phone</th>
                <th>Worker Phone</th>
                <th>Work</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className={style.tabBody}>
              {data ? (
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>
                        {new Date(item.createdAt).toISOString().split("T")[0]}
                      </td>
                      <td>{item.from?.name}</td>
                      <td>{item.to?.name}</td>
                      <td>{item.from?.phone}</td>
                      <td>{item.to?.phone}</td>
                      <td>{item.to?.occupation}</td>
                      <td>
                        <span
                          className={
                            item.status == "Pending"
                              ? style.pending
                              : item.status == "Accepted"
                              ? style.accepted
                              : style.rejected
                          }
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8">
                    <LinearProgress />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Requests;
