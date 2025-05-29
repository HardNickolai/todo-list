export const ruleInputDefault = (event: undefined | string) => {
  if (!event) {
    return "Пустое поле";
  } else {
    return true;
  }
};

export const handleInputDefault = (event: KeyboardEvent) => {
  if (event.key === " ") {
    event.preventDefault()
  }
};
