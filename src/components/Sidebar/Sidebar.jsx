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
  const sidebarData = [
    {
      id: 1,
      path: ["/dashboard/app"],
    },
    {
      id: 2,
      path: ["/dashboard/myFarmer"],
    },
    {
      id: 3,
      path: ["/dashboard/manage-page"],
    },
  ];
  return (
    <SidebarStyle>
      <Logo>
        <TitleLogo>Agrodayan Expert</TitleLogo>
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
          className={
            location.pathname === "/dashboard/manage-page" ? "active" : ""
          }
        >
          <Link to="/dashboard/manage-page">
            <RiTicketLine size={20} />
            <p>مدیریت صفحه</p>
          </Link>
        </MenuListItem>
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
  color: #00d25b;
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

export default Sidebar;
