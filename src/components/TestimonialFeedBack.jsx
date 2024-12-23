import styled from "styled-components";
import Cp from "../customComponents/Cp";
import Cbutton from "../customComponents/Cbutton";
import { colors } from "../constants/colors";
import { useState } from "react";
import { insertFeedback } from "../services/FeedBackApi";
import toast, { Toaster } from "react-hot-toast";
import { useAddFeedBack } from "../hooks/useAddFeedBack";
const FormLayout = styled.div`
  border-radius: 50px;
  background-color: ${colors.backGroundColor.mainWhite};
  display: flex;
  height: auto;
  width: auto;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const CustomInput = styled.input`
  border-radius: 10px;
  padding: 10px;
`;

const CustomTextArea = styled.textarea`
  border-radius: 10px;
  padding: 10px;
`;

const FormElement = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Customp = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

function TestimonialFeedBack({ onCloseModal }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { isCreating, addFeedBack } = useAddFeedBack();
  function handleSubmit(name, description) {
    if (!name || !description) {
      toast("Veuillez remplir tous les champs", { icon: "🚫" });
      return;
    }

    const feedback = {
      name: name,
      description: description,
      created_at: new Date(),
    };
    console.log(feedback);
    // Call addFeedBack with feedback, ensuring it's a mutation
    addFeedBack(
      { feedback },
      {
        onSuccess: () => {
          onCloseModal();
          toast("Merci pour votre feedback", { icon: "👍" });
        },
        onError: () => {
          toast("Error", { icon: "🚫" });
        },
      }
    );

    // Reset fields
    setName("");
    setDescription("");
  }

  return (
    <FormLayout>
      <Customp>Laisser un Testimonial :)</Customp>
      <FormElement>
        <Customp>Votre nom: </Customp>
        <CustomInput
          disabled={isCreating}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </FormElement>
      <FormElement>
        <Customp>Votre Description: </Customp>
        <CustomTextArea
          disabled={isCreating}
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          cols={30}
          rows={10}
        />
      </FormElement>
      <Cbutton
        disabled={isCreating}
        onClick={() => handleSubmit(name, description)}
        variation="secondary"
      >
        <Customp>Submit</Customp>
      </Cbutton>
    </FormLayout>
  );
}

export default TestimonialFeedBack;
