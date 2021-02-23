import React from "react";
import { Rightwrapper, FormWrapper } from "../../layout/signIn";
import {
  FormInnerWrapper,
  FormFieldContainer,
  FormFieldWrapper,
  FormFieldLongInput,
  ButtonWrapper,
  Button,
  Form,
} from "../../layout/verificationStyle";

const VerificationForm = () => {
  return (
    <>
      <Rightwrapper>
        <FormWrapper>
          <FormInnerWrapper>
            <h2>Verification</h2>
            <Form>
              <div>
                <FormFieldLongInput>
                  <input type="text" placeholder="Validation code" />
                </FormFieldLongInput>
              </div>
              <FormFieldContainer>
                <FormFieldWrapper>
                  <input type="text" placeholder="Email" />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <input type="text" placeholder="Username" />
                </FormFieldWrapper>
              </FormFieldContainer>
              <FormFieldContainer>
                <FormFieldWrapper>
                  <input type="text" placeholder="First Name" />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <input type="text" placeholder="Last Name" />
                </FormFieldWrapper>
              </FormFieldContainer>
              <FormFieldContainer>
                <FormFieldWrapper>
                  <input type="text" placeholder="Password" />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <input type="text" placeholder="Password Repeat" />
                </FormFieldWrapper>
              </FormFieldContainer>
              <ButtonWrapper>
                <Button>Complete</Button>
              </ButtonWrapper>
            </Form>
          </FormInnerWrapper>
        </FormWrapper>
      </Rightwrapper>
    </>
  );
};

export default VerificationForm;
