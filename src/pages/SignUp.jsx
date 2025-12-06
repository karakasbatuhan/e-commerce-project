import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
  const [roles, setRoles] = useState([]); 
  const [selectedRoleId, setSelectedRoleId] = useState('3'); 

  const { register, handleSubmit, reset, watch, formState: { errors, isValid, isSubmitting } } = useForm({
      mode: 'onChange',
    
      defaultValues: {
        role_id: '3',
      }}); 

  function handleRoleChange(event) {
    setSelectedRoleId(event.target.value);
    console.log("Seçilen Rol ID'si:", event.target.value);
    const newValue= event.target.value;
    const rol = roles.find(role => role.id === parseInt(newValue));
    if(rol){
      console.log("Seçilen Rol Kodu:", rol.code);
    }
  }

  const capitalizeFirstLetter = (string) => {
    if (!string || typeof string !== 'string' || string.length === 0) {
    }

    const firstLetter = string.charAt(0).toUpperCase();
    const restOfString = string.slice(1).toLowerCase();

    return firstLetter + restOfString;
};

  useEffect(() => {
    axios.get("https://workintech-fe-ecommerce.onrender.com/roles") 
      .then((response) => {
        const data = response.data;
        console.log("API'dan Gelen Tüm Veri:", data);
        
        if (Array.isArray(data) && data.length > 0) {
          setRoles(data);
          const customerRole = data.find(role => role.code === 'customer');
          console.log("Seçilen Rol:",customerRole);
          if (customerRole) {
            setSelectedRoleId(customerRole.id);
          }
        }
      })
      .catch((error) => {
        console.error("Roller çekilirken hata oluştu:", error);
      })
  }, []); 

  const submitFn = async (formData) => {    
    console.log("Base Data:", formData); 
    const formDataCopy = { ...formData };
    delete formDataCopy.confirmPassword;
    if(formDataCopy.role_id !== '2' ){
      delete formDataCopy.store;
    }
    console.log("Data to be sent:", formDataCopy);

    try {
      const url = "https://workintech-fe-ecommerce.onrender.com/signup";
      const response = await axios.post(url, formDataCopy);
      console.log("Successful Response:", response.data);
      alert("You need to click link in email to activate your account!");
    }

    catch (error) {
      console.error("Error Responsse:", error.response);
      if(error.response){
        console.log("Error Response Data:", error.response.data);
        alert(`Error: ${error.response.data.message}`);
      }
      reset();
    }
  };

  return (
    <div className={`flex w-[100%] h-[1069px] justify-center items-center bg-gray-200 font-montserrat`}>
      <div className={`flex w-[400px] h-[${selectedRoleId === '2' ? '930px' : '600px'}] rounded-2xl justify-center items-start pt-10 bg-white shadow-xl/40`}>
        <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit(submitFn)}>
          <h3 className="font-bold text-[25px]">SIGN UP</h3>
          <div className="flex flex-col gap-2 justify-center items-center">            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-semibold text-[18px]">Name</label>
              <input type="text" id="name" 
                        {...register("name", {
                          required: {value: true, message: "Name is required"}, 
                          minLength: {value:3, message: "Name must be at least 3 characters"}})} 
                          placeholder="Name" 
                          className="border-1 border-black rounded-md w-[350px] p-2"/>
                          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              <label htmlFor="email" className="font-semibold text-[18px]">E-mail</label>
              <input type="email" id="email" 
                        {...register("email",
                          {required: {value: true, message: "E-mail is required"},
                          pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Please enter a valid email address"}})} 
                          placeholder="E-mail" 
                          className="border-1 border-black rounded-md w-[350px] p-2"/>
                          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              <label htmlFor="password" type={passwordVisible ? "text" : "password"} className="font-semibold text-[18px]">Password</label>
              <div className="flex flex-row items-center border-black rounded-md border-1 w-[350px]">
                <input type={passwordVisible ? "text" : "password"} id="password" 
                        {...register("password", {
                          required: {value: true, message: "Password is required"}, 
                          minLength: {value:8, message: "Password must be at least 8 characters"},
                          validate: {
                                      hasLowerCase: (value) => 
                                        /[a-z]/.test(value) || "Password must contain at least 1 lowercase letter.",
                                      hasUpperCase: (value) => 
                                        /[A-Z]/.test(value) || "Password must contain at least 1 uppercase letter.",
                                      hasNumber: (value) => 
                                        /\d/.test(value) || "Password must contain at least 1 number.",
                                      hasSpecialChar: (value) => 
                                        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(value) || "Password must contain at least 1 special character."}})} 
                        placeholder="Password" 
                        className="w-[285px] p-2 focus:outline-none"/>
                <div className="pl-8" onClick={() => setPasswordVisible(!passwordVisible)}>
                  {passwordVisible ? <BiHide size={20} className="text-gray-400"/> : <BiShow size={20} className="text-gray-400"/>}
                </div>
              </div>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              <label htmlFor="confirm-password" className="font-semibold text-[18px]">Confirm Password </label>
              <div className="flex flex-row items-center border-black rounded-md border-1 w-[350px]">
                <input type={passwordConfirmVisible ? "text" : "password"} id="confirm-password" 
                        {...register("confirmPassword", {
                          required: {value: true, message: "Confirm Password is required"}, 
                          validate: (value) => {
                            if (value !== watch('password')) {
                              return "Passwords do not match";
                            }}})}
                        placeholder="Confirm Password" 
                        className="w-[285px] p-2 focus:outline-none"/>                        
                <div className="pl-8" onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}>
                  {passwordConfirmVisible ? <BiHide size={20} className="text-gray-400"/> : <BiShow size={20} className="text-gray-400"/>}
                </div>
              </div>
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
              <label htmlFor="role" className="font-semibold text-[18px]">Role</label>
              <select name="role_id" className="border-2 border-black rounded-md p-2" {...register("role_id")} onChange={handleRoleChange} value={selectedRoleId}>     
                  {roles.map((roleData) => (
                  <option key={roleData.id} value={roleData.id}>
                      {capitalizeFirstLetter(roleData.code)}                       
                  </option>
                  ))}            
              </select>
            </div>
            {selectedRoleId === '2' && (
                <div className={"flex flex-col gap-1.5"}>
                  <label htmlFor="store-name" className="font-semibold text-[18px]">Store Name</label>
                  <input type="text" id="store-name"                        
                          {...register("store.name", {
                            required: {value: true, message: "Store name is required"}, 
                            minLength: {value:3, message: "Store name must be at least 3 characters"}})}
                          placeholder="Store Name" 
                          className="border-1 border-black rounded-md w-[350px] p-2"/>
                          {errors.store?.name && (<p className="text-red-500 text-sm">{errors.store.name.message}</p>
    )}
                  <label htmlFor="store-phone" className="font-semibold text-[18px]">Store Phone</label>
                  <input type="text" id="store-phone" 
                          {...register("store.phone", {
                            required: {value: true, message: "Store phone is required"}, 
                            pattern: {value: /^5\d{9}$/, message: "Please enter a valid Turkish phone number format"}})}
                          placeholder="5xx xxx xx xx" 
                          className="border-1 border-black rounded-md w-[350px] p-2"/>
                          {errors.store?.phone && (<p className="text-red-500 text-sm">{errors.store.phone.message}</p>)}
                  <label htmlFor="store-taxid" className="font-semibold text-[18px]">Store Tax ID</label>
                  <input type="text" id="store-tax_id" 
                          {...register("store.tax_no", {
                            required: {value: true, message: "Store Tax ID is required"}, 
                            pattern: {value: /^T\d{4}V\d{6}$/, message: "Please enter a valid Tax ID format"}})}
                          placeholder="TXXXXVXXXXXX" 
                          className="border-1 border-black rounded-md w-[350px] p-2"/>
                          {errors.store?.tax_no && (<p className="text-red-500 text-sm">{errors.store.tax_no.message}</p>)}
                  <label htmlFor="store-bank_account" className="font-semibold text-[18px]">Store Bank Account</label>
                  <input type="text" id="store-bank_account" 
                          {...register("store.bank_account", {
                            required: {value: true, message: "Store Bank Account is required"}, 
                            pattern: {value: /^TR\d{24}$/, message: "Please enter a valid IBAN format"}})}
                          placeholder="TR__________________" 
                          className="border-1 border-black rounded-md w-[350px] p-2"/>
                          {errors.store?.bank_account && (<p className="text-red-500 text-sm">{errors.store.bank_account.message}</p>)}
                </div> 
            )}          
          </div>
          <button className={`w-[250px] h-[50px] bg-blue-400 rounded-xl text-white font-semibold text-[14px] my-7 ${!isValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`} 
                  disabled={!isValid || isSubmitting }>{isSubmitting ? (
                      <div className="flex justify-center items-center gap-2">       
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing...</span>
                       </div>) : ("Submit")}
            </button>
        </form>
      </div>
    </div>
  );
};