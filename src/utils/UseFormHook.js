import { useCallback, useState } from "react";

//хук управления формой

// название хука котрое будет везде использоваться
export default function UseFormHook() {
  // мы создаём три стейта для хранения данных из формы\

  // валью инпута
  const [values, setValues] = useState({});

  // текст ошибки
  const [errors, setErrors] = useState({});
  // валидна ли форма? да нет
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
