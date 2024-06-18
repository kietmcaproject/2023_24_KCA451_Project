import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useSelector } from 'react-redux'

export default function ResultPage() {
    const data = useSelector((state) => state.Data.data)
    const user = useSelector((state) => state.Data.user)
    console.log(data)
  return (
    <div>
        <Header />
      <div>
            

            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Result</h1>
                <br />
                <h3>Hii {user && user.name}</h3>
                <h4>  {user && user.email}  </h4>
                <p>Here is the result according to your interest and provided Information.</p>
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>Some Important Point</th>
                            <th>Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Courses</b></td>
                            <td > {data && data.course}</td>
                        </tr>
                        <tr>
                            <td><b>Entrance Exams</b></td>
                            <td > {data && data.entrance}</td>
                        </tr>
                        <tr>
                            <td><b>Top Colleges</b></td>
                            <td > {data && data.college}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container">
                <button className="print-button" onClick={() => window.print()}>Print</button>
            </div>

            

            
        </div>
        <Footer />
    </div>
  )
}
