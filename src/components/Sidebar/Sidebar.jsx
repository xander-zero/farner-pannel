import React, { useState } from "react";
// react router dom module
import { Link, useLocation } from "react-router-dom";

// react icons
import { FiUsers } from "react-icons/fi";
import { IoIosRecording, IoMdArrowDropdown } from "react-icons/io";
import {
  MdOutlineDashboardCustomize,
  MdOutlineManageSearch,
} from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrUnorderedList } from "react-icons/gr";
// styled components module
import styled from "styled-components";

import { FiUserCheck } from "react-icons/fi";
import { RiTicketLine } from "react-icons/ri";
import { BsCalendarCheck } from "react-icons/bs";
import {RiDashboardLine} from "react-icons/ri";
import {GiFarmer} from "react-icons/gi";
import {RiProfileLine} from "react-icons/ri";

import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  const location = useLocation();
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <SidebarStyle>
      <Logo>
        <img src={logo} />
      </Logo>

      <MenuList>

        <MenuListItem className={location.pathname === "/dashboard/app" ? "active" : ""}>
          <Link to="/dashboard/app">
          <RiDashboardLine size={25}/>
            <p>پیشخوان من</p>
          </Link>
        </MenuListItem>

        <MenuListItem
          className={
            location.pathname === "/dashboard/myFarmer" ? "active" : ""
          }
        >
          <Link to="/dashboard/myFarmer">
          <GiFarmer size={25} />
            <p>کشاورزان من</p>
          </Link>
        </MenuListItem>

        <MenuListItem
          className={
            location.pathname === "/dashboard/manage-page" ? "active" : ""
          }
        >
          <Link to="/dashboard/manage-page">
            <MdOutlineManageSearch size={25} />
            <p>مدیریت صفحه</p>
          </Link>
        </MenuListItem>

        <MenuListItem
          className={
            location.pathname === "/dashboard/profile" ||
            location.pathname === "/dashboard/record-profession"
              ? "active"
              : ""
          }
          onMouseEnter={() => setShowSubMenu(!showSubMenu)}

        >
          {/* <Link to="/dashboard/profile"> */}
          <RiProfileLine size={25} />
          <div className="d-flex align-items-center">
            <p>حرفه و مهارت ها </p>
            <IoMdArrowDropdown style={{marginRight : "2.5rem"}} />
          </div>
          {/* </Link> */}
        </MenuListItem>

        {showSubMenu && (
          <>
            <SubMenuListItem
              className={
                location.pathname === "/dashboard/profile" ? "active-sub" : ""
              }
            >
              <Link to="/dashboard/profile">
                <IoIosRecording size={20} />
                <p>ثبت حرفه و مهارت</p>
              </Link>
            </SubMenuListItem>

            <SubMenuListItem
              className={
                location.pathname === "/dashboard/record-profession"
                  ? "active-sub"
                  : ""
              }
            >
              <Link to="/dashboard/record-profession">
                <GrUnorderedList size={20} />
                <p>حرفه ها و مهارت های من</p>
              </Link>
            </SubMenuListItem>
          </>
        )}
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
  height: 68px;

  img {
    width: 60px;
  }
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
  /* gap: 1rem; */
`;

const MenuListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  color: #495057;
  transition: 0.4s all ease-in-out;
  /* margin: 5px 0; */
  cursor: pointer;
  /* background-color: red; */
  padding: 10px 0;
  
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
    font-size: 1rem;
  }

  &:hover {
    /* transform: translateX(-10px); */
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

const SubMenuListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  color: #495057;
  transition: 0.4s all ease-in-out;
  /* margin: 5px 0; */
  cursor: pointer;
  /* background-color: red; */
  padding: 10px 0;
  margin-right: 4rem;
  
  span {
    color: ${({ theme }) => theme.text};
    margin: 0 0.5rem;
    font-size: 0.8rem;
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
    font-size: 0.8rem;
  }

  &:hover {
    /* transform: translateX(-10px); */
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
