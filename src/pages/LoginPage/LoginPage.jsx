import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import Button from "../../components/Button/Button";
import InputFeild from "../../components/InputFeild/InputFeild";

// action redux
import { singInUser } from "../../redux/action/auth";

// styled compontens
import styled from "styled-components";

// image background
import bg from "../../assets/images/ibrahima-toure-GAepqKfzZFI-unsplash.jpg";

const LoginPage = () => {
  const [expertCode, setExpertCode] = useState("");
  const [password, setPassword] = useState("");

  // declare useNavigate
  const navigate = useNavigate();

  // get information authData
  // const isSendotp = useSelector((state) => state.auth);
  // const { validation } = isSendotp;
  // declare dispatch
  const dispatch = useDispatch();

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!validation) {
    //   dispatch(validationUser({ phoneNumber }));
    // } else {
    dispatch(singInUser({ expertCode, password }, navigate));
    // }
  };

  return (
    <LoginStyle>
      <Right>
        <Content>
          <TitleLogo>Dayan</TitleLogo>
          <Wrapper>
            <p>خوش آمدید,</p>
            <p>لطفا به اکانت خود وارد شوید.</p>
          </Wrapper>
          <Form autocomplete="off" onSubmit={handleSubmit}>
            <FormGroup>
              {/* {validation === false ? ( */}
              <InputFeild
                type="text"
                label="کد کارشناس"
                name="expertCode"
                value={expertCode}
                onChange={(e) => setExpertCode(e.target.value)}
              />
              {/* ) : ( */}
              <InputFeild
                type="password"
                name="password"
                label="رمز عبور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* )} */}
            </FormGroup>
            <Button type="submit">ورود به داشبورد</Button>
          </Form>
        </Content>
      </Right>
      <Left>
        <img src={bg} alt="background-image" />
      </Left>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  display: flex;
  height: 100vh;
`;
const Left = styled.div`
  display: flex;
  width: 40%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
  }
  @media (max-width: 799px) {
    display: none;
  }
`;
const Right = styled.div`
  display: flex;
  /* flex: 1; */
  width: 60%;
  justify-content: center;
  align-items: center;
  padding: 2rem 6rem;
  @media (max-width: 799px) {
    width: 100%;
    padding: 2rem 2rem;
  }
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const TitleLogo = styled.p`
  background: -webkit-linear-gradient(#6980ff, #6980ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 24px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #545e62;
    margin: 5px 0px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: row;
  width: 100%;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
  padding: 2rem 0;

  @media (max-width: 799px) {
    flex-direction: column;
  }
`;

export default LoginPage;
