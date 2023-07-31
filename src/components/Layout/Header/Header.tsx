// components/Layout/Header/Header.tsx
"use client";
import styled from "@emotion/styled";
import oc from "open-color";
import Icon from "@/src/util/Icon";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Link href="/">
          <LogoWrapper>
            <Icon
              name={"logo1"}
              height="92px"
              width="46px"
              //   style={{ background: "#fff" }}
            />
          </LogoWrapper>
        </Link>
      </Wrapper>
      <h2> 병원 관리자</h2>
    </header>
  );
};

export default Header;

const Wrapper = styled.div`
  /* 레이아웃 */
  display: flex;
  position: fixed;
  align-items: center;

  height: 64px;
  width: 100%;
  top: 0px;
  z-index: 5;

  /* 색상 */
  background: #3D3DC1;
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);

  /* 폰트 */
  font-size: 2.5rem;
`;

const LogoWrapper = styled.div`
  color: white;
  margin-left: 10%;
  /* 폰트 */
  font-size: 2.5rem;
  svg {
    fill: white;
    margin-left: 10px;
    path {
        fill: white;
    }
  }
`;