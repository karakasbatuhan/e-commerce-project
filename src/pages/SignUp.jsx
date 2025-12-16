import { useEffect, useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../store/actions/globalActions.js";
import { signUser } from "../store/actions/globalActions.js";

export default function SignUpForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  const dispatch = useDispatch(); // redux dispatch fonksiyonunu aldık
  const roles = useSelector((state) => state.client.roles); // redux store'dan rolleri aldık

    useEffect(() => {
      dispatch(fetchRoles());
    }, []); //sayfa ilk render olduğunda rolleri çektik

    useEffect(() => {
      if(roles && roles.length > 0) {
        const customerRole = roles.find(role => role.code === 'customer');
        if(customerRole) {
          setValue('role_id', customerRole.id.toString());
        }
      }
    }, [roles]); // roles yüklendiğinde varsayılan rolü customer olarak ayarladık

  const { register, handleSubmit, reset, watch, setValue, formState: { errors, isValid, isSubmitting } } = useForm({
      mode: 'onChange'      
    }); 

  const currentRoleId = watch("role_id"); // seçilen rolü izliyoruz çünkü formun dinamik alanlarını buna göre göstereceğiz

  // Roller küçük harflerle gelebilir, ilk harfi büyük yapıyoruz
  const capitalizeFirstLetter = (string) => {
    if (!string || typeof string !== 'string' || string.length === 0) {
      return "";
    }
    const firstLetter = string.charAt(0).toUpperCase();
    const restOfString = string.slice(1).toLowerCase();
    return firstLetter + restOfString;
};

// Form submit fonksiyonu
function submitFn(formData) {    
      dispatch(signUser(formData));
      reset();
  };
  

  return (
    <div className="flex w-[100%] h-[1000px] justify-center items-center bg-gray-200 font-montserrat">
      <div className={`flex w-[400px] h-[${currentRoleId === '2' ? '930px' : '640px'}] rounded-2xl justify-center items-start pt-10 bg-white shadow-xl/40`}>
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
              <select name="role_id" className="border-2 border-black rounded-md p-2" {...register("role_id")} /*onChange={handleRoleChange} value={selectedRoleId}*/>     
                  {roles?.map((roleData) => (
                  <option key={roleData.id} value={roleData.id}>
                      {capitalizeFirstLetter(roleData.code)}                       
                  </option>
                  ))}            
              </select>
            </div>
            {currentRoleId === '2' && (
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
          <button className={`w-[350px] h-[50px] bg-blue-400 rounded-xl text-white font-semibold text-[14px] my-7 ${!isValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`} 
                  disabled={!isValid || isSubmitting }>{isSubmitting ? (
                      <div className="flex justify-center items-center gap-2">       
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing...</span>
                       </div>) : ("SUBMIT")}
            </button>
        </form>
      </div>
    </div>
  );
};