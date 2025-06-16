import { useState } from 'react'

function State() {
    const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    setFormData((prev) => {
      return {...prev, [name]: value}
    })
  }
  return (
        <form >
        <div className="border border-white w-96  bg-[#333446] text-white flex justify-center rounded">
          <div className="flex flex-col gap-2 py-2 px-4 w-full">
          <h1 className="flex justify-center text-4xl">Register</h1>
            <label htmlFor="">Full name</label>
            <input
              type="text"
              name="fullname"
              className="p-1 border rounded "
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleFormData}
            />
            <label htmlFor="">User name</label>
            <input
              type="text"
              name="username"
              className="p-1 border rounded "
              placeholder="User name"
              value={formData.username}
              onChange={handleFormData}
            />
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              className="p-1 border rounded "
              placeholder="Email"
              value={formData.email}
              onChange={handleFormData}
            />
            <label htmlFor="">Password</label>
            <input
              type="text"
              name="password"
              className="p-1 border rounded "
              placeholder="Password"
              value={formData.password}
              onChange={handleFormData}
            />
            <button className="bg-[#7F8CAA] p-2 rounded cursor-pointer">
              Register
            </button>
            <p>{`My name is ${formData.fullname} and my email is ${formData.email}`}</p>
          </div>
        </div>
        </form>
    
  )
}

export default State