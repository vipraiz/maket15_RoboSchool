import { validateForms } from "../functions/validate-forms";
const rules = [
  {
    ruleSelector: ".order__input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".order__input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".order__input-email",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните email!",
      },
      {
        rule: "email",
        value: true,
        errorMessage: "Введите корректный email!",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms(".order__form", rules, afterForm);
