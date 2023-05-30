"use client"

import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLogin } from "./redux/reducerSlice/userSlice";

export default function Home() {

  const dispatch = useDispatch();

  const[form, setForm] = useState({})

  const handleForm = (e) =>{

        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
  }


  const handleLogin = (e) => {

    e.preventDefault()
    // console.log(form)
    dispatch(setLogin(form))
  }


  return (
    <>
      <h1> Redux Toolkit Tutorial </h1>
      {/* <p>{JSON.stringify(form)}</p> */}
      <div className="container">
        <div className="col-md-6">
          <form autoComplete="off" onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
                onChange={handleForm} 
                name="userName"            
                
                />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Token Number"
                onChange={handleForm}
                name="token"
              />
            </div>
           
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
