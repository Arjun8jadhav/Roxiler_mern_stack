import  { useState } from 'react';
import axios from 'axios';
import "./home.scss"
export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleClick = async () => {
        setLoading(true);
        setError("");  // Clear previous error
        setSuccess("");
        try {
            console.log("start");
            const res = await axios.get("http://localhost:8800/start");  // Ensure the URL matches your backend endpoint
            console.log(res.data);  // Optionally log the response
            setSuccess("Succesful")
        } catch (err) {
            console.log(err);
            const errorMessage = err.response?.data?.message || "An error occurred";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='home'>
            <h1>MERN STACK Trainee Task</h1>
            <div className="container">
                
                <h2>Load Data from <span>external API</span></h2>
                <button onClick={handleClick} disabled={loading}>
                    {loading ? "Loading..." : "Start"}
                </button>
                {error && <span style={{ color: 'red' }}>{error}</span>}
                {success && <span style={{color: 'green'}}>{success}</span>}
            </div>
        </div>
    );
};
