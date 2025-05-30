import React, { useState, useEffect } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./loginAnimation/login.css"; // Put your provided CSS here
import { animateLogin } from "./loginAnimation/animate";
import { getFirestore } from 'firebase/firestore';

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = doc(db, "users", authUser.uid);
        const userSnap = await getDoc(userRef);

        let storeId;

        if (userSnap.exists()) {
          // User already has a store, retrieve store ID
          storeId = userSnap.data().store_id;
        } else {
          // 🛠️ Assign a new store (either create dynamically or assign from a pool)
          storeId = await assignOrCreateStore(authUser.email);

          // Save user data in Firestore
          await setDoc(userRef, {
            email: authUser.email,
            store_id: storeId,
            role: "seller",
          });
        }

        setUser(authUser);
        navigate("/nav"); // Redirect after successful login
      }
    });
    return () => unsubscribe();
  }, [navigate, db]);

  useEffect(() => {
    const cleanup = animateLogin();
    return cleanup;
  }, []);
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/main");
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/main");
    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign out Error:", error.message);
    }
  };

  return (
    <div className={`body ${isRegister ? "register-bg" : "login-bg"}`}>
      <div className="veen">
        <div className="login-btn splits">
          <p>Already a user?</p>
          <button className={!isRegister ? "active" : ""} onClick={() => setIsRegister(false)}>Login</button>
        </div>
        <div className="rgstr-btn splits">
          <p>Don't have an account?</p>
          <button className={isRegister ? "active" : ""} onClick={() => setIsRegister(true)}>Register</button>
        </div>
        <div className={`wrapper ${isRegister ? "move" : ""}`}>
          {!user ? (
            <>
              <form id="login" onSubmit={handleLogin}>
                <h3>Login</h3>
                <div className="mail">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <label>Mail or Username</label>
                </div>
                <div className="passwd">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <label>Password</label>
                </div>
                <div className="submit">
                  <button className="dark" type="submit">Login</button>
                </div>
              </form>

              <form id="register" onSubmit={handleSignUp}>
                <h3>Register</h3>
                <div className="mail">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <label>Mail</label>
                </div>
                <div className="passwd">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <label>Password</label>
                </div>
                <div className="submit">
                  <button className="dark" type="submit">Register</button>
                </div>
              </form>
            </>
          ) : (
            <div style={{ padding: "40px", textAlign: "center" }}>
              <h3>Welcome, {user.email}!</h3>
              <button onClick={handleSignOut} className="dark" style={{ marginTop: "20px" }}>Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 🔹 Function to Assign or Create a Printful Store
const assignOrCreateStore = async (userEmail) => {
  try {
    // 🔹 OPTION 1: Create a new store dynamically (If Printful supports it)
    const response = await fetch("https://api.printful.com/v1/stores", {
      method: "POST",
      headers: {
        "Authorization": `Bearer YOUR_PRINTFUL_API_KEY`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: `${userEmail}'s Store` }),
    });

    const data = await response.json();
    return data.result.id; // Return newly created store ID

  } catch (error) {
    console.error("Error creating or assigning store:", error);
    return null;
  }
};

export default SignIn;
