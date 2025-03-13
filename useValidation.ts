const useValidation = () => {
    // Email validation function
    const validateEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    // Phone number validation (Ensures 10-digit number)
    const validatePhone = (phone: string): boolean => {
      const phoneRegex = /^[0-9]{10}$/;
      return phoneRegex.test(phone);
    };
  
    // Password validation (Minimum 6 characters)
    const validatePassword = (password: string): boolean => {
      return password.length >= 6;
    };
  
    // General required field validation
    const validateRequired = (value: string): boolean => {
      return value.trim() !== "";
    };
  
    return {
      validateEmail,
      validatePhone,
      validatePassword,
      validateRequired,
    };
  };
  
  export default useValidation;
  