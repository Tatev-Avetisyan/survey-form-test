import { ChangeEvent, useState } from "react";
import SurveyNameInput from "./NameInput";
import FormSelect from "./FormSelect";
import RecipientsRadioGroup from "./RecipientsRadioGroup";
import DateInput from "./DateInput";
import NotesTextarea from "./NotesTextarea";
import SubmitButton from "./SubmitButton";

const Form = () => {
  const [surveyName, setSurveyName] = useState("");
  const [form, setForm] = useState("");
  const [recipients, setRecipients] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(surveyName, form, recipients, deadlineDate, notes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SurveyNameInput
        value={surveyName}
        onChange={(e) => setSurveyName(e.target.value)}
      />
      <FormSelect value={form} onChange={(e) => setForm(e.target.value)} />
      <RecipientsRadioGroup
        selectedOption={recipients}
        onChange={(e) => setRecipients(e.target.value)}
      />

      <DateInput
        value={deadlineDate}
        onChange={(e) => setDeadlineDate(e.target.value)}
      />
      <NotesTextarea value={notes} onChange={(e) => setNotes(e.target.value)} />

      <SubmitButton />
    </form>
  );
};

export default Form;
