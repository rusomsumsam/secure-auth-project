import { useState } from "react";

const HomePage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">

            <div className="bg-white p-6 rounded shadow w-80">

                <h2 className="text-xl font-bold text-center mb-4">
                    Auth System
                </h2>

                <input
                    className="w-full p-2 mb-3 border rounded"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="w-full p-2 mb-3 border rounded"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-blue-500 text-white p-2 mb-2 rounded">
                    Register
                </button>

                <button className="w-full bg-green-500 text-white p-2 rounded">
                    Login
                </button>

            </div>

        </div>
    );
};

export default HomePage;
