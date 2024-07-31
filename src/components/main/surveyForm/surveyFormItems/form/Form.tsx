import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import SurveyNameInput from "./NameInput";
import FormSelect from "./FormSelect";
import RecipientsRadioGroup from "./RecipientsRadioGroup";
import DateInput from "./DateInput";
import NotesTextarea from "./NotesTextarea";
import SubmitButton from "./SubmitButton";

const SUBMIT_FORM_MUTATION = gql`
  mutation SubmitForm(
    $surveyName: String!
    $form: String!
    $recipients: String!
    $deadlineDate: String!
    $notes: String!
  ) {
    submitForm(
      input: {
        surveyName: $surveyName
        form: $form
        recipients: $recipients
        deadlineDate: $deadlineDate
        notes: $notes
      }
    ) {
      success
      message
    }
  }
`;

const Form = () => {
  const [surveyName, setSurveyName] = useState("");
  const [form, setForm] = useState("");
  const [recipients, setRecipients] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [notes, setNotes] = useState("");

  const [submitForm] = useMutation(SUBMIT_FORM_MUTATION);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await submitForm({
        variables: {
          surveyName,
          form,
          recipients,
          deadlineDate,
          notes,
        },
      });
      console.log(data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
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
