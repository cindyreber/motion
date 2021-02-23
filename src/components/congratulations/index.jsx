import styled from "styled-components";
import { connect } from "react-redux";
import {
  Rightwrapper,
  FormWrapper,
  FormInnerWrapper,
  Button,
} from "../../layout/signIn";
import checkmark from "./checkmark.png";

/* const CongratsHeadline = styled.h2`
    font-size: 48px;
    font-weight: 300;
    padding-bottom: 30px;
    font-weight: 400;
  `; */

const TextStyle = styled.p`
  text-align: center;
  color: grey;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const Checkmark = styled.img`
  width: 10%;
  height: 10%;
`;

const Congratulations = (props) => {
  return (
    <Rightwrapper>
      <FormWrapper>
        <FormInnerWrapper>
          <h2>Congratulations!</h2>
          <Checkmark src={checkmark} />
          <TextStyle>
            We've sent a confirmation code to your email <br></br>
            {props.signupData.email}
          </TextStyle>
          <Button>CONTINUE</Button>
        </FormInnerWrapper>
      </FormWrapper>
    </Rightwrapper>
  );
};
const mapStateToProps = (state) => {
  return { signupData: state.email };
};

export default connect(mapStateToProps)(Congratulations);
