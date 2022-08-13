import React, { useState } from "react";
// react router dom module
import { Link, useLocation } from "react-router-dom";

// react icons
import { FiUserCheck } from "react-icons/fi";
import { RiTicketLine } from "react-icons/ri";
import { BsCalendarCheck } from "react-icons/bs";
// styled components module
import styled from "styled-components";

const Sidebar = () => {
  const location = useLocation();
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <SidebarStyle>
      <Logo>
        <TitleLogo>AgroIranExpert</TitleLogo>
      </Logo>
      <MenuList>
        <MenuListItem
          className={location.pathname === "/dashboard/app" ? "active" : ""}
        >
          <Link to="/dashboard/app">
            <FiUserCheck size={20} />
            <p>پیشخوان من</p>
          </Link>
        </MenuListItem>
        <MenuListItem
          className={
            location.pathname === "/dashboard/myFarmer" ? "active" : ""
          }
        >
          <Link to="/dashboard/myFarmer">
            <FiUserCheck size={20} />
            <p>کشاورزان من</p>
          </Link>
        </MenuListItem>
        <MenuListItem
          className={location.pathname === "/dashboard/profile" ? "active" : ""}
        >
          <Link to="/dashboard/profile">
            <FiUserCheck size={20} />
            <p>اطلاعات من</p>
          </Link>
        </MenuListItem>
        {/* <MenuListItem>
          <Link to="/dashboard/manage-page">
            <RiTicketLine size={20} />
            <p>مدیریت صفحه</p>
          </Link>
        </MenuListItem>
        <MenuListItem>
          <SubMenu>
            <Wrapper onClick={() => setShowSubMenu(!showSubMenu)}>
              <RiTicketLine size={20} />
              <p>مدیریت وبلاگ</p>
            </Wrapper>
            {showSubMenu && (
              <WrapperSubMenu>
                <MenuListItem
                  className={
                    location.pathname === "/dashboard/content-video"
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/dashboard/content-video">
                    <RiTicketLine size={20} />
                    <p>محتوای ویدیویی</p>
                  </Link>
                </MenuListItem>
                <MenuListItem
                  className={
                    location.pathname === "/dashboard/content-text"
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/dashboard/content-text">
                    <RiTicketLine size={20} />
                    <p>محتوای متنی</p>
                  </Link>
                </MenuListItem>
              </WrapperSubMenu>
            )}
          </SubMenu>
        </MenuListItem> */}
      </MenuList>
    </SidebarStyle>
  );
};

const SidebarStyle = styled.div`
  width: 240px;
  transition: all 0.4s ease-in-out;

  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  -webkit-box-shadow: -1px 0px 9px 0px #000000;
  box-shadow: 5px 0px 8px 0px #000000;
  @media (max-width: 899px) {
    width: 50px;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: all 0.4s ease-in-out;
`;

const TitleLogo = styled.p`
  /* background: -webkit-linear-gradient(#6980ff, #6980ff); */
  color: #005ac8;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  margin: 10px;
  @media (max-width: 899px) {
    font-size: 16px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const MenuListItem = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  font-size: 0.8rem;
  color: #495057;
  transition: 0.4s all ease-in-out;
  margin: 5px 0;

  span {
    color: ${({ theme }) => theme.text};
    margin: 0 0.5rem;
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9ea4a9;
    margin-top: 5px;
    svg {
      color: ${({ theme }) => theme.text};
      margin-left: 0.5rem;
    }
  }
  p {
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    display: flex;
    align-items: center;
    margin: 0.2rem;
  }

  &:hover {
    transform: translateX(-10px);
  }
  @media (max-width: 899px) {
    justify-content: center;
    cursor: pointer;
    p {
      display: none;
    }
    /* &:hover {
      transform: translateX(0);
    } */
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const WrapperSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Sidebar;
