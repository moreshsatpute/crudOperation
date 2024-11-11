import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailsTask = () => {
    const { empid } = useParams();
    const [empdata, empdatachange] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/employee/${empid}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch employee data");
                return res.json();
            })
            .then((resp) => {
                empdatachange(resp);
                setError(null); // Clear any previous errors
            })
            .catch((err) => {
                console.error(err.message);
                setError(err.message);
            });
    }, [empid]);

    return (
        <div className="container">
            <div className="card row" style={{ textAlign: "left" }}>
                <div className="card-title">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body">
                    {error ? (
                        <p className="text-danger">Error: {error}</p>
                    ) : empdata ? (
                        <div>
                            <h2>The Employee name is: <b>{empdata.name}</b> ({empdata.id})</h2>
                            <h3>Contact Details</h3>
                            <h5>Email: {empdata.email}</h5>
                            <h5>Phone: {empdata.phone}</h5>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    ) : (
                        <p>Loading employee data...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DetailsTask;
