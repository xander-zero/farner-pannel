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
import Typography from "../../components/Typography/Typography";
import Loading from "../../components/Loading/Loading";
import expertLogin from "../../assets/images/expertLogin.svg";


const LoginPage = () => {
  const [expertCode, setExpertCode] = useState("");
  const [password, setPassword] = useState("");

  // declare useNavigate
  const navigate = useNavigate();

  const authSelector = useSelector((state) => state.auth);
  const { loading } = authSelector;

  console.log("authSelector", authSelector);

  const dispatch = useDispatch();

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(singInUser({ expertCode, password }, navigate));
  };

  const recoveryCodeHandler = () => {
      // code...
  }

  return (
    <LoginStyle>
      <Container>
        <Right>
          <Content>
            <Wrapper>
              <Typography size="24px" weight="bold" textAlign="center">
                وارد حساب خود شوید
              </Typography>
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
              <Button type="submit">
                {loading ? <Loading /> : "ورود به داشبورد"}
              </Button>
            </Form>
            <RecoveryCodeBox>
              <a href="" onClick={recoveryCodeHandler}>بازیابی رمز عبور</a>
            </RecoveryCodeBox>
          </Content>
        </Right>
        
        <Left>
          <img src={expertLogin} alt="background-image" />
          {/* <Typography size="24px">
            به پنل کارشناسان agroIranExpert خوش آمدید.
          </Typography> */}
        </Left>

      </Container>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #DADADA;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 80vh;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 500px;
  background-color: #dde6f8;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
  @media (max-width: 799px) {
    display: none;
  }
`;
const Right = styled.div`
  display: flex;
  /* flex: 1; */
  width: 45%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 799px) {
    width: 100%;
    padding: 2rem 2rem;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
const TitleLogo = styled.p`
  background: -webkit-linear-gradient(#6980ff, #6980ff);
  /* -webkit-background-clip: text; */
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
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #e9ecef;
  /* border-bottom: 1px solid #e9ecef; */
  padding: 2rem 0;

  @media (max-width: 799px) {
    flex-direction: column;
  }
`;

const RecoveryCodeBox = styled.div`
    width: 100%;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;

`

export default LoginPage;
